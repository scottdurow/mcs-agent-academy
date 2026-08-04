import assert from "node:assert/strict";
import type { AddressInfo } from "node:net";
import { after, before, test } from "node:test";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
import { request, type Server } from "node:http";
import { createApp } from "./server.js";

let server: Server;
let endpoint: URL;

function requestStatus(
  url: URL,
  method: string,
  headers: Record<string, string>,
  body?: string
): Promise<number> {
  return new Promise((resolve, reject) => {
    const outgoing = request(url, { method, headers }, (response) => {
      response.resume();
      response.on("end", () => resolve(response.statusCode ?? 0));
    });
    outgoing.on("error", reject);
    if (body) {
      outgoing.write(body);
    }
    outgoing.end();
  });
}

before(async () => {
  const app = createApp({
    host: "127.0.0.1",
    allowedHosts: ["127.0.0.1", "localhost"],
    allowedOrigins: ["https://allowed.example"],
    rateLimit: 100,
  });

  server = await new Promise<Server>((resolve) => {
    const listener = app.listen(0, "127.0.0.1", () => resolve(listener));
  });

  const address = server.address() as AddressInfo;
  endpoint = new URL(`http://127.0.0.1:${address.port}/mcp`);
});

after(async () => {
  await new Promise<void>((resolve, reject) => {
    server.close((error) => (error ? reject(error) : resolve()));
  });
});

test("an MCP client can discover all joke tools", async () => {
  const client = new Client({ name: "integration-test", version: "1.0.0" });
  await client.connect(new StreamableHTTPClientTransport(endpoint));

  try {
    const result = await client.listTools();
    assert.deepEqual(result.tools.map((tool) => tool.name).sort(), [
      "get-chuck-categories",
      "get-chuck-joke",
      "get-chuck-joke-by-category",
      "get-dad-joke",
    ]);

    const categoryTool = result.tools.find(
      (tool) => tool.name === "get-chuck-joke-by-category"
    );
    assert.equal(categoryTool?.inputSchema.type, "object");
    assert.ok(categoryTool?.inputSchema.properties?.category);
  } finally {
    await client.close();
  }
});

test("Host and Origin validation reject browser rebinding attempts", async () => {
  const body = JSON.stringify({
    jsonrpc: "2.0",
    id: 1,
    method: "initialize",
    params: {
      protocolVersion: "2025-06-18",
      capabilities: {},
      clientInfo: { name: "security-test", version: "1.0.0" },
    },
  });

  const invalidHost = await requestStatus(
    endpoint,
    "POST",
    {
      Accept: "application/json, text/event-stream",
      "Content-Type": "application/json",
      Host: "evil.example",
    },
    body
  );
  assert.equal(invalidHost, 403);

  const invalidOrigin = await requestStatus(
    endpoint,
    "POST",
    {
      Accept: "application/json, text/event-stream",
      "Content-Type": "application/json",
      Origin: "https://evil.example",
    },
    body
  );
  assert.equal(invalidOrigin, 403);

  const allowedOrigin = await fetch(endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json, text/event-stream",
      "Content-Type": "application/json",
      Origin: "https://allowed.example",
    },
    body,
  });
  assert.equal(allowedOrigin.status, 200);
});

test("stateless methods and rate limiting remain bounded", async () => {
  const app = createApp({
    host: "127.0.0.1",
    allowedHosts: ["127.0.0.1"],
    allowedOrigins: [],
    rateLimit: 2,
  });
  const limitedServer = await new Promise<Server>((resolve) => {
    const listener = app.listen(0, "127.0.0.1", () => resolve(listener));
  });

  try {
    const address = limitedServer.address() as AddressInfo;
    const url = new URL(`http://127.0.0.1:${address.port}/mcp`);
    const headers = { Accept: "application/json, text/event-stream" };
    assert.equal((await fetch(url, { headers })).status, 405);
    assert.equal((await fetch(url, { method: "DELETE", headers })).status, 405);

    const limited = await fetch(url, { headers });
    assert.equal(limited.status, 429);
    assert.ok(limited.headers.get("ratelimit"));
  } finally {
    await new Promise<void>((resolve, reject) => {
      limitedServer.close((error) => (error ? reject(error) : resolve()));
    });
  }
});
