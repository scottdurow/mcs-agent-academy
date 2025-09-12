# Mission 03: Add Event Triggers to act autonomously

--8<-- "disclaimer.md"

## 🕵️‍♂️ CODENAME: `OPERATION SIGNAL POINT`

> **⏱️ Operation Time Window:** `~45 minutes`

## 🎯 Mission Brief

Welcome back, Agent. In [Mission 02](../02-multi-agent/README.md) - you learnt how to build an Application Intake child agent and an Interview Prep connected agent to broaden your main Hiring Agent's capabilities.

Your assignment, should you choose to accept it, is **Operation Signal Point** - diving deeper into **event triggers** to make the [TBC].

Welcome to the world of where automation meets intelligence.

In this mission, you'll learn:

1. TBC
1. TBC  
1. TBC
1. TBC
1. TBC

## 🤔 What is an Event trigger?

Previously in [Recruit](/docs/recruit/10-add-event-triggers/README.md), we learnt about event triggers from Mission Commander Scott Durow 🫡. So let's do a quick recap on this in case you missed it.

**Event triggers** let an agent _act_ on _its_ own when something happens in another system - no user message required. When the configured event fires - such as “new SharePoint item,” “new email,” “Planner task assigned,” or even a time‑based recurrence, a connector sends a trigger payload to your agent. The agent then follows your instructions to decide which actions or topics to call.

### Key characteristics

- **Autonomous activation:**
      - Unlike topic triggers that start when a user types to the agent, event triggers fire from external events, enabling proactive behavior.

- **Payload-driven:**
      - Each event delivers a payload (variables + optional instructions) through a connector. The agent uses your defined instructions and the payload to choose what to do next.
      - For example _call a topic_ or _execute actions defined by Tools_.

- **Examples out-of-the-box:**
      - SharePoint/OneDrive file or item created
      - Planner task completed/assigned
      - Microsoft Forms response submitted
      - Recurrence/schedule

    Availability depends on your organization’s data policies configured in Power Automate.

- **Requires generative orchestration:**
      - Event triggers are available only when generative orchestration is enabled for the agent.

- **Billing/usage:**
      - Each trigger delivery counts as a message toward Copilot Studio capacity. 
      - For example a 10‑minute recurrence sends a message every 10 minutes.

- **Authentication model and setup:**
      - You add triggers within the agent Overview, under _Triggers_. Authentication for the trigger connector uses the agent maker’s account (“agent author authentication”).
      - You can edit trigger parameters and payload in the Power Automate maker portal.

- **Testing & observability:**
      - You can test triggers from the agent's test pane and inspect behavior with the activity map before publishing.

!!! info "TL;DR for developers"

    Think of event triggers as **webhook-like signals** that push a structured payload into your agent, letting it _initiate_ work and chain actions across systems - without waiting for a user to ask.

### Topic triggers - how they differ

Mission Commander Elaiza Benitez outlined what topic triggers are in [Recruit](/docs/recruit/07-add-new-topic-with-trigger/README.md), however you might still be wondering how _Topic_ triggers differ from _Event_ triggers, and why that distinction matters for understanding what makes an agent autonomous.

Topic triggers control _when a topic runs_, usually in response to a user message.

- In generative orchestration, the default trigger is **By agent** - the planner chooses a topic whose name/description best matches the user’s message.
- In classic orchestration, the default is **Phrases** - the planner chooses a topic when one or several trigger phrases best matches the user's message.

Other trigger types include `Message received`, `Event received`, `Activity received`, `Conversation update`, `Invoke received`, `On redirect`, `Inactivity`, and `Plan complete`.

!!! info "Core difference"

    Topic triggers are _conversation activity_ starters inside the chat.
    
    Event triggers are system _event_ starters delivered via connectors that can run the agent without any conversation at all.

### Quick guide of Topic trigger vs Event trigger

- **Topic trigger:** User (or chat activity) said/did X ➡️ run Topic T.
- **Event trigger:** SharePoint/Planner/Email/Timer fired with payload P ➡️ agent evaluates instructions ➡️ call Actions/Topics accordingly.

1. Topic Triggers

- Activated by user input (e.g., phrases typed in chat).
- Used to start conversations or actions based on what the user says.

1. Event Triggers

- Activated by external events, not user input.
- Allow agents to act autonomously when something happens (e.g., a new file is added to OneDrive).

### ▶️ The role of event triggers in autonomous agents

## Recap from Recruit → Mission 10: Add Event Triggers - Enable autonomous agent capabilities



## Lab 02

- Make the agents autonomous - by adding triggers:
  - On schedule
  - On incoming email
- [https://learn.microsoft.com/microsoft-copilot-studio/authoring-trigger-event](https://learn.microsoft.com/microsoft-copilot-studio/authoring-trigger-event)
