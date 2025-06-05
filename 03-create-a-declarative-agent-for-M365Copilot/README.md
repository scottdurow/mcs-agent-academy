# Creating a Declarative Agent with Agent Builder in Microsoft 365 Copilot

Microsoft 365 Copilot is an AI-powered assistant embedded across Office apps—Teams, Outlook, Word, Excel, and more. It uses large language models (LLMs) combined with your organization’s data (documents, emails, chats, SharePoint) to provide contextual, personalized assistance. Copilot can help draft emails, summarize documents, analyze data, and automate routine tasks right inside the tools you use every day.

However, out-of-the-box Copilot is designed for broad, general-purpose scenarios. Organizations often need more specialized assistants that:

- Understand proprietary processes and internal policies  
- Pull from custom data sources (e.g., internal wikis, proprietary databases)  
- Execute multi-step business workflows (e.g., expense approvals, IT ticket creation)  

To address those needs, Microsoft introduced **Agent Builder** in Microsoft 365 Copilot. Agent Builder is a low-code, declarative interface that lets you construct custom AI agents—sometimes called **“declarative agents”**—directly inside the Microsoft 365 Copilot environment. Instead of writing code, you configure four key components:

1. **Knowledge**: Connect to internal data sources (SharePoint, OneDrive, Azure Search) so the agent’s answers are grounded in your organization’s factual information.  
2. **Tools (Actions)**: Specify tasks the agent can perform—for example, sending Teams messages, creating calendar events, updating SharePoint lists, or calling Power Automate flows.  
3. **Topics**: Define conversational entry points (intent categories) and example triggers so the AI knows when to run each workflow.  
4. **Instructions**: Provide system messages that shape the agent’s persona, tone, and response guidelines.

Once you configure these pieces, the built-in AI orchestrator uses generative planning to:

- Match user input to the correct topic  
- Retrieve answers from your connected knowledge sources  
- Invoke actions to carry out multi-step workflows  

Because Agent Builder is entirely within Microsoft 365 Copilot, your custom agent is **only consumable inside Copilot** (for example, invoked by name or relevant phrase in Teams). This makes it easy for end users—no extra sign-ups, no separate chat interface. However, there are some trade-offs compared to building a fully custom agent in **Copilot Studio**:

- **Limited to Microsoft 365 Copilot**: Agents built in Agent Builder cannot be embedded outside the Copilot chat interface (e.g., you can’t deploy them as standalone chatbots on external websites).  
- **Simplified integration points**: While Copilot Studio supports a wide range of connectors (Power Platform, custom APIs, multi-modal inputs), Agent Builder focuses on the most common scenarios (SharePoint, OneDrive, Azure Cognitive Search, Teams messaging, Power Automate).  
- **Fewer customization options**: You configure via templates and prebuilt components, which makes setup faster but constrains how deeply you can customize the underlying prompt engineering or orchestration.  
- **No pro-code SDK**: If you need to write custom code (for example, a complex business logic plugin), you must use Copilot Studio or the Microsoft 365 Agents SDK instead of Agent Builder.

In short, **Agent Builder** is the easiest way to create a tailored AI assistant for your Microsoft 365 users—no coding required and a seamless experience inside Copilot. If you need deeper integration, advanced custom actions, or multi-modal interfaces, you can graduate to **Copilot Studio** later. For now, let’s walk through how to build a basic declarative agent using Agent Builder.

---

## Introduction

**This lesson will cover:**
- What Microsoft 365 Copilot is and why you’d build a custom agent  
- How Agent Builder makes it easy to create a declarative agent  
- Key limitations of Agent Builder compared to Copilot Studio  
- The four building blocks of a declarative agent:  
  - **Knowledge**  
  - **Tools (Actions)**  
  - **Topics**  
  - **Instructions**  
- Step-by-step lab to create, test, and publish your first agent  

By the end of this lesson, you’ll understand how Agent Builder works under the hood and have a functioning agent in Microsoft 365 Copilot.

---

## What Is Microsoft 365 Copilot & Agent Builder?

### Microsoft 365 Copilot Overview

- **Embedded AI**: Copilot lives inside Microsoft 365 apps—Teams, Outlook, Word, Excel, etc.  
- **LLM + Data**: It combines large language models with your organization’s data (documents, emails, chats, lists).  
- **Everyday Productivity**: Users can ask Copilot to draft content, summarize information, analyze tables, or automate tasks—all without leaving the app.

### Why Build a Custom Agent?

Out-of-the-box Copilot excels at general tasks (drafting, summarizing, brainstorming), but you may need an assistant that:

- **Knows internal processes** (e.g., your expense approval flow or HR policies)  
- **Retrieves data from proprietary sources** (e.g., a custom SQL database or intranet documents)  
- **Executes multi-step, domain-specific workflows** (e.g., “When a new vendor invoice arrives, route it for approval, update the ledger, and notify the finance manager.”)  

A custom agent lets you address these scenarios by:

- **Grounding answers** in your own knowledge base  
- **Automating specific tasks** with configurable actions  
- **Maintaining conversational context** so interactions flow naturally  

### Agent Builder: A Low-Code Declarative Tool

Agent Builder is Microsoft’s solution for quickly creating custom agents without writing code. It lives inside the Copilot interface and provides:

1. **Visual Canvas**: A guided, step-by-step interface to configure your agent.  
2. **Prebuilt Connectors**: Easily link SharePoint, OneDrive, or Azure Cognitive Search as knowledge sources.  
3. **Action Library**: Configure built-in tasks like sending Teams messages, creating calendar events, or invoking Power Automate flows.  
4. **Topic Designer**: Write short descriptions of what each conversational flow does, and let AI decide which flow to run based on user intent.  
5. **Instruction Editor**: Provide system prompts that shape tone, persona, and behavioral rules.

Because it’s part of Microsoft 365 Copilot, your agent can be invoked directly within Teams or Outlook by name or by asking a relevant question. No separate deployment or embedding is required.

#### Agent Builder vs. Copilot Studio

| Feature                   | Agent Builder (M365 Copilot)                          | Copilot Studio (Standalone)                                |
|---------------------------|-------------------------------------------------------|------------------------------------------------------------|
| **Environment**           | Inside Microsoft 365 Copilot (Teams, Outlook, etc.)   | Independent web portal (copilot.microsoft.com/studio)      |
| **Audience**              | Microsoft 365 users only                              | Any channel (Teams, web widgets, SharePoint, custom apps)  |
| **Data Connectors**       | SharePoint, OneDrive, Azure Search, Power Automate     | Same plus custom APIs, Dataverse, external REST endpoints  |
| **Customization**         | Low-code, prebuilt templates, limited prompt control    | Low-code + pro-code SDK, full prompt engineering control   |
| **Pro-Code SDK**          | ❌ Not available                                       | ✅ Microsoft 365 Agents SDK for Visual Studio Code, .NET    |
| **Deployment**            | Publish directly to M365 Copilot                        | Publish to Copilot Chat, embed as web widget, custom UI    |
| **Limitations**           | Cannot be embedded outside Copilot                      | More flexible, supports multi-modal inputs (images, files) |
| **Ideal For**             | Quick domain-specific agents inside Teams/Outlook       | Advanced agents requiring deeper integration or external channels |

---

## Prerequisites & Setup

Before starting the lab, ensure you have:

1. A **Microsoft 365 tenant** with Copilot Studio/Agent Builder enabled (trial or paid).  
2. A **Global Administrator** or **Copilot Studio Maker** role in that tenant.  
3. A **work or school account** that can sign into Microsoft 365.  
4. At least **one knowledge source** (e.g., a SharePoint site or document library) containing content your agent will use.  
5. Basic familiarity with the Copilot Studio interface (refer to the previous lessons).

> **Tip:** If you haven’t signed up for Copilot Studio yet, follow the “Course Setup” instructions to get a free trial or Copilot license. Then go to https://copilot.microsoft.com/studio and sign in. Once in Copilot Studio, navigate to **Agent Builder**.

---

## 1. Launching Agent Builder

1. In your browser, navigate to **Microsoft 365 Copilot Studio**:  
   `https://copilot.microsoft.com/studio`  
2. From the Copilot Studio home, click **Agent Builder** in the left-hand navigation.  
3. You’ll see any existing agents. Click **+ New agent** in the top-right to start a new one.

---

## 2. Creating Your First Agent

1. **Choose a Template or Start Blank**  
   - Select a prebuilt template (FAQ bot, HR assistant) or choose **Blank agent** to start from scratch.  
   - For this lab, pick **Blank agent** and click **Next**.

2. **Name & Description**  
   1. Enter an **Agent Name** (e.g., “Contoso FAQ Assistant”).  
   2. Write a short **Description** (e.g., “Answers common questions about Contoso’s policies”).  
   3. Click **Create**.

3. Once created, you’ll land on the **Agent Builder canvas**, with four configuration tabs on the left:  
   - **Instructions**  
   - **Knowledge**  
   - **Topics**  
   - **Actions**  

You’ll configure each in the following steps.

---

## 3. Defining Knowledge Sources

To ground your agent’s responses in factual data, connect a knowledge source—such as a SharePoint document library or Azure Cognitive Search index.

1. In the left rail, click **Knowledge**.  
2. Click **+ Add knowledge source**.  
3. Choose **SharePoint** (or your desired source).  
4. In the pane:  
   1. Select the **Site** (e.g., “Contoso HR”).  
   2. Select the **Library** (e.g., “Policies” or “FAQs”).  
   3. (Optional) Select a **Folder** to narrow the scope.  
   4. Click **Save**.

5. Wait a moment while Copilot ingests your documents (status will change to “Ready”).

> **Tip:** You can add multiple sources (e.g., OneDrive folders, Azure Search). If you only need static responses, you can skip this step and rely on canned answer templates.

---

## 4. Writing Instructions

Instructions guide the LLM’s persona, tone, and boundaries.

1. In the left rail, click **Instructions**.  
2. In the **System Message** box, enter a concise prompt such as:  
   > “You are a friendly Contoso HR assistant. Answer questions about company policies and direct employees to relevant resources.”  
3. Optionally adjust the **Temperature** (0.2–0.7) to control creativity vs. precision.  
4. Click **Save**.

> **Tip:** Keep instructions brief (1–3 sentences) so the agent remains focused on its assigned role.

---

## 5. Adding Topics & Responses

**Topics** define intent categories (conversational entry points) and link to example prompts and responses.

1. In the left rail, click **Topics**.  
2. Click **+ Add topic**.  
3. Fill out the topic form:  
   1. **Topic Name:** e.g., “Check PTO Balance”  
   2. **Description:** “Handles user questions about vacation and PTO balances.”  
   3. **Trigger Examples (Optional):** List example user phrases like:  
      - “How many vacation days do I have left?”  
      - “What’s my PTO balance?”  
   4. **Response Template (Optional):** A static or semi-dynamic answer, such as:  
      > “You have {{userPTO}} days of PTO remaining. For more details, visit the HR portal.”  
   5. Click **Save**.

4. Repeat for other topics your agent should handle:  
   - **“Submit IT Ticket”** – “Guides users through opening an IT support request.”  
   - **“Open Enrollment Dates”** – “Answers questions about benefits enrollment windows.”  

> **Note:** If you prefer dynamic generation, skip the static response. The agent will combine its instructions and knowledge sources to craft an answer.

---

## 6. Configuring Tools (Actions)

**Actions (Tools)** allow the agent to perform tasks programmatically, such as sending messages, creating events, or calling flows.

1. In the left rail, click **Actions**.  
2. Click **+ Add action**.  
3. Choose a prebuilt action, for example **Send Teams Message**.  
4. Configure the action’s inputs:  
   1. **Recipient:** `managerEmail` (map this to a variable collected from the user)  
   2. **Message:** “You have a new IT ticket from {{employeeName}} regarding {{issueDescription}}.”  
5. Under **When to run**, select **Topic: Submit IT Ticket** so this action fires when that topic completes.  
6. Click **Save**.

> **Tip:** For advanced scenarios, you can create a **Custom HTTP action** that calls your own API or triggers a Power Automate flow.

---

## 7. Testing Your Agent

After configuring Knowledge, Instructions, Topics, and Actions, test your agent in the built-in chat window.

1. In the top-right corner, click **Test**.  
2. Type a user phrase, such as:  
   > “How many vacation days do I have left?”  
3. The agent should:  
   1. Identify the **“Check PTO Balance”** topic.  
   2. Retrieve the correct value from SharePoint.  
   3. Return something like:  
      > “You have 8 days of PTO remaining.”  
4. Next, test a workflow-triggering topic:  
   > “I need to submit an IT ticket.”  
   - The agent asks follow-up questions (e.g., “What’s the issue?”).  
   - After providing details, verify that the **Send Teams Message** action runs and a message appears in the configured channel.

> **Tip:** If something goes awry, click **View Activity** in the test pane to see which steps ran—topic matching, knowledge retrieval, and action execution.

---

## 8. Publishing Your Agent

Once testing looks good, publish your agent so end users can invoke it from Microsoft 365 Copilot.

1. In Agent Builder’s top-right, click **Publish**.  
2. In the **Publish** dialog:  
   1. Confirm the **Agent Name** and environment.  
   2. Choose **Publishing Scope**:  
      - **Tenant-wide** (everyone in the organization can use the agent)  
      - **Specific Users/Groups** (restrict access to certain people)  
   3. Click **Publish**.

3. Wait a moment for deployment. The status will update to **Published** once complete.  
4. Users can now invoke your agent by opening **Microsoft 365 Copilot** (e.g., clicking the Copilot button in Teams) and typing the agent’s name or a related question.

> **Tip:** To embed your agent as a chat widget on a SharePoint page, go to the agent’s **Settings**, copy the embed code, and paste it into a web part on your page.

---

## Recap & Next Steps

You have now built and published a declarative agent using Agent Builder:

1. Defined **Knowledge Sources** by linking a SharePoint library.  
2. Wrote **Instructions** to guide the agent’s persona and tone.  
3. Created **Topics** to match user intents.  
4. Configured **Tools (Actions)** for real-world tasks.  
5. Tested the agent in the built-in chat window.  
6. Published the agent to Microsoft 365 Copilot.

### Limitations of Agent Builder

- **Only consumable within Microsoft 365 Copilot** (cannot be embedded externally).  
- **Simplified integration** (fewer connector options than Copilot Studio).  
- **Limited customization** (no pro-code SDK or advanced prompt engineering).  
- **Best for**: Quick domain-specific agents for Teams/Outlook with minimal setup.

### When to Move to Copilot Studio

If you need any of the following, consider switching to **Copilot Studio**:

- Embedding agents on external websites or mobile apps.  
- Building multi-modal agents that ingest images, files, or custom data streams.  
- Writing custom code (e.g., custom .NET plugins or complex REST integrations).  
- Full control over prompt engineering, token usage, and advanced LLM configurations.  

---

## Additional Resources

- **Microsoft Copilot Studio Documentation**  
  https://learn.microsoft.com/microsoft-copilot-studio/  

- **Agent Builder Overview & Tutorials**  
  https://microsoft.github.io/copilot-camp/pages/make/agent-builder/  
  https://microsoft.github.io/copilot-camp/pages/make/agent-builder/01-first-agent/  

- **Copilot Studio (Pro-Code)**  
  https://learn.microsoft.com/microsoft-365-copilot/extensibility/overview  

- **Power Automate Connector Documentation**  
  https://learn.microsoft.com/power-automate/overview  

- **Azure Cognitive Search Integration**  
  https://learn.microsoft.com/azure/search/search-what-is-azure-search  

Congratulations! You now have a solid understanding of Agent Builder, its capabilities, and its limitations. You also built a live agent in Microsoft 365 Copilot that answers questions and performs automated tasks using your organization’s data. Happy building!  
