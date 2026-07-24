---
name: seo-audit
description: >-
  Use when the user asks to check, review, or improve the SEO of a draft or
  page — title tags, meta description, keywords, headings. Do NOT use to write
  new content from scratch.
---

# SEO audit for Fabrikam content

Given a piece of content, review and report on:

1. **Title tag:** is it under 60 characters and does it lead with the primary keyword?
1. **Meta description:** propose one at 140–160 characters if missing.
1. **Headings:** is there exactly one H1, with keywords in at least one H2?
1. **Primary keyword:** is it present in the first 100 words and used naturally (no stuffing)?
1. Return a short checklist with ✅ / ⚠️ per item and a concrete fix for each — not vague advice.

## Example

Input: a blog post titled "Our Newest Running Shorts Have Arrived and We Think You'll Love Them".

Output:

- ⚠️ Title tag is 71 characters and buries the keyword → fix to "Trailburst Running Shorts: 4-Way Stretch, Zip Pocket" (52 chars).
- ✅ Exactly one H1.
- ⚠️ Primary keyword "running shorts" missing from the first 100 words → add it to the opening line.
- ⚠️ No meta description → propose: "Trailburst running shorts move with you through every mile, with four-way stretch and a secure zip pocket for your essentials. Available this Friday." (149 chars).
