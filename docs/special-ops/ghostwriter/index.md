---
tags:
  - skills
  - generative-ai
difficulty: 2
time: 45
description: >-
  Build a single marketing content agent powered by a series of focused Skills
  instead of one bloated instruction block — and watch the orchestrator load the
  right procedure on demand.
badge: ../assets/ghostwriter-badge.png
products:
  - copilot-studio
industries:
  - retail
created-date: 2026-07-23
last-edited-date: 2026-07-24
hide: true
---

# ✍️ Operation Ghostwriter: A Marketing Content Agent Built on Skills {#operation-ghostwriter}

<mission-meta />

<!-- markdownlint-disable-next-line MD033 -->
<p align="center"><img src="../assets/ghostwriter-badge.png" alt="Operation Ghostwriter Badge" width="220" /></p>

Welcome, agent. Your mission is **Operation Ghostwriter**: build a marketing content agent **without** drowning it in a wall of instructions. You will teach it four separate tradecraft procedures using **Skills** and let the orchestrator reach for the right one on demand. One agent. A series of Skills. Zero bloat. ✍️🎯

> [!NOTE]
> This mission uses the **new Copilot Studio experience** and its **Skills** capability. Turn on **New experience** with the toggle in the upper-left of the home page before you start, and confirm your environment has Skills enabled (see Prerequisites).

## 🔧 What You'll Build {#what-youll-build}

- A single **Marketing Content Agent** with lean, always-on Instructions
- Four focused **Skills** — `draft-blog-post`, `seo-audit`, `repurpose-to-social`, and `brand-voice-check` — each authored as a `SKILL.md`
- A working demonstration of the orchestrator selecting and chaining Skills across one conversation

## ❓ What is a Skill? {#what-is-a-skill}

A **Skill** is a new capability offered in the modern Copilot Studio experience. It gives you a way to define a reusable procedure, written in plain Markdown as a `SKILL.md` file, that the orchestrator can pull in only when a task actually needs it. It has a **name** and a **description** that act as routing metadata (always visible to the orchestrator), plus the full instructions and any supporting examples or files that load only when the scenario matches.

Here is the mental model. Your agent's **Instructions** are like its employee handbook, showing its purpose, how it should behave, and what it should and shouldn't do. In every conversation, the agent references its employee handbook (its Instructions) before responding. Those Instructions should be short, useful, and true in *every* conversation to avoid bloat.

A **Skill**, on the other hand, is like a laminated procedure card pulled off the wall only when *that* situation walks in the door. You don't tape all forty procedure cards to every employee's forehead. You hang them on the wall, label them clearly, and trust people to grab the right one.

This matters because everything you put into Instructions loads on **every** turn. A 1,500-word prompt that covers blog writing *and* SEO *and* social repurposing *and* brand voice makes the model weigh all four sets of rules on every request. This can lead to slower, more expensive, and often less accurate responses because irrelevant guidance competes for attention. Skills flip that: the model sees a short menu of what each Skill is *for* and loads the full procedure only when it picks one.

> [!NOTE]
> A Skill guides behavior. It is a procedure, not a fact store. If the agent needs *facts* (your product catalog or pricing), those belong in **Knowledge**, not a Skill. If it needs to *do* something external (such as post to a CMS), that belongs in a **Tool**. A Skill is the "how we do this here" playbook.

### 🗝️ Key Terms {#key-terms}

| Term | Definition |
|------|------------|
| **Instructions** | Global behavior loaded on every turn. What is true in *every* conversation. |
| **Skill** | A reusable procedure loaded on demand. What is true only *sometimes*. |
| **Routing metadata** | The `name` + `description` of a Skill. This is how the orchestrator decides whether to reach for it. |
| **`SKILL.md`** | The markdown file that holds a Skill's metadata, instructions, and examples. |
| **On-demand loading** | The orchestrator loads a Skill's full body only when a task matches its description. |

### Instructions vs. a Series of Skills {#instructions-vs-skills}

Let's take a look at two options to build an agent. One with a long set of instructions and another utilizing skills.

#### Option A — one long instruction that does everything

Every procedure is written inline, and all of it loads on every turn:

```text

You are Fabrikam Fitness's marketing content assistant.

When the user asks for a blog post: write 600–900 words with a hook in the first
two sentences, three or four descriptive subheads, lead with the customer benefit
before the product detail, and close with one call to action. Return markdown with
a suggested title.

When the user asks for an SEO check: verify the title tag is under 60 characters
and leads with the primary keyword; propose a 140–160 character meta description if
missing; confirm there is one H1 with keywords in at least one H2; check the primary
keyword appears in the first 100 words without stuffing. Return a checklist with fixes.

When the user asks for social posts: produce a LinkedIn version (~1,300 characters,
story hook, three takeaways, CTA), an X version (≤280 characters, one hashtag), and
an Instagram caption (punchy first line, 3–5 hashtags). Rewrite for each channel,
never truncate.

When the user asks about voice: energetic, confident, never salesy; short sentences;
plain words; no jargon like "synergy" or "leverage"; second person, active voice.
Return a verdict plus the top three fixes.
```

This should technically work, but the model reads all four procedures on every single turn, even when the user only says "make this shorter." The SEO rules are competing for attention while someone is asking about social. And the day the LinkedIn character count changes, you edit this wall of text and re-test all four jobs to make sure you didn't break the others.

#### Option B — a narrow instruction that only routes, plus Skills that hold the detail

The agent's instruction shrinks to a switchboard:

``` text
You are Fabrikam Fitness's marketing content assistant. Be concise, energetic,
and never salesy. Route each request to the right skill:

- If the user wants a blog post or article, use the draft-blog-post skill.
- If the user wants an SEO check, use the seo-audit skill.
- If the user wants social posts, use the repurpose-to-social skill.
- If the user wants a voice or tone check, use the brand-voice-check skill.
```

Every "600–900 words," "under 60 characters," "≤280 characters" detail moves out of the instruction and into the four SKILL.md files you build in the next labs. Only the procedure the task needs gets loaded, the instruction stays readable at a glance, and changing the LinkedIn count means editing one Skill while the other three sit untouched.

> [!NOTE]
> The modern orchestrator can already match a request to a Skill from that Skill's own description, so the routing lines above are you making the intent explicit and airtight but they aren't a hard requirement. Either way, the rule holds: the detail lives in the Skill, the instruction stays lean.

## ⚙️ Prerequisites {#prerequisites}

- A **Microsoft Copilot Studio** environment with the **modern agent experience** enabled — [copilotstudio.microsoft.com](https://copilotstudio.microsoft.com). If you don't have an account, check out the [course setup](https://microsoft.github.io/agent-academy/recruit/00-course-setup/) instructions for a free trial.
- Permission to **create agents** and **add Skills** in your environment
- Basic comfort editing markdown (you will author four small `SKILL.md` files)

## 🏢 The Scenario {#the-scenario}

**Fabrikam Fitness** is a direct-to-consumer athletic apparel brand. Their two-person marketing team ships a product update almost every week and is buried in the busywork around each one: turning release notes into a blog post, sanity-checking it for SEO, cutting it down into social posts, and making sure everything sounds like Fabrikam. They want **one agent** that handles all four jobs, but the first draft of that agent was a single monster prompt that was slow, ignored half its own rules, and was impossible to maintain. You've been brought in to rebuild it the modern way: lean Instructions and a series of Skills.

## 🧬 Anatomy of a Skill {#anatomy-of-a-skill}

Before you build one, let's look at what a Skill actually *is*. Under the hood, a Skill is a single file called `SKILL.md` which is a plain markdown with a little block of YAML at the top. That's the whole format. It has two parts:

```markdown
---
name: seo-audit
description: Use when the user asks to check or improve the SEO of a draft — title
  tags, meta description, keywords, headings. Do NOT use to write new content.
---

# SEO audit for Fabrikam content

Given a piece of content, review and report on:

1. Title tag: under 60 characters and leads with the primary keyword?
2. Meta description: 140–160 characters?
3. ...the rest of the procedure...
```

**The front matter (between the `---` lines) is the routing metadata.** It's just `name` and `description`, and it's the *only* part the orchestrator sees by default. Think of it as the label on a filing cabinet drawer: the orchestrator reads every Skill's label to decide which drawer to open, without pulling out the contents. That's why the `description` is the single most important line in the whole file. You should write it as **"use when… / do NOT use for…"**, not as a vague "helps with content." The `name` should be short and verb-like (`draft-blog-post`, `seo-audit`), because it's a handle, not a sentence.

**Everything below the front matter is the body** which is the actual procedure, plus any examples. This is what loads **on demand**, only after the orchestrator has picked this Skill off the shelf. It can be as long and detailed as it needs to be, because it isn't costing you anything on the turns where it doesn't fire.

When you add a Skill in Copilot Studio, those two parts map cleanly onto the three fields in the dialog:

| In the `SKILL.md`           | In the Copilot Studio dialog | When it's seen            |
| --------------------------- | ---------------------------- | ------------------------- |
| YAML `name`                 | **Name** field               | Always (routing metadata) |
| YAML `description`          | **Description** field        | Always (routing metadata) |
| Body below the front matter | **Instructions** field       | Only when the Skill fires |

Keep this picture in your head of name, description, body, because every method below produces this exact same file. The only thing that changes is *who writes it*.

## 🏗️ Three Ways to Build a Skill {#build-a-skill}

The anatomy of a skill never changes, so the real question is where the words come from. You have three options, and they trade off effort for control.

### ✍️ 1. From scratch {#build-from-scratch}

Open a blank file and write every line yourself, the name, description, and the full procedure. This gives you total control and a deep understanding of the format. But it's the slowest path, and for most real work it's overkill: you're hand-writing a procedure that someone, somewhere, has probably already written a better version of. Great for learning and for genuinely novel procedures; not how you'll spend most of your time.

### 📋 2. From an example {#build-from-example}

A Skill is portable markdown, so you rarely have to start from a blank page. Community libraries like [skills.sh](https://www.skills.sh/) are full of battle-tested procedures like copywriting, SEO, cold email, content strategy, etc, that you can lift and reuse. Grab one, use it **as-is**, or **tweak it** to fit your brand (rename it, rewrite the `description` in your own "use when…" language, trim anything that doesn't apply), then save it as a `SKILL.md` and upload. You're standing on the shoulders of people who already solved the hard part.

> [!WARNING]
> Treat any Skill you didn't write as **untrusted code**. A Skill steers your agent's behavior, so read every line before you add it, the same way you'd review a pull request. Never paste one in blind.

### 🤖 3. With AI {#build-with-ai}

This is the one most people miss, and it's often the best of the three. Because a Skill is just structured markdown, modern AI assistants are excellent at writing them. You describe what you need in plain language and let the model produce a high-quality `SKILL.md`, front matter and all. A few ways to do it:

- **A general-purpose assistant** — Microsoft Copilot, ChatGPT, or Claude. Prompt it with something like *"Write a SKILL.md for a Copilot Studio agent that audits blog posts for SEO. Include YAML front matter with a `name` and a `description` written as 'use when… / do NOT use for…', then the procedure as markdown."*
- **An agent workspace like Copilot Cowork**, where you can iterate on the file across turns, have it critiqued, and export clean markdown ready to upload.
- **The Preview pane of the very agent you're building.** Your Copilot Studio agent is itself a capable model so you can ask it *in Preview* to draft a skill, then copy the output into a new Skill. The engine that runs your Skills can also help write them.

Then save the AI's draft as a `.md` file and upload it. The same trick supercharges option 2: find a Skill on skills.sh (or any other skills sharing site), paste it into any of these tools, and say *"adapt this for a direct-to-consumer athletic apparel brand and tighten the description."* You get a tailored Skill in seconds.

> [!WARNING]
> AI-authored Skills get the same rule as borrowed ones: **read every line before you trust it.** The model gives you a fast first draft, not a finished product you rubber-stamp. You are the reviewer.

## 🚪 Two Ways to Get a Skill Into Copilot Studio {#add-a-skill}

However you authored the content, it enters your agent through one of **two doors** in the **Add skill** dialog:

- **Create from blank** — type or paste the `name`, `description`, and instructions straight into the form. Best when you're writing from scratch or pasting a short Skill.
- **Upload a skill** — drag in a finished `SKILL.md` file and Copilot Studio fills the three fields for you. Best when you already *have* a file, from an example, from AI, or from a teammate.

## 🧪 Lab 1.1: Create the agent with lean instructions {#lab-11-create-the-agent}

You'll start by building the agent shell with *only* the instructions that are true in every conversation. Resist the urge to describe blog rules, SEO rules, or anything task-specific here.

1. Navigate to [Microsoft Copilot Studio](https://copilotstudio.microsoft.com) and sign in. Make sure the **New experience** toggle at the top of the home page is turned on.

1. On the home page, under **Or select what you'd like to build**, select **Agent**.

    ![Select Agent on the Copilot Studio home page](./assets/1.1_01_CreateAgent.png)

1. You'll land directly in the agent's **Build** editor. Select the **Name your agent** field and copy and paste the following as the **Name**:

    ```text
    Fabrikam Content Agent
    ```

1. Select the **Instructions** field and copy and paste only the global behavior:

    ```text
    You are Fabrikam Fitness's marketing content assistant.
    You help the marketing team turn product updates into on-brand content.
    Be concise, energetic, and never salesy. When a request matches one of your
    skills, use that skill. Ask a clarifying question only if the request is
    genuinely ambiguous.
    ```

    ![The Instructions field with the lean prompt](./assets/1.1_02_Instructions-annotated.png)

1. Select **Save** in the top command bar.

> [!WARNING]
> Notice what is **not** here: no word counts, no SEO checklist, no brand-voice rules. Those are procedures. They belong in Skills. If you feel the urge to paste a checklist into Instructions, that is your signal to make a Skill instead.

## 🧪 Lab 1.2: Build the `draft-blog-post` Skill from scratch {#lab-12-draft-blog-post}

We'll explore multiple ways to build and integrate skills in our Copilot Studio agents, starting with building one from scratch. For our marketing content agent, one of the many things we want it to do is to help us write drafts of blog posts for our website. To help with this, we'll draft a copywriting skill.

1. In the **Build** editor, find the **Skills** card in the configuration panel on the right and select **Add skill**.

    ![The Add skill card in the agent configuration panel](./assets/1.2_01_AddSkill-annotated.png)

1. The **Add skill** dialog offers two methods: **Upload a skill** (drag in a `SKILL.md` file) and **Create from blank** (fill in the fields directly). Select **Create from blank**.

    ![The Add skill dialog with Upload a skill and Create from blank tabs](./assets/1.2_03_CreateFromBlank.png)

1. Fill in the fields with the inputs below:

    Copy and paste the following as the **Name**:

    ```text
    draft-blog-post
    ```

    Copy and paste the following as the **Description**:

    ```text
    Use when the user wants to turn product notes, a changelog, or a raw idea into a full blog post or article. Do NOT use for social posts, SEO checks, or pure editing — those have their own skills.
    ```

    Copy and paste the following as the **Instructions**:

    ````markdown
    # Draft a Fabrikam blog post

    When drafting a blog post from the provided source material:

    1. Open with a hook in the first two sentences — a customer pain or a bold claim.
    2. Target 600–900 words with three or four descriptive subheads.
    3. Lead with the customer benefit before any product detail.
    4. Close with one clear call to action.
    5. Return the draft in markdown with a suggested title and the subheads as `##`.

    ## Example
    Input: "New Trailburst running shorts — 4-way stretch, hidden zip pocket, launches Friday."
    Output: a titled post opening on the frustration of pockets that bounce, three
    subheads (Move Freely, Carry What Matters, Get Yours Friday), and a CTA.
    ````

1. Select **Create** to add the Skill

    ![Create draft blog post skill](./assets/1.2_04_CreateBlogSKill.png)

> [!TIP]
> A general best practice when building agents is to test early and often as you add new features. The testing steps for this will be at the end but you could also test now before moving on.

## 🧪 Lab 1.3: Build the `seo-audit` Skill from an example {#lab-13-seo-audit}

Download the three prepared Skill files before continuing:

<download-files path="special-ops/ghostwriter/assets/skills" label="Download the prepared Skill files" />

1. Extract the downloaded ZIP file, then open and review [`seo-audit.md`](./assets/skills/seo-audit.md).

    > [!WARNING]
    > Before you upload *any* Skill, read it. Open `seo-audit.md` and skim every line. A Skill steers your agent's behavior, so you review it the way you'd review a pull request. (This one is safe; the habit is the point.)

1. Back on the **Build** tab, find the **Skills** card and select the **plus button**.

    ![Add skill](./assets/1.3_addskill.png)

1. This time we will choose the **Upload a skill** option.

    ![Upload skill](./assets/1.3_uploadskill.png)

1. Drag `seo-audit.md` into the upload area (or browse to it). Copilot Studio reads the file and fills in the **Name**, **Description**, and **Instructions** for you. The YAML `name` and `description` become the routing metadata, and everything below the front matter becomes the Instructions. Select the `seo-audit` pill under **Skills** to review the result.

## 🧪 Lab 1.4: Build the `repurpose-to-social` Skill {#lab-14-repurpose-to-social}

1. Open `repurpose-to-social.md` from the extracted Skill files and give it a quick read. You can also [preview the file](./assets/skills/repurpose-to-social.md) online.

1. Select **Add skill → Upload a skill**.
1. Drag `repurpose-to-social.md` into the upload area. Select it from the **Skills** section and confirm that all properties mapped correctly.

    ![Add skill](./assets/1.4_skillfilled.png)

## 🧪 Lab 1.5: Build the `brand-voice-check` Skill {#lab-15-brand-voice-check}

1. Open `brand-voice-check.md` from the extracted Skill files and read it. You can also [preview the file](./assets/skills/brand-voice-check.md) online.

1. Select **Add skill → Upload a skill**.
1. Drag `brand-voice-check.md` into the upload area. Select it from the **Skills** section and confirm that all properties mapped correctly.

    ![The Skills card showing all four Skills](./assets/1.5_skillfilled.png)

## 🧪 Lab 1.6: Test Skills Orchestration {#lab-16-prove-it}

This is the payoff. Now we'll test to make sure that each request activates only the Skill it needs, and that the agent can flow across our skills naturally.

1. Select the **Preview** tab at the top of your agent.

    ![Preview](./assets/1.5_previewtab.png)

1. We'll start by testing to make sure our draft-blog-post skill is called. Type the following prompts and press **Enter**:

    ```text
    Draft a blog post from these notes: Trailburst shorts, 4-way stretch, hidden zip pocket, launches Friday.
    ```

1. Review the agent response. Confirm that it calls the `draft-blog-post` Skill and follows the Skill instructions to create a blog draft.

    ![View Blog Response](./assets/1.5_blogresponse.png)

1. Next, test the `seo-audit` Skill. Type the following prompt and press **Enter**:

    ```text
    Now run an SEO audit on it.
    ```

1. Review the agent response. Confirm that it calls the `seo-audit` Skill and returns an SEO checklist with recommended fixes.

    ![Review the SEO audit response](./assets/1.5_seoskillresponse.png)

1. Next, test the `repurpose-to-social` Skill. Type the following prompt and press **Enter** in the preview pane:

    ```text
    Make me LinkedIn and X posts so I can repurpose this blog.
    ```

1. Review the agent response. Confirm that it calls the `repurpose-to-social` Skill and returns platform-specific posts.

    ![Review the repurposed social posts](./assets/1.5_repurposeresponse.png)

1. Finally, test the `brand-voice-check` Skill. Type the following prompt and press **Enter** in the preview pane:

    ```text
    Does the LinkedIn one sound like us?
    ```

1. Review the agent response. Confirm that it calls the `brand-voice-check` Skill and evaluates the content against the Fabrikam voice.

    ![Review the brand voice evaluation](./assets/1.5_voicecheckreponse.png)

1. Notice how each turn triggered a **different** Skill. First `draft-blog-post`, then `seo-audit`, then `repurpose-to-social`, then `brand-voice-check`, and at no point did the agent's core Instructions carry any of that procedural detail.

Imagine maintaining this as one 1,500-word prompt. Changing the LinkedIn character count would mean editing a wall of unrelated text and re-testing everything. With Skills, you open `repurpose-to-social`, change one line, and the other three procedures are untouched. That is the maintainability win.

> [!TIP]
> If a Skill fires when it shouldn't (or fails to fire), the fix is almost always the **description**, not the instructions inside it. Tighten the "use when… / do NOT use for…" language and test again. Routing is a description problem.

## 🧪 Lab 1.7 (Stretch): Build a Skill with AI {#lab-17-stretch}

You've authored Skills from scratch and from examples. The third (and often best) way to author skills is to let AI draft them for you. A Skill is just portable markdown, so a model is perfectly capable of writing them for you. With this approach your job shifts from *author* to *editor*.

One of the things that our marketing content agent is missing is the ability to help write on-brand video scripts for our promotional content. Let's see how we can create a custom skill for that directly inside our Copilot Studio agent.

1. Navigate to the **Preview** tab of your agent. If you have an existing conversation, select **New chat** to start a fresh chat.

1. Type in the following inside the chat and press **Enter**

    ````text
    Write a Skill file (a SKILL.md) for a Microsoft Copilot Studio agent.

    About the agent:
    The agent is the Fabrikam Content Agent for Fabrikam Fitness, an athletic
    apparel brand that sells directly to consumers. Its voice is energetic and
    confident, never salesy: short sentences, plain words, second person, and no
    corporate jargon.

    It already has these Skills, so the new one must not overlap with them:
    draft-blog-post, seo-audit, repurpose-to-social (writes social captions), and
    brand-voice-check.

    What to build:
    A Skill named video-script that turns product notes into a video script. It
    handles two formats and picks based on what the user asks for.

    1. Short-form (TikTok, Reels, or YouTube Shorts, about 15 to 55 seconds):
       a strong hook in the first 2 seconds, a shot-by-shot flow, on-screen text
       cues, a spoken line for each shot, and one call to action.
    2. Long-form (YouTube, about 4 to 8 minutes): a hook intro, 3 to 5 titled
       segments, B-roll and shot ideas for each segment, a spoken script or
       talking points, and a closing call to action to subscribe and shop.

    If the user does not say which format they want, ask once, then default to
    short-form.

    How to format the answer:
    Give one SKILL.md file inside a single markdown code block, with two parts.

    1. YAML front matter at the top with two fields:
       name: a short lowercase handle with dashes, for example video-script.
       description: one or two sentences that say when to use the Skill and when
       not to. Make it specific enough that the agent picks this Skill instead of
       repurpose-to-social, since that one writes captions, not scripts.
    2. A body below the front matter with a short title, a numbered set of steps
       that first decides short-form or long-form and then lists the rules for
       each, and an Example section showing one short-form script and one
       long-form script.

    Keep everything in the Fabrikam voice. Use real numbers and clear structure.
    Reply with only the SKILL.md code block and nothing else.
    ````

    ![Prompt](./assets/1.7_skillprompt.png)

1. **Review the provided Markdown.** Ensure that it's safe and accurate, then make any necessary changes. Select the **Copy** icon in the upper-right corner.

    ![Prompt](./assets/1.7_reviewcopy.png)

> [!NOTE]
> Your skill response will look different as this is AI generated and the output will vary each time.

1. Select the **Build** tab to go back to your agent configuration.

    ![Prompt](./assets/1.7-addskill.png)

1. Select the **plus button** next to **Skills**.

    ![Add Button](./assets/1.7_plusskill.png)

1. Select **Create from blank**. Fill in the **Name**, **Description**, and **Instructions** according to the Markdown file created in the previous step, then select **Create**.

    ![Create](./assets/1.7_createskill.png)

1. Go back to the **Preview** tab. Select **New Chat** to start a new test session. Type the following text and press **Enter**:

    ```text
    Help me write a script for a short-form video about the launch of our new Trailburst running shorts with 4-way stretch and a hidden zip pocket. They launch Friday.
    ```

    ![Test Prompt](./assets/1.7_testprompt.png)

1. Review the response, making sure it calls the video-script skill and produces a good script.

    ![Review](./assets/1.7-test.png)

## ✅ Mission Accomplished {#mission-accomplished}

Congrats, agent, **Operation Ghostwriter** is complete! You built a real marketing content agent the modern way — lean Instructions, a series of focused Skills, and an orchestrator that reaches for the right one on demand.

In this mission, you accomplished:

✅ **Instructions vs. Skills**: You know what belongs in always-on Instructions versus an on-demand Skill.  
✅ **Routing metadata**: You can write `name` + `description` that make a Skill fire exactly when it should.  
✅ **A series of Skills**: You built four focused Skills instead of one bloated prompt — and saw the orchestrator chain them across a conversation.  
✅ **Borrow and adapt**: You know how to lift a procedure from the community and harden it before trusting it.

## 🏅 Claim your completion badge {#claim-your-completion-badge}
<!-- markdownlint-disable-next-line MD033 -->
<p align="center"><img src="../assets/ghostwriter-badge.png" alt="Operation Ghostwriter Badge" width="200" /></p>

> [!NOTE]
> Badge requests for this mission are not open yet. The completion form will be added before the mission is published.

## 📚 Tactical Resources {#tactical-resources}

- 📖 [Microsoft Copilot Studio documentation](https://learn.microsoft.com/microsoft-copilot-studio/)
- 📖 [Write agent instructions](https://learn.microsoft.com/microsoft-copilot-studio/authoring-instructions)
- 🔗 [skills.sh — community agent skills](https://www.skills.sh/)

<analytics-tag section="special-ops" mission="skills-ghostwriter" />
