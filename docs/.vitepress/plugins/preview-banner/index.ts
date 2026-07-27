import type MarkdownIt from "markdown-it";

/**
 * Injects `<preview-banner />` after the page title and its `<mission-meta />`
 * block when the page sets a truthy `preview` frontmatter field. The component
 * reads the same field to build the message it renders.
 */
export const previewBannerPlugin = (md: MarkdownIt) => {
  md.core.ruler.push("preview_banner", (state) => {
    const preview = state.env?.frontmatter?.preview;
    const enabled =
      preview === true ||
      (typeof preview === "string" && preview.trim() !== "");
    if (!enabled) return;

    const tokens = state.tokens;

    // Avoid injecting the banner twice if a page includes it manually.
    if (tokens.some((t) => t.content.includes("<preview-banner"))) return;

    let insertAt = tokens.findIndex(
      (token) => token.type === "heading_close" && token.tag === "h1"
    );
    insertAt = insertAt === -1 ? 0 : insertAt + 1;
    // Keep the banner below the `<mission-meta />` block when the page has one.
    const metaAt = tokens.findIndex(
      (token, i) => i >= insertAt && token.content.includes("<mission-meta")
    );
    if (metaAt !== -1 && metaAt <= insertAt + 2) {
      insertAt = tokens[metaAt].type === "inline" ? metaAt + 2 : metaAt + 1;
    }

    const token = new state.Token("html_block", "", 0);
    token.content = "<preview-banner />\n";
    tokens.splice(insertAt, 0, token);
  });
};
