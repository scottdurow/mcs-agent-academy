import type MarkdownIt from "markdown-it";
/**
 * Injects `<preview-banner />` after the page title and its `<mission-meta />`
 * block. The component itself decides whether to render, based on the
 * `preview` frontmatter field.
 */
export const previewBannerPlugin = (md: MarkdownIt) => {
  md.core.ruler.push("preview_banner", (state) => {
    const tokens = state.tokens;

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
