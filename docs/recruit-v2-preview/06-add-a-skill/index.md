---
hide: true
preview: true
prev:
  text: 'Build a Custom Agent'
  link: '/recruit-v2-preview/05-build-a-custom-agent'
next:
  text: 'Add Tools'
  link: '/recruit-v2-preview/07-add-tools'
short-description: Use a Skill to give your helpdesk agent a consistent troubleshooting playbook
difficulty: 1
codename: OPERATION SKILL BOOST
time: 30
tags:
  - skills
  - copilot-studio
products:
  - copilot-studio
  - power-platform
industries:
  - it
created-date: 2025-08-20
last-edited-date: 2026-06-28

---

# 🚨 Mission 06: Add a Skill {#mission-06-add-a-skill}

<mission-meta />

> [!NOTE]
> This lab has been updated for the new Copilot Studio experience (2026-06-28).
> It replaces the previous Adaptive Cards mission. See `evaluation.md` for details.

## 🎯 Mission Brief {#mission-brief}

Your IT Helpdesk Agent can answer questions - but a great helpdesk follows a *process*: ask the right question, try the safe fix first, escalate cleanly when stuck. In the old experience you’d hand-build that flow with Topics and nodes. The new Copilot Studio experience has no Topics. So you teach behavior a different way: with a **Skill**.

In this mission you’ll add a **troubleshooting protocol** skill so the agent diagnoses, fixes, and escalates every IT issue the same reliable way.

> [!IMPORTANT]
> Make sure the **New experience** toggle in the upper-right corner is turned **on**.

## 🔎 Objectives {#objectives}

1. Understand what **skills** are and why they’re new
1. See how skills replace work we used to do with **Topics** and **child agents**
1. Create a skill from blank: a reusable troubleshooting playbook
1. Attach the skill and test that the agent follows the protocol

## 🧠 What is a skill? {#what-is-a-skill}

A **skill** is a reusable block of Markdown instructions (a `SKILL.md` with a name + description) that teaches the agent how to behave for a specific job. The model reads the description, decides when it applies, and follows the steps - so you get consistent behavior without building flows.

Skills are **new** and take over jobs we used to solve other ways:

- **Instead of Topics** (trigger phrases + nodes), you describe the process once and the model orchestrates it.
- **Instead of child agents** for a narrow specialty, you package the behavior as a skill on the same agent.
- **Reusable & shareable** - export the `SKILL.md` and drop it into any agent.

A troubleshooting protocol is a perfect fit: it’s multi-step, judgment-driven, and should behave identically every time.

## 🧪 Lab 06 - Add a troubleshooting skill {#lab-06-add-a-skill}

### ✨ Use case {#use-case}

**As an** employee **I want** consistent, step-by-step IT help **so that** issues get fixed or escalated cleanly.

### Prerequisites

1. The **Contoso Helpdesk Agent** with its support knowledge sources.

### 6.1 Open Skills

1. Open the agent. In the right configuration panel, select **Skills → Add skill**.

   ![Add skill](assets/s06-01-annotated.png)

### 6.2 Choose a creation method

1. The **Add skill** dialog offers **Upload a skill** (a `.md`/`.zip` with YAML name + description) and **Create from blank**. Select **Create from blank**.

   ![Upload or create from blank](assets/s06-02.png)

### 6.3 Define the skill

1. Enter the **Name**, **Description**, and **Instructions**, then select **Create**.

   **Name:** `it-troubleshooting-protocol`

   **Description:** `Use for any IT problem the user reports - login, Wi-Fi, device, app errors, or "it's not working". Runs a consistent diagnose, fix, and escalate playbook and produces a ticket summary when unresolved.`

   **Instructions:**

   ```markdown
   When this skill is activated, the user has an IT problem. Run this protocol every time.
   
   1. Acknowledge in one sentence, then ask exactly ONE focused diagnostic question.
   2. Offer the most likely quick fix first (restart, reconnect, sign out/in). One at a time.
   3. If unresolved, give short numbered steps; cite official Microsoft Support links.
   4. After 2-3 attempts, escalate with a "Ticket summary": Symptom, Error, Device/App, Steps tried, Priority.
   5. Never ask for passwords or one-time codes. Refuse to bypass security.
   
   ## Guidelines
   - One question at a time. Start with the lowest-risk fix.
   ```

   ![Filled skill form](assets/s06-03-annotated.png)

   > [!TIP]
   > A ready-made `it-troubleshooting-protocol.SKILL.md` is in this lab’s assets - use **Upload a skill** to add it instantly.

### 6.4 Save the agent

1. The skill appears in the **Skills** panel. Select **Save**.

   ![Skill added](assets/s06-04-annotated.png)

### 6.5 Test

1. Select **Preview** and send `I can't connect to wifi`. The chat shows **Loaded Skill: it-troubleshooting-protocol**, and the agent asks **one focused diagnostic question** instead of dumping a wall of steps - exactly as the protocol dictates.

   ![Skill loaded in test](assets/s06-05-annotated.png)

## ✅ Mission Complete {#mission-complete}

You gave your agent a reusable **Skill** that enforces a consistent diagnose-fix-escalate playbook - taking on a job once handled by Topics and child agents. 🙌🏻

⏭️ [Move to **Add Tools**](../07-add-tools/index.md)

## 📚 Tactical Resources {#tactical-resources}

🔗 [Skills in Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/authoring-skills?WT.mc_id=power-172619-ebenitez)

🔗 [Write effective instructions](https://learn.microsoft.com/microsoft-copilot-studio/authoring-instructions?WT.mc_id=power-172619-ebenitez)

<analytics-tag section="recruit-v2-preview" mission="06-add-a-skill" />
