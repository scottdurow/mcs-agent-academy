# Introduction

## 🤔 What is a Topic?

A topic is a structured conversation that helps your agent respond to specific user questions or tasks. Think of a topic as a mini-conversation or task that your agent can handle. Each topic is designed to respond to a specific user question or request.

### 🌌 Purpose of a topic
There are three common purposes for topics based on what users need:

**Informational** - answers questions such as the following:
- <samp>"What is …?"</samp>
- <samp>"When will …?"</samp>
- <samp>"Why …?"</samp>

**Task completion** - helps users _do_ something:
- <samp>"I want to …"</samp>
- <samp>"How do I …?"</samp>

**Troubleshooting** - solves problems:
- <samp>"Something isn’t working …"</samp>
- <samp>"I'm encountering an error message …"</samp>

You can also create topics for ambiguous questions like "<samp>I need help</samp>," which ask users for more details before continuing.

## 🐦 Why are topics useful?
Topics help you

- Organize your agent's knowledge

- Make conversations feel natural

- Solve user problems effeciently

## 🪺 Types of topics

1. **System Topics** - these are built-in and handle common event such as:
    - Starting a conversation
    - Ending a conversation
    - Handling errors
    - Asking users to sign in
    - Escalating to a human agent

1. **Custom topics** - you create these two handle specific tasks or questions such as:
    - Submit a user's vacation leave request
    - <samp>I can't log in through our company VPN</samp>
    - <samp>How do office visitors connect to our company guest WiFi?</samp>

##  🧬Anatomy of a topic

Each topic usually contains the following.

### 🗣️Triger phrases

These are words or sentences users might say to start the topic.

**Examples:**

For a vacation leave topic, trigger phrases could be

- <samp>"I want to take vacation leave"</samp>
- <samp>"Request vacation"</samp>
- <samp>"Apply for time off"</samp>
- <samp>"How do I submit a leave request?"</samp>

For a business hours topic, trigger phrases could be
- <samp>"What are your business hours?"</samp>
- <samp>"What time do you open and close today?"</samp>
- <samp>"When do you open?"</samp>

### 💬 Conversation nodes

A topic is made up of nodes which are steps the agent follows once the topic is triggered. You connect these steps to build a flow that your agent follows when interacting with users.

Think of these as instructions or actions such as the following:

- Asking the user questions
- Sending messages
- Calling an external service such as leave management system
- Setting or checking variables
- Using conditions to branch the conversation
- Directing to another topic

The following are the main types of nodes you can add to an agent:

1. **Message node**
    - **Purpose** - sends a mesage to the user.
    - **Example** - <samp>"Thanks for your request! I'll help you with that."</samp>

    This node lets your agent send messages to users, which can be simple text or rich content like images, videos, cards, and quick replies. 
    
    You can personalize messages using variables, add multiple message variations for variety, and even customize speech output for voice-enabled channels.

    > Think of it as a "say something" block that helps your agent communicate clearly and interactively with users.

1. **Question node**
    - **Purpose** - asks the user a question and waits for their answer.
    - **Example** - <samp>"What are your vacation dates?"</samp>

    This node is used to ask users for specific information during a conversation and store their responses in variables for later use. 

    You can customize the type of question like text input or use entities for a define list of values a user selects from, and define how the agent should behave if the user gives an invalid answer or skips the question. 

    It also supports rich content like images and quick replies, and lets you fine-tune validation, reprompting, and interruption settings to make the conversation flow smoothly.

    > Think of it as an "ask and listen" block that helps your agent interact with users in a structured way that you define.

1. **Adaptive Card node**
    - **Purpose** - send a rich, interactive card using JSON.
    - **Example** - a card that displays a calendar date picker for a user to select a date.

    This node shows rich, interactive cards that users can fill out and submit such as forms with text boxes, buttons, and images. It captures the user's input and stores it in variables, which your agent can use later in the conversation.

    > Think of it as a customizable "form builder" block that makes your agent more engaging and capable of collecting detailed information from users.

1. **Condition node**
    - **Purpose** - add logic to the conversation. It checks something and decides what to do next.
    - **Example** - if the user says "<samp>Yes</samp>," go to the next step. If "<samp>No</samp>," end the conversation.

    This node creates decision points in your agent's conversation flow by checking if a variable meets certain criteria. Based on whether the condition is true or false, the agent follows different paths.

    > Think of it as an "if-else" block that helps your agent make descisions depending on user input or stored data in variables.

1. **Variable management node**
    - **Purpose** - stores or clears information (called variables) during the conversation.
    - **Example** - save the date the user selected in the Adaptive card node.

    This node lets you store and manage information during a conversation, it could be a user's name, answer, or preferences. You can use different types of variables such as text, numbers, or dates, and they can be scoped to a single topic, shared across topics, or even pulled from the system or environment.

    > Think of it as a "memory box" that helps your agent remember information and use them as conversation continues with the user.

1. **Topic management node**
    - **Purpose** - moves the conversation to another topic or step within the topic, transfer the conversation, or end the topic or conversation.
    - **Example** - redirect to a "Leave Policy" topic.

    This node allows directs your agent to jump from one topic to another without restarting the conversation, end the topic, transfer or end the conversation, go to a different step within the same topic. It helps guide users through different parts of the conversation flow by smoothly transitioning between topics, and you can pass variables between them to keep context.

    > Think of it as a "go to another section/step" block that helps your agent be flexible in chatting with users.

1. **Call a Tool node**
    - **Purpose** - connects to external tools such as Power Automate, Excel, ServiceNow.
    - **Example** - Power Automate cloud flow executed after user submits their vacation leave request.

    This node gives your agent capabilities to interact with external systems or perform specific tasks, such as sending emails, checking weather, or accessing databases. You can add tools using built-in connectors, custom APIs, agent flows, prompts, or connect to Model Context Protocol (MCP) servers, and even _graphical user interface_ automation for desktop apps through the computer use tool.

    > Think of tools as "action blocks" that give your agent superpowers to do things beyond _chatting_, such as calling an API, running a process, or collecting user input automatically.

1. **Generative answers node**
    - **Purpose** - uses a large language model to generate natural, human-like responses based on the user's question and any connected data.
    - **Example** - uses the connected knowledge source that contains information on vacation leave entitlements to answer user questions regarding vacation requests.

    This node enables your agent to respond to user questions using information from various knowledge sources, like websites, documents, SharePoint, or custom data. It can be used as a fallback when no matching topic is found, or within a topic to provide more detailed, dynamic answers based on specific sources you've configured your agent to use.

    > Think of it as a "smart answer block" that helps your agent give helpful, accurate responses by searching trusted content you define.

1. **HTTP request node**
    - **Purpose** - connect your agent to external systems by sending API calls (for example `GET` or `POST`) to fetch or update data.
    - **Example** - when a user asks for their vacaction days balance, the agent performs a `GET` request to the leave management system and extracts the `remainingLeaveDays` from the API response and replies to the user with the value.

    This node lets your agent connect to external systems by sending REST API calls, like `GET` or `POST` requests. You can customize the request with headers, body content, and even use Power Fx to include dynamic data, then store the response in variables for use later in the conversation.

    > Think of it as a "reach out and get information" block that helps your agent talk to other services such as retrieving user details or sending data to another system.

1. **Event or activity node**
    - **Purpose** - lets your agent send non-message actions, such as system updates or tool triggers - to the client or channel, helping it perform tasks.
    - **Example** - reacting to a user joining a chat by displaying a welcome a message.

    This node lets your agent send nonverbal signals or system updates - such as notifying when a user joins a chat or triggering a background action. You can name the event and attach data to it using simple values, variables, or Power Fx formulas, which are sent as JSON.

    > Think of it as a "silent trigger" block that helps your agent do things behind the scenes or communicate with external tools without needing a user to say anything.

## 👩🏻‍🎨 OK, how do I design topics for my agent?

### 🧙🏻‍♂️ Step 1 - understand what users need

Start by identifying common questions or tasks users will ask your agent. These could be:

- Questions that users ask often such as <samp>what's my entitlement for sick days?</samp>
- Common tasks users want to complete such as submitting a form
- Problems users often face such as login issues

### 📦 Step 2 - Group the scenarios

Organise the user needs into three categories based on what we learnt earlier - the purposes of a topic

- Informational - the user wants to know something
- Task completion - the user wants to do something
- Troubleshooting - the user needs help with resolving an issue

### 🗺️ Step 3 - Map out the conversation

Sketch a simple conversation flow of how the agent should respond

- Start with a greeting or confirmation
- Ask follow-up questions to get details
- Provide answers or perform actions

> Tip: keep the conversation short and focused. Only ask what's necessary.

### 🔀 Step 4 - Handle different conversation types

Design for both:

- **Single-turn** - one question, one answer

- **Multi-turn** - a back and forth conversation with follow-up questions

Example:

- User: <samp>"I want to apply for vacation leave."</samp>

- Agent: <samp>"Sure! What date would you like your leave to start?"</samp>

- User: <samp>"July 15th."</samp>

- Agent: <samp>"Got it. And when will your leave end?"</samp>

- User: <samp>"July 22nd."</samp>

- Agent: <samp>"Thanks! What’s the reason for your leave??"</samp>

- User: <samp>"Family vacation."</samp>

- Agent: <samp>"Thanks for the details. I’ve submitted your leave request from July 15th to July 22nd for a family vacation. You’ll get a confirmation soon."

### 🤖 Step 5 - Use AI for unexpected questions

Even if you've designed a topic for vacation leave requests, users might ask questions that aren't directly covered. This is where AI features like the Conversational boosting system topic come in handy. 

This topic includes a generative answers node, which lets your agent start using connected knowledge sources right away. Any knowledge sources added at the agent level are automatically included in the generative answers node within the Conversational Boosting system topic.

Example:

- User: <samp>"Can I carry over unused vacation days to next year?"</samp>

This question might not be part of your predefined topic flow, especially if your topic only handles submitting leave requests.

How AI helps:

If your agent is connected to your company's HR policy documents or internal website, AI can:

- Search for the relevant leave policy
- Understand and summarize the rules
- Agent responds with: <samp>"According to the HR policy, you can carry over unused vacation days to the next calendar year. For more details, check the leave policy section on the HR portal."</samp>

Why this is useful
- You don't need to manually create a topic for every policy-related question.
- AI can pull accurate answers from trusted knowledge sources.
- It improves user experience by making the agent feel smarter and more responsive.

### 🔬 Step 6 - Test the topic, the conversation flow

Before publishing your topic:

- Test using real questions or real sample inputs
- Make sure it sounds natural and helpful

> Tip: Apply improvements to your topic accordingly as you test, such as adding more nodes or removing nodes in-place of redirecting to another topic

### ⚠️ Step 7 - Avoid duplicating website content

Don't copy what's already on your website

- Focus on topics that users ask about often
- Add new topic based on chat history or support requests

### ✨ Example of conversation flow

Below is an example of a topic that handles vacation leave requests.

**Step 1: Trigger phrase**

User types, 
    
<samp>I want to request vacation leave</samp>

**Step 2: Agent asks for details using an Adaptive card**

Agent asks,

<samp>Sure! What dates would you like to take off?</samp>

Adaptive card has a start date and end date calendar picker control.

**Step 3: User provides dates**

User selects start date as August 5 2025 and end date August 10 2025, and submits card. Date values are stored in the output of the adaptive card as variables.

**Step 4: Cloud flow executed**

A Power Automate cloud flow has been executed which creates a new request in leave management system and sends an email to notify manager of leave request.

**Step 5: Send a confirmation message to the user**

Agent responds with,

<samp>Your vacation leave request from August 5 to August 10 has been submitted. Your manager will review and get back to you shortly.</samp>

## 🧪 Lab 07 - Add a new topic

We're now going to learn how to add a new topic with a trigger and tools

- Add a new topic
- Add a tool

### ✨ Use case

**As an** employee

**I want to** know what devices are available

**So that I** can request to be issued a device to replace my existing device

Let's begin!

### 7.1 Add a new topic

### 7.2 Add a new tool

## Next lesson
Congratulations! 👏🏻 You've learnt how to _placeholder text_ 🙌🏻

This is the end of **Lab 07 - Placeholder text**, select the link below to move to the next lesson. Your solution created in this lab will be used in the next lesson's lab.

⏭️ [Move to **placeholder text** lesson](/07-add-new-topic-with-trigger/README.md)


## 📚 Additional learning
🔗 [Use system topics](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-system-topics?mc_id=power-170631-ebenitez)

🔗 [Topics in Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/topics-overview?WT.mc_id=power-170631-ebenitez)

🔗 [Set topic triggers](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-triggers?WT.mc_id=power-170631-ebenitez)


🔗 [Defining agent topics](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/defining-chatbot-topics?WT.mc_id=power-170631-ebenitez)

