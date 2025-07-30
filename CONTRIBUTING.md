# Contributing to MCS Agent Academy

Thank you for your interest in contributing to the MCS Agent Academy! This guide will help you set up your development environment and understand our documentation standards.

## Documentation Standards

We follow Microsoft's documentation standards to ensure consistent, high-quality content. For comprehensive guidance on writing effective documentation, please refer to:

📖 **[Microsoft Docs Authoring Pack](https://learn.microsoft.com/en-us/contribute/content/how-to-write-docs-auth-pack)** - Complete guide to writing documentation that follows Microsoft's style and standards.

This resource covers:

- Writing clear, concise content
- Using proper markdown syntax
- Following consistent terminology
- Structuring documentation effectively
- Accessibility best practices

## Markdown Linting

We use markdownlint to ensure consistent formatting and quality across all our documentation. This helps maintain readability and professional standards throughout the repository.

### Installing markdownlint-cli2

To run markdownlint locally and match our GitHub workflow, install markdownlint-cli2:

```powershell
npm install -g markdownlint-cli2
```

### Running markdownlint locally

Once installed, you can run markdownlint on all markdown files in the repository:

```powershell

# Scan all markdown files in the repository
markdownlint-cli2 "**/*.md"

# Scan a specific file
markdownlint-cli2 "docs/recruit/README.md"

# Auto-fix issues that can be automatically resolved in the docs directory
markdownlint-cli2 --fix "**/*.md"
```

### Configuration

Our markdownlint configuration is defined in `.markdownlint.jsonc` at the root of the repository. This configuration:

- Disables line length checks (MD013) as we haven't defined a standard
- Allows duplicate headings in siblings only (MD024) for common template sections
- Disables ordered list prefix validation (MD029) globally due to indented content resetting numbering
- Allows code blocks to be used for text (MD046)

### Adding inline exceptions for markdownlint rules

While our global configuration handles most common scenarios, you may encounter situations where you need to add inline exceptions for specific markdownlint rules in individual files. Here are examples of how to do this:

#### Option 1: Ignore for the next line

```markdown
<!-- markdownlint-disable-next-line MD029 -->
6. This list item will ignore MD029 (note: starts with 6 instead of 1)

<!-- markdownlint-disable-next-line MD013 -->
This is a very long line that would normally trigger the line length rule but will be ignored for this specific line.
```

#### Option 2: Ignore for a specific range

```markdown
<!-- markdownlint-disable MD029 -->
1. First item
5. Fifth item (skips numbers but won't trigger MD029)
10. Tenth item
<!-- markdownlint-enable MD029 -->

<!-- markdownlint-disable MD013 -->
Multiple very long lines that exceed the character limit
can be placed between disable and enable comments
<!-- markdownlint-enable MD013 -->
```

#### Option 3: Ignore for the entire file

```markdown
<!-- markdownlint-disable MD029 -->
<!-- markdownlint-disable MD013 -->
```

> Place these at the very top of your markdown file to disable specific rules for the entire document

### When to use inline exceptions

You might need exceptions for various markdownlint rules when:

1. **MD029 (Ordered list numbering)**: Continuing numbered lists after other content, intentional numbering that doesn't start from 1, or complex nested content
2. **MD013 (Line length)**: Code examples, URLs, or technical content that can't be reasonably broken across lines
3. **MD033 (Inline HTML)**: When you need specific HTML elements for formatting that can't be achieved with markdown
4. **MD041 (First line heading)**: Template files or documents that intentionally don't start with a heading

### Best practices

1. **Use exceptions sparingly**: Only add exceptions when necessary for documentation clarity
2. **Comment your exceptions**: When using exceptions, consider adding a brief comment explaining why
3. **Prefer `markdownlint-disable-next-line`**: This is more precise than disabling for entire sections
4. **Run linter before committing**: Always run `markdownlint-cli2 "**/*.md"` before submitting changes

### Common markdownlint errors and fixes

- **MD036**: Use proper headings (`## Heading`) instead of emphasis (`**Bold text**`)
- **MD007**: Fix unordered list indentation (use 2 spaces, not 4)
- **MD022**: Add blank lines before and after headings
- **MD032**: Add blank lines before and after lists
- **MD009**: Remove trailing spaces at the end of lines

### GitHub workflow

Our repository includes a GitHub workflow that automatically runs markdownlint on all pull requests. The workflow:

- Uses the same markdownlint-cli2 tool you can run locally
- Excludes `SUPPORT.md`, `SECURITY.md`, and `CODE_OF_CONDUCT.md` files
- Uses our `.markdownlint.jsonc` configuration
- Reports issues as warnings, allowing PRs to merge while highlighting formatting opportunities

### VS Code markdownlint Extension

If you're using VS Code, we recommend installing the [markdownlint extension](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) for real-time markdown linting:

1. **Install the extension** - Search for "markdownlint" by David Anson in the VS Code extensions marketplace
2. **Automatic configuration** - The extension will automatically use your `.markdownlint.jsonc` configuration file
3. **Real-time feedback** - See squiggly underlines on markdown formatting issues as you type
4. **Quick fixes** - Use `Ctrl+.` (Cmd+. on Mac) to see available auto-fixes for many issues
5. **Problems panel** - View all markdown issues in the VS Code Problems panel

This provides immediate feedback while writing, making it easier to follow markdown standards before committing your changes.

## Spell Checking

We use cSpell (Code Spell Checker) to maintain consistent spelling across all our documentation. This helps ensure professional quality and reduces typos throughout the repository.

### Installing cSpell

To run cSpell locally, install it globally:

```powershell
npm install -g cspell
```

### Running cSpell locally

Once installed, you can run cSpell to check spelling in the documentation:

```powershell
# Check all markdown files in the docs folder
cspell "docs/**/*.md"

# Check all markdown files in the repository
cspell "**/*.md"

# Check a specific file
cspell "docs/recruit/README.md"

# Show suggestions for misspelled words
cspell --show-suggestions "docs/**/*.md"

# Check with minimal output (cleaner display)
cspell --no-progress --no-summary "docs/**/*.md"
```

### Configuration

Our cSpell configuration is defined in `cspell.json` at the root of the repository. This configuration:

- Includes custom words specific to our domain (Copilot, SharePoint, Dataverse, etc.)
- Ignores common file types that don't need spell checking (images, build files)
- Sets the language to English for spell checking

### Adding new words

If you encounter a word that cSpell flags as misspelled but is actually correct (like product names, technical terms, or proper nouns), you can add it to the `words` array in `cspell.json`:

```json
{
  "words": [
    "Contoso",
    "Dataverse",
    "YourNewWord"
  ]
}
```

### VS Code cSpell Extension

If you're using VS Code with the [Code Spell Checker extension](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker), you can quickly add words to your configuration:

1. **View spelling errors** - Look for squiggly underlines on misspelled words
1. **Use Quick Fix** - Right-click on the underlined word or use `Ctrl+.` (Cmd+. on Mac)
1. **Add to config** - Select "Spelling -> Add to cSpell configuration" from the context menu
1. **Choose location** - The extension will automatically add the word to your `cspell.json` file

This is much faster than manually editing the configuration file for individual words.

### Best practices for spelling

1. **Run spell check before committing**: Always run `cspell "docs/**/*.md"` before submitting changes
1. **Fix typos rather than ignoring**: When possible, fix actual spelling errors rather than adding them to the word list
1. **Use consistent terminology**: Stick to established product names and technical terms

## Local Documentation Preview with MkDocs

We use MkDocs with the Material theme to generate our documentation site. You can run it locally to preview your changes before submitting a pull request.

📖 **Learn more**: [MkDocs Documentation](https://www.mkdocs.org/) | [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)

### Setting up Python Environment in VS Code

We recommend using a virtual environment to isolate dependencies for this project. VS Code makes this process seamless and will handle Python installation if needed.

> **GitHub Codespaces**: These instructions work perfectly in GitHub Codespaces, which comes with Python pre-installed and the VS Code environment ready to use.

📖 **Learn more**: [Python in VS Code](https://code.visualstudio.com/docs/languages/python) | [Python environments in VS Code](https://code.visualstudio.com/docs/python/environments)

#### Prerequisites

**Install Python Extension**: Install the [Python extension](https://marketplace.visualstudio.com/items?itemName=ms-python.python) by Microsoft from the VS Code marketplace if you haven't already.

#### Setup in VS Code

1. **Create a virtual environment**:
   - Open Command Palette (`Ctrl+Shift+P` on Windows/Linux, `Cmd+Shift+P` on Mac)
   - Type "Python: Create Environment" and select it
   - Choose "Venv" (virtual environment)
   - If no Python interpreters are available, VS Code will guide you through installing Python
   - Select your Python interpreter (Python 3.8+)
   - VS Code will create `.venv` folder and automatically activate it

2. **Verify setup**:
   - Open a new integrated terminal (`` Ctrl+Shift+` `` on Windows/Linux, `` Cmd+Shift+` `` on Mac, or `View > Terminal`)
   - You should see `(.venv)` in the terminal prompt
   - Run: `python --version` to verify

> **Note**: Opening a new terminal ensures the Python environment is properly activated. If you prefer to use an existing Python environment instead of creating a new virtual environment, you can use "Python: Select Interpreter" from the Command Palette and choose your preferred environment.

### Installing MkDocs in VS Code

With your Python environment set up in VS Code, install MkDocs and the Material theme:

1. **Open VS Code's integrated terminal** (`Ctrl+`` ` or `View > Terminal`)
2. **Ensure your virtual environment is active** (you should see `(.venv)` in the prompt)
3. **Install the packages**:

   ```bash
   pip install mkdocs mkdocs-material
   ```

### Running MkDocs in VS Code

To start the local development server with hot reload:

1. **In VS Code's integrated terminal**, run:

   ```bash
   mkdocs serve
   ```

2. **The site will be available at**: `http://127.0.0.1:8000/agent-academy/`

### Preview in VS Code Simple Browser

For the best development experience without leaving VS Code:

1. **Start MkDocs server** in the integrated terminal (as shown above)
2. **Open Simple Browser**:
   - **Method 1**: Open Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
   - Type "Simple Browser: Show" and select it
   - Enter URL: `http://127.0.0.1:8000/agent-academy/`

   - **Method 2**: Right-click on the URL in the terminal output and select "Follow Link"

   - **Method 3**: Use `Ctrl+Click` (Windows) or `Cmd+Click` (Mac) on the URL in the terminal

3. **Position the browser**: You can dock the Simple Browser alongside your editor for side-by-side editing and preview

### VS Code Workspace Benefits

Working entirely within VS Code provides these advantages:

- **Integrated terminal**: No need to switch between applications
- **Side-by-side preview**: Edit markdown and see changes simultaneously  
- **Link navigation**: Click terminal URLs directly to open Simple Browser
- **Extension integration**: Python, markdownlint, and cSpell extensions work together
- **Git integration**: Built-in source control panel for commits and pull requests

### Hot reload features

When running `mkdocs serve`, you get:

- **Auto-refresh**: Changes to any `.md` file in the `docs/` folder automatically reload the browser
- **Configuration updates**: Changes to `mkdocs.yml` also trigger rebuilds
- **Real-time preview**: See your formatting, links, and content changes instantly
- **Link validation**: MkDocs will warn you about broken internal links

### Useful MkDocs commands in VS Code

Run these commands in VS Code's integrated terminal:

```bash
# Start development server
mkdocs serve

# Build static site (for production)
mkdocs build

# Serve with strict mode (treats warnings as errors)
mkdocs serve --strict

# Show version
mkdocs --version
```

### Benefits of local preview

- **Immediate feedback**: See how your markdown renders with the Material theme
- **Link validation**: Catch broken links before they go live
- **Navigation testing**: Verify your content appears in the correct sections
- **Mobile preview**: Test how your content looks on different screen sizes
- **Performance check**: Ensure images and assets load properly

## Questions?

If you have questions about markdown formatting or contributing guidelines, please:

1. Review this contributing guide
1. Check existing issues for similar questions
1. Open a new issue

Happy contributing! 🚀
