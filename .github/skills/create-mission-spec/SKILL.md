---
name: create-mission-spec
description: >
  Turn a mission or lab idea into a fully researched GitHub issue spec on microsoft/agent-academy,
  then post it with the GitHub CLI. Use this skill whenever the user wants to propose new Agent
  Academy content before writing it — course missions (Recruit, Operative, Commander), standalone
  Special Ops, or Cowork Collective missions. Trigger whenever the user says "write a spec for a
  mission", "create an issue for a new lab", "I want to propose a Special Ops", "file a mission
  proposal", "spec out a lab", "open an issue for a new module", or hands over Microsoft Learn
  URLs and asks to turn them into an Agent Academy lab. This skill handles: mining source
  documentation, interviewing for scope, repo reconnaissance and duplicate detection across both
  docs and existing issues, frontmatter and tag validation, writing-style conformance, drafting
  the issue body, title conventions, milestone and assignee metadata, and posting plus verifying
  the issue via `gh`.
argument-hint: Optionally provide the topic and any source documentation URLs for the mission.
---

# Create Mission Spec

This skill produces a **specification issue** — not mission content. The output is a GitHub issue
on `microsoft/agent-academy` that another contributor (or a later run of
`agent-academy-mission-builder`) can implement from without further research.

The difference matters. A spec issue answers _what should be built and why_. The mission builder
answers _how it reads_. Never write the mission markdown in this skill.

## 🏁 Prerequisites

1. Run `gh --version` to confirm the GitHub CLI is installed. If missing, install it
   (`brew install gh` on macOS).
1. Run `gh auth status` to confirm authentication. If not authenticated, run `gh auth login` and
   guide the user through the flow.

Do not proceed until both checks pass.

## Mission types

Four tracks exist, and each has its own folder, contributing guide, and style section. Identify
the track before anything else, because it determines the frontmatter contract.

| Track             | Folder                         | Contributing guide                  |
| ----------------- | ------------------------------ | ----------------------------------- |
| Recruit           | `docs/recruit/NN-slug/`        | `CONTRIBUTING-COURSES.md`           |
| Operative         | `docs/operative/NN-slug/`      | `CONTRIBUTING-COURSES.md`           |
| Commander         | `docs/commander/NN-slug/`      | `CONTRIBUTING-COURSES.md`           |
| Special Ops       | `docs/special-ops/slug/`       | `CONTRIBUTING-SPECIAL-OPS.md`       |
| Cowork Collective | `docs/cowork-collective/slug/` | `CONTRIBUTING-COWORK-COLLECTIVE.md` |

`CONTRIBUTING-GENERAL.md` covers markdown linting and spell checking for every track.

## Phase 1: Mine the source documentation

Do this **first**, before the interview. You cannot offer the user good scoped options until you
know what the product actually does, and an interview built on guesses wastes a round trip.

If the user supplied URLs, fetch **all of them in parallel**. Extract and keep:

- Exact tool, API, or feature names and their required vs. optional parameters
- Endpoint URLs and placeholder segments (e.g. `{environmentId}`)
- Licensing, role, and version prerequisites
- Governance, admin, and observability surfaces
- Anything gated behind admin rights, preview, or regional availability

These become the spec's **Prerequisites**, **Lab outline**, and **Risks** sections. A spec that
paraphrases the docs is useless; a spec that names the exact tools and endpoints saves the
implementer an hour.

If the user supplied no URLs, ask for them before going further. Never write a spec from memory
about a product surface that changes as fast as these do.

## Phase 2: Gather intel

First, list the available milestones so you can offer real options rather than asking a second
time later:

```bash
GH_PAGER=cat gh api repos/microsoft/agent-academy/milestones \
  --jq '.[] | "\(.title)  due=\(.due_on)"'
```

Then ask everything in **one batch** using the ask-questions tool. Never interrogate one question
at a time. Offer concrete options with a recommended default so the user can answer by picking,
and derive those options from what you found in Phase 1.

Always ask:

1. **Mission status** — is this a new mission or an update to an existing mission? For an update,
   ask which mission is changing and treat its current content as the implementation baseline.
1. **Mission type** — Special Ops, Cowork Collective, or a course mission (Recruit / Operative /
   Commander)?
1. **Scenario** — what will the learner actually build? Offer 3-4 scoped options drawn from the
   documentation rather than asking an open question.
1. **Surface** — which product or client does the mission drive? (Copilot Studio, VS Code, both.)
1. **Difficulty and time** — offer 2-3 sensible pairings, e.g. "Difficulty 3, ~45 min".
1. **Badge codename** (Special Ops only) — offer 3-4 punchy options.
1. **Milestone** — which fiscal quarter does this target? Offer the open milestones you just
   listed, with the nearest one recommended. This is the due date.
1. **Deliverable** — draft the body in chat, post the issue directly, or save to a file?

If the user already stated something in their prompt (for example "avoid the connectors one, start
with Graph APIs"), do not ask about it again. Treat it as a hard scope boundary and reflect it in
the **Out of scope** section.

## Phase 3: Repo reconnaissance

Run these in parallel:

1. **Duplicate check in the docs** — `grep_search` the repo for the feature name. Distinguish a
   real duplicate (an existing mission on the topic) from a passing mention in another mission.
   Report either way in the issue, and link passing mentions as cross-link targets.
1. **Duplicate check in the issues** — someone may have already filed this spec. Run
   `GH_PAGER=cat gh issue list --repo microsoft/agent-academy --state all --search "<keyword>"`.
   Grepping the docs alone misses proposals that have not been implemented yet.
1. **Read the contributing guide for the track** — see the Mission types table above. Each guide
   defines a different frontmatter contract; Special Ops omits `prev`, `next`, and `codename`,
   which course missions require.
1. **Validate slugs** — read `docs/.vitepress/data/tags.json`, `products.json`, and
   `industries.json`. Every `tags`, `products`, and `industries` value in the proposed frontmatter
   must already exist in those files. If one does not, either pick an existing slug or add an
   explicit acceptance-criteria item to create it.
1. **Find the closest existing mission** — use it as the structural reference and name it in the
   issue so the implementer has a template to copy.
1. **Read `WRITING_STYLE.md`** — specifically the section matching the mission type. Course
   missions, Special Ops, and Cowork Collective have different required sections and intros. The
   spec must reflect the right one; proposing a `codename` for a Special Ops mission or omitting
   the `⚙️ Prerequisites` section is a spec bug, not an authoring bug.

For a new mission, if either duplicate check finds a genuine match, **stop and tell the user**
before drafting. Offer to pivot the angle, extend the existing mission, or proceed anyway. Do not
silently file a second spec for work that already exists. For an updated mission, confirm that the
named mission exists, inspect its current content, and use related open issues to identify overlap
rather than treating the mission itself as a duplicate.

## Phase 4: Title convention

Formats:

- New mission: `[New Mission] <Section>: <Action verb> <what they build>`
- Updated mission: `[Updated Mission] <Section>: <Action verb> <what changes>`

Examples:

- `[New Mission] Special Ops: Build your own MCP server with the MCP Management Server`
- `[New Mission] Operative Mission 12: Ground an agent in SharePoint knowledge`
- `[New Mission] Cowork Collective: Turn a badge-scan export into an emailed report`
- `[Updated Mission] Special Ops: Refresh the Copilot Studio MCP lab`

Rules:

- Use `[New Mission]` or `[Updated Mission]` according to the mission status selected in Phase 2.
  Never use `[New Lab]`; missions are the unit of content in this repo across every track.
- Keep the whole title **under 80 characters**. GitHub truncates issue titles around 70 in list
  views.
- One bracketed prefix only. Do not nest a pipe inside the brackets — `[New Mission | Special Ops]`
  reads like a UI breadcrumb and costs characters without adding information.
- New course missions are sequential, so include the proposed number (`Operative Mission 12`).
  Confirm the next free number from the track's `index.md` before claiming it. Updated course
  missions retain their existing number. Special Ops and Cowork Collective are standalone and
  take no number.
- Avoid repeating a product acronym. "Microsoft MCP Management Server" says MCP twice; "MCP
  Management Server" is enough because the body spells it out.
- Prefer "Build your own" over "Build a custom" — shorter and states the value.
- Mirror the final title as the body's H1 so the issue reads consistently.

## Phase 5: Draft the issue body

Write the body to a temp file **outside the workspace** (`/tmp/`), never into the repo. Use this
structure:

```markdown
# <title>

## Summary

What the mission teaches, and the specific curriculum gap it closes. Name the existing missions
that cover adjacent ground so the gap is provable, not asserted. State the scope boundary here.

## Proposed mission

A table: Section, Folder, Title, Operation codename, Badge, Difficulty, Time.

### Proposed frontmatter

A fenced yaml block matching the contributing guide exactly for that mission type.
Follow it with a line confirming whether the tag/product/industry slugs already exist.

## Scenario

A fictional company, an industry, and a concrete problem. Include the analogy the mission
should use in its concept brief.

## Mission objectives

Bulleted, one concrete capability each, phrased as what the learner will do.

## Prerequisites (to state in the mission)

Licenses, roles, tool versions, tenant availability, and links. Bold any hard blocker.

## Proposed lab outline

A Recon section explaining the concept, then numbered labs. For each lab, one bold heading and
two or three sentences naming the exact tools, parameters, and UI paths involved. End with a
cleanup lab where the mission creates real resources.

## Acceptance criteria

A checkbox list covering: files created, assets and screenshots, required components
(`<mission-meta />`, `<analytics-tag />`), badge claim section, cross-links, conformance to
`WRITING_STYLE.md`, and every validation command from the contributing guide.

## Out of scope

Everything deliberately deferred, each on its own line. Name the follow-up mission where one
is implied.

## Risks

Access barriers, admin gates, and availability gaps that could block learners mid-lab.

## References

Every source URL used, with descriptive link text.
```

Only include a `preview` field or preview framing if the user confirms the mission should be
flagged as preview. Do not add it on the assumption that a preview product implies a preview
mission — those are separate decisions.

## Phase 6: Writing-style check

Before posting, read `WRITING_STYLE.md` and run the draft against it. Two things get checked.

### The spec's own prose

The issue is repo content and should read like it. Verify:

- Active voice, present tense, learner addressed as "you" in any objective or prerequisite text
- Sentences of 15-25 words; long paragraphs broken up
- **Select**, never "click". **Field**, never "textbox". This is an accessibility requirement,
  not a preference — learners may use keyboard, touch, or a screen reader
- Action verbs opening every step-like line: Select, Enter, Navigate, Configure, Choose, Upload
- Exact UI text in bold; values to type in code format
- Objectives phrased as skills gained, not tasks performed, with parallel structure
- Mission-themed but professional tone; no marketing adjectives

### The style constraints the spec must pass on

The implementer should not have to rediscover these. State the ones that apply in the lab outline
or acceptance criteria:

| Mission type      | Style requirements the spec must name                                                                                                                                    |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Course            | Codename as `OPERATION NAME`, time-estimate blockquote, Mission Brief of 150-250 words, 3-5 objectives, theory before every lab, Mission Complete with next-mission link |
| Special Ops       | No codename, agent-themed hook, dedicated `⚙️ Prerequisites` section, all concepts explained in-mission, badge claim section at `width="200"`                            |
| Cowork Collective | `🔍 The Problem` then `🎯 The Scenario`, `📋 What You'll Produce` checklist, full copy-pasteable prompts in fenced blocks, approval-flow steps documented                |

Also carry forward the screenshot rules when the mission needs images: light theme, no browser
frame, no cursor, Microsoft red `#e91c1c` highlight boxes at 4px, cropped to the relevant region.

Fix anything the check surfaces before posting. Do not post and then clean up.

## Phase 7: Post the issue

Unless the user has already asked you to post, show the draft and get confirmation first. Filing
an issue on a public Microsoft repo notifies watchers and cannot be undone quietly.

### Gather the metadata

A spec issue needs four things set: title, label, **milestone**, and **assignee**. The milestone
carries the due date — GitHub issues have no native due-date field, so the repo tracks delivery
through fiscal-quarter milestones.

- **Label** — `feature-request` is the correct label for new content proposals. There is no
  `special-ops` or `new-mission` label. Confirm with
  `GH_PAGER=cat gh label list --repo microsoft/agent-academy --limit 50`.
- **Milestone** — use the quarter the user picked in Phase 2. Milestones are named by fiscal
  quarter, for example `FY27Q1` and `FY27Q2`. Do not ask again here.
- **Assignee** — default to the requesting user. Confirm the GitHub login with
  `GH_PAGER=cat gh api user --jq .login`.

### Create it

```bash
gh issue create --repo microsoft/agent-academy \
  --title "<title>" \
  --label feature-request \
  --milestone "FY27Q1" \
  --assignee "<login>" \
  --body-file /tmp/<name>.md
```

To set a milestone or assignee on an issue that already exists, use `gh issue edit <n> --milestone`
and `gh issue edit <n> --add-assignee`.

## Phase 8: Verify and clean up

1. Read the issue back:

   ```bash
   GH_PAGER=cat gh issue view <number> --repo microsoft/agent-academy \
     --json title,labels,milestone,assignees,url
   ```

   Do not request `projectCards` — Projects (classic) is deprecated and the field errors the whole
   query out.

1. Confirm all four are set: title, label, milestone, assignee. A spec with no milestone has no due
   date and drops off the plan.
1. Confirm the body's H1 matches the title exactly. These drift easily and nothing else catches it.
1. Delete the temp file.
1. Report the issue URL to the user.

## 📜 Rules

- Always prefix `gh` commands with `GH_PAGER=cat`. Without it, `gh` opens an alternate screen
  buffer and the tool returns no output.
- Always pass the body via `--body-file`. Inline `--body` mangles long markdown and breaks on
  backticks and newlines.
- Always write temp files to `/tmp/`, never into the repo, and always delete them afterward.
- Never create mission markdown files in `docs/` from this skill. The output is an issue only.
- Never invent tag, product, or industry slugs. Read the JSON data files and use what exists.
- Never state a duplicate check result you did not actually run, and always check both the docs and
  the existing issues.
- Always confirm with the user before posting, unless they already asked you to post.
- Never post a spec issue without a milestone. The milestone is the due date, and an unmilestoned
  spec is invisible to planning.
- Never request `projectCards` in a `gh issue view --json` query. Projects (classic) is deprecated
  and the field fails the entire request.
- Always run the Phase 6 writing-style check before posting. `WRITING_STYLE.md` is the source of
  truth, and its per-mission-type sections differ — read the one that applies.
- Never write "click" or "textbox" anywhere in the spec. Use "select" and "field".
- When editing an existing spec issue's title, update the body's H1 in the same pass so the two
  never drift.
- To edit a posted body: fetch it with `gh issue view <n> --json body -q .body > /tmp/b.md`, edit
  the file, then `gh issue edit <n> --body-file /tmp/b.md`.
