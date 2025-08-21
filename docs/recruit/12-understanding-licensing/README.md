# 🚨 Mission 12: Understanding Licensing

## 🕵️‍♂️ CODENAME: `OPERATION KNOW WHAT YOU OWE`

> **⏱️ Operation Time Window:** `~15 minutes`

## 🎯 Mission Brief

Welcome, Recruit. Before you deploy your agents into the field, you need to know **how usage is measured, licensed, and billed**. This mission breaks down the message-based billing model, explains what Microsoft 365 Copilot licenses include, and shows you how to plan with your estimator.

---

## 🎯 Objective: Grasp the Message-Based Model

Copilot Studio doesn’t charge per user or per feature—it bills you based on **how many messages your agents consume**. A “message” is an interaction between your agent and the user (or a system).

- 💬 Every user interaction with your agent counts as at least **1 message**
- 🔄 Complex interactions (like grounding, generative AI, or flows) consume **multiple messages**
- 💼 You pay for messages either via **prepaid packs** or **pay-as-you-go (PAYGO)**

---

## Licensing Options

### 1. **Copilot Studio Message Packs**

- Prepaid tick-box: **25,000 messages/month for $200**
- Best for predictable usage — capacity is pooled across the tenant

### 2. **Pay-As-You-Go (PAYGO)**

- Post-paid:  **$0.01 per message**
- No upfront commitment; usage is billed at month-end via Azure

---

## What if you have M365 Copilot Licenses?

If your team has **Microsoft 365 Copilot licenses**, your agents **can run without additional billing for key scenarios**:

- Classic answers, generative responses, graph-grounded messages, and basic agent actions are **zero-rated** for authenticated M365 Copilot users in apps like Teams and Outlook  
- However: if you enable advanced features like autonomous triggers, agent flows beyond basic actions, or use external channels/APIs, those **consume billable messages**

| Scenario                                     | Additional Messages Billed?                  |
|---------------------------------------------|----------------------------------------------|
| M365 Copilot user asking agent in Teams     | ❌ Not billed                                  |
| Agent calling external API or flow         | ✅ Billed (5 + messages)                      |
| Agent using autonomous trigger or grounding | ✅ Billed                                     |

---

## 🧮 Plan with Precision: Use the Estimator

Before launching your agent, use our **Copilot Studio Usage Estimator** to forecast message consumption under realistic scenarios:

[👉 Use the Copilot Studio Usage Estimator](https://aka.ms/mcs-estimator){ .md-button .md-button--primary }

It lets you:

- 🔢 Specify your **user count**
- ⚙️ Select **agent features** (grounding, actions, flows, memory)
- 📈 Estimate **total messages per agent per month**
- 🧠 Optimize design and avoid billing surprises

!!! tip
    ✅ Run it early — and again after building — to compare expected vs. actual usage.

---

## 💼 Sample Scenario

**Environment**: IT Help Desk agent with grounding + one Power Automate flow  
**Sessions**: 5 user turns per session  
**Assumptions**: grounding (10 msgs) + action (5 msgs) + 5 generative responses (10 msgs)  
**Total**: ~25 messages per session  
**Scale**: 500 sessions/month = ~12,500 messages (½ message pack)

---

## 🧠 Pro Tips for Cost Control

- Monitor usage via Power Platform Admin Center
- Start in dev/test before going live
- Disable unused actions and connectors
- Use **Microsoft 365 Copilot licenses** when possible for internal use
- Use message packs when scale becomes predictable
- Use the **Copilot Studio Usage Estimator** to forecast usage

---

## 🏁 Mission Complete

You now understand:

- How usage is calculated and billed
- When M365 Copilot covers usage — and when it doesn’t
- How to forecast and manage your message consumption

🎓 With this knowledge, you're cleared to advance and deploy your agents **efficiently and smartly**

---

## 📚 Tactical Resources

Learn more about licensing and billing in Copilot Studio

- 📄 [Copilot Studio Licensing & Message Rates](https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing?WT.mc_id=power-170631-apdunnam)
- 📘 [Power Platform Licensing Guide (July 2025)](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp//microsoft/bade/documents/products-and-services/en-us/bizapps/Power-Platform-Licensing-Guide-July-2025.pdf?WT.mc_id=power-170631-apdunnam)
- 📊 [Message Management & Capacity Monitoring](https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-messages-capacity?WT.mc_id=power-170631-apdunnam)

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/12-understanding-licensing" alt="Analytics" />
