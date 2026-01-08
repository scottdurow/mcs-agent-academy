# Mission 10: Arrange an interview prep-meeting with Model Context Protocol servers

--8<-- "disclaimer.md"

## 🕵️‍♂️ CODENAME: `OPERATION MCP RENDEZVOUS`

> **⏱️ Operation Time Window:** `~45 minutes`

## 🎯 Mission Brief

Welcome, Operative. Your previous missions have shown you the power of prompts. You learned about multimodal document analysis, grounding your prompts with Dataverse data and document generation. Now you'll unlock another advanced capability: **Model Context Protocol (MCP) server integration**.

Your assignment, should you choose to accept it, is **Operation MCP Rendezvous**. In this operation you'll be connecting your agent to external MCP servers to extend its capabilities, enabling it to arrange interview prep meetings.

## 🔎 Objectives

In this mission, you'll learn:

1. How to understand and work with the Model Context Protocol (MCP) standard
1. How to use Agent 365 to integrate MCP servers with your Copilot Studio agents
1. How to connect your Copilot Studio agent to MCP servers
1. How to leverage MCP server capabilities within your agents

## 🔌 What is MCP?

**Model Context Protocol (MCP)** is an open standard that enables AI assistants to securely connect to external data sources and tools. Think of MCP as the **USB-C of AI integration** – just as USB-C provides a universal connector for various devices and peripherals, MCP provides a standardized way for AI systems to connect to different services, databases, and applications.

Before USB-C, every device had its own proprietary connector (remember all those different charger cables?). Similarly, before MCP, connecting AI agents to external systems required custom integrations for each service. MCP solves this by providing a universal "plug-and-play" protocol.

### ✨ Key benefits of MCP

- **Universal connectivity**: One standard protocol works across different AI platforms and data sources
- **Secure access**: Built-in authentication and permission controls protect your data
- **Extensibility**: Easily add new capabilities to your agents without rewriting core logic
- **Interoperability**: MCP servers can work with multiple AI assistants and applications

In this mission, you'll use MCP to connect your Copilot Studio agent to external services, dramatically expanding what your agent can do beyond its built-in capabilities.

## 🛠️ Where does Agent 365 come in?

**Agent 365** is Microsoft's comprehensive platform for managing and extending AI agents at enterprise scale. It gives each AI agent its own **Microsoft Entra Agent ID** for identity, lifecycle, and access management, while providing the infrastructure to safely connect agents to business systems through MCP servers.

Think of Agent 365 as the **enterprise control plane** for your AI agents - it handles security, governance, and observability while enabling agents to interact with Microsoft 365 and business applications through standardized MCP tooling servers.

### 👥 How Agent 365 serves different roles

Agent 365 addresses the needs of everyone involved in the agent ecosystem:

- **IT Administrators**: Monitor agent activity, enforce policies, and manage threats through the Microsoft 365 admin center
- **Security Teams**: Apply enterprise-grade controls for identity, authentication, and compliance with Microsoft Purview and Defender integration
- **Developers**: Build and extend agents using unified SDKs, pre-built MCP servers, and frameworks in Copilot Studio or Azure AI Foundry
- **Business Decision Makers**: Deploy agents securely and measure their impact on productivity and business outcomes
- **Information Workers**: Collaborate with agents seamlessly to amplify productivity

### 🔧 Agent 365 tooling servers for MCP integration

Agent 365 provides **enterprise-grade MCP servers** that give your agents safe, governed access to business systems:

**Pre-built MCP servers** for Microsoft 365 and business applications:

- **Outlook Calendar**: Create, update, and manage calendar events
- **Outlook Mail**: Send, read, and search emails  
- **Teams**: Create chats, post messages, and manage channels
- **SharePoint & OneDrive**: Upload files, manage lists, and search documents
- **Word**: Create and edit documents, add comments
- **Dataverse & Dynamics 365**: Perform CRUD operations on business data
- **User Profile**: Access user information, managers, and direct reports
- **Copilot Search**: Chat with Microsoft 365 Copilot and ground responses with files

**Enterprise security and governance**:

- **Centralized control**: Manage all MCP servers through the Microsoft 365 admin center - allow or block servers organization-wide
- **Scoped permissions**: Agents only access the resources they need based on Microsoft Entra scopes
- **Full observability**: Monitor and audit all tool calls using Microsoft Defender Advanced Hunting
- **Policy enforcement**: Apply DLP, MIP, rate limits, and security scans at runtime
- **Threat protection**: Detect and remediate attacks targeting agents with Microsoft Defender integration

**Custom MCP server creation**:

- Build scenario-specific servers using the **MCP Management Server** - an API-first tool for creating custom MCP servers
- Connect to **1,500+ Power Platform connectors** (ServiceNow, JIRA, etc.)
- Integrate **Microsoft Graph APIs**, **REST APIs**, and **Dataverse custom APIs**
- Publish and certify custom servers for your organization
- Enable ISVs to build and publish certified servers

**Developer experience**:

- Available in both **Copilot Studio** (low-code) and **Azure AI Foundry** (pro-code)
- Built into the **Agent 365 SDK** for seamless integration
- **Visual Studio Code** integration for creating and testing custom MCP servers
- Consistent, standardized interfaces across all tooling servers

### 💡 Why this matters for your agents

Agent 365 transforms MCP from an open standard into an enterprise-ready platform. Your agents get:

- **Deterministic, auditable actions** - every tool call is tracked and governed
- **Production-grade reliability** - all MCP servers undergo rigorous testing for accuracy, latency, and reliability  
- **Security by default** - enterprise controls are built-in, not bolted on
- **Rapid development** - pre-built servers for common scenarios, easy customization for specialized needs
- **Unified management** - one control plane for all agents, regardless of where they're built

### 🎯 What you'll focus on in this mission

While Agent 365 offers a comprehensive platform for agent management, governance, and custom MCP server development, **this mission focuses specifically on using pre-built MCP servers** in Copilot Studio.

You'll learn how to connect your agent to ready-made tooling servers (like Outlook Calendar and Teams) and enable real actions in Microsoft 365 applications - without building custom integrations. Think of this as learning to use the tools already in the toolbox before building your own.

## 🧪 Lab 10: Add MCP Servers to arrange an interview prep-meeting

## 🎉 Mission Complete

Great work, Operative! **Operation MCP Rendezvous** is now complete. You've successfully integrated external MCP servers with your Copilot Studio agent, unlocking powerful new capabilities for extending your agent's functionality!

🚀 **Next up:** In your next mission, you'll learn how to collect and analyze user feedback to continuously improve your agent's performance.

⏩ [Move to Mission 11: Collecting feedback from users](../11-obtain-user-feedback/README.md)

## 📚 Tactical Resources

📖 [Microsoft Copilot Studio ❤️ MCP Lab](https://aka.ms/mcsmcp/lab)

📖 [Model Context Protocol - Getting Started](https://modelcontextprotocol.io/docs/getting-started/intro)

📖 [Extend agents with MCP in Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/agent-extend-action-mcp)

📖 [Microsoft Agent 365 Overview](https://learn.microsoft.com/microsoft-agent-365/overview)

📖 [Microsoft Agent 365 Tooling Servers Overview](https://learn.microsoft.com/microsoft-agent-365/tooling-servers-overview)
