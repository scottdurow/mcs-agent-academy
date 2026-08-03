---
hide: true
preview: true
prev:
  text: Publish your agent
  link: /recruit-nextgen/08-publish-your-agent
next:
  text: Securing Your Recruit Badge
  link: /recruit-nextgen/course-completion-badges-recruit
short-description: Learn how licensing and usage-based billing work for the GitHub Copilot harness
difficulty: 1
codename: OPERATION KNOW WHAT YOU OWE
time: 20
tags:
  - licensing
products:
  - copilot-studio
  - microsoft-365
industries:
  - it
created-date: 2025-08-20
last-edited-date: 2026-08-03
---
# 🚨 Mission 09: Understanding Licensing {#mission-09-understanding-licensing}

<mission-meta />

## 🎯 Mission Brief {#mission-brief}

Welcome, Recruit. Before you deploy an agent, you need to know which **harness** powers it. The harness affects capabilities, architecture, and billing.

The agent and workflows in this course run on the **GitHub Copilot harness**. They use **Copilot Credits for usage-based billing**, including during parts of the authoring lifecycle. This differs from agents powered by the standard or Copilot chat harness.

## 🔎 Objectives {#objectives}

In this lesson, you'll learn:

1. Why harness choice changes the Copilot Studio billing model
1. What usage can consume Copilot Credits on the GitHub Copilot harness
1. How Copilot Credits cover models, tools, knowledge, MCP, and harness runtime
1. How administrators purchase, allocate, and monitor credits
1. How GitHub Copilot harness billing differs from standard and Copilot chat harness billing

## 🧠 Harness Choice Determines Billing {#harness-choice-determines-billing}

Every agent or workflow in Copilot Studio runs on a harness:

| Harness | Best for | Billing model |
| --- | --- | --- |
| **GitHub Copilot harness** | Reasoning-heavy, multi-step agents and workflows | Usage-based billing with **Copilot Credits** |
| **Standard harness** | Rule-based agents and agent flows | Standard Copilot Studio licensing and billing |
| **Copilot chat harness** | Extending Microsoft 365 Copilot Chat with enterprise knowledge | Consumption-based or included in eligible Microsoft 365 Copilot user licenses |

> [!IMPORTANT]
> Microsoft 365 Copilot license exemptions that can apply to the standard or Copilot chat harness do **not** make GitHub Copilot harness usage free. The GitHub Copilot harness uses usage-based billing for its work.

## 💳 What Copilot Credits Cover {#what-copilot-credits-cover}

For the GitHub Copilot harness, Copilot Credits cover the full runtime experience:

- Large language model token usage
- The GitHub Copilot harness runtime
- Knowledge retrieval
- Connector and MCP tool calls
- Skills and other agent capabilities
- Workflow execution

The number of credits consumed varies by the models, organizational context, tools, runtime, and complexity of the task.

## 🛠️ Billing Starts While You Build {#billing-starts-while-you-build}

Unlike the standard harness, which generally begins metering after publication, the GitHub Copilot harness can consume credits during authoring. Billable activity can include:

- Creating an agent or automated solution with natural language
- Previewing and testing an agent
- Generating, creating, and running evaluations
- Running published agents and workflows

This means cost planning starts during development, not only when the agent reaches production.

> [!TIP]
> Use focused prompts, enable only the capabilities needed for the scenario, and monitor consumption throughout development. Iterative authoring and evaluation are valuable, but they are still usage.

## 🧾 Purchasing and Managing Copilot Credits {#purchasing-and-managing-copilot-credits}

Copilot Credits can be purchased and managed through the options supported for your organization, including prepaid capacity and pay-as-you-go billing. Administrators allocate capacity to environments and monitor usage in the **Power Platform admin center**.

Because pricing and purchase options can change, use the current Microsoft licensing documentation rather than hard-coding a rate into an architecture decision.

## 📊 Monitoring Usage {#monitoring-usage}

Monitor consumption at both the agent and environment level:

- **Agent level:** Open the agent's **Monitor** page in Copilot Studio to review its Copilot Credit consumption.
- **Environment or tenant level:** In the Power Platform admin center, go to **Licensing** > **Copilot Studio**.

Review usage during building, testing, and evaluation so production estimates reflect the agent's actual model and tool behavior.

## 🧭 Applying This to the Recruit Course {#applying-this-to-the-recruit-course}

The `Contoso IT Concierge` uses the GitHub Copilot harness because it combines goal-driven orchestration with knowledge, a skill, connector tools, and a workflow.

For this course:

- AI-based authoring can consume Copilot Credits.
- Preview and evaluation can consume Copilot Credits.
- Knowledge, tools, and workflow execution contribute to consumption.
- Published usage is billed through the GitHub Copilot harness model.
- An existing Microsoft 365 Copilot user license doesn't replace this usage-based billing.

## 🏁 Mission Complete {#mission-complete}

You now understand that Copilot Studio doesn't have one universal licensing model. The harness determines how usage is billed, and this course's GitHub Copilot harness uses Copilot Credits from development through production.

## 📚 Tactical Resources {#tactical-resources}

- 📘 [Choose a harness in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/harnesses-overview)
- 💳 [Usage-based billing for the GitHub Copilot harness](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/billing-credit-overview)
- 🧾 [Purchase and manage Copilot Credits](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/billing-manage-buy-credits)
- 📊 [Manage Copilot Studio capacity](https://learn.microsoft.com/en-us/power-platform/admin/manage-copilot-studio-messages-capacity)
- 📄 [Standard harness licensing and billing](https://learn.microsoft.com/en-us/microsoft-copilot-studio/billing-licensing)

<analytics-tag section="recruit" mission="09-understanding-licensing" />
