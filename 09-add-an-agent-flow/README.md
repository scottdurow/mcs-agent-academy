# Add an agent flow to your Topic for automation

## Lesson chapters

- placeholder

## 🤔 What is an agent flow?

Agent flows are a powerful way to automate repetitive tasks and integrate your apps and services. Think of them as structured, step-by-step workflows that your agent can execute to automate tasks or connect with other applications and services. You can think of them as mini workflows that help your agent do things like send notificaitons, update records, or respond to events.

Unlike autonomous agents that use AI to make decisions on the fly, agent flows are **deterministic workflows** - meaning they follow the same path every time, ensuring consistent and reliable results.

In simple terms:
- They help your agent _do things_, not just _say things_ to users.
- They're resuable across topics and agents, and can be triggered by user messages, events, or other applications and serices.

### Why use agent flows

Agent flows always follow a fixed path - they do the same thing every time when given the same input.

This makes them:

- **Reliable** - you can trust that they'll behave the same way every time.
- **Predictable** - you know what result to expect when the flow runs.
- **Rule based** - they follow steps that you define.

Other benefits are:
- **Automation** - handle repetitive tasks such as submitting forms or sending notifications.
- **Integrated** - connect with 1400+ connectors like ServiceNow, SharePoint, Salesforce. Otherwise you can build your own custom connector.
- **Scalability** - reuse flows across multiple agents or scenarios.
- **No-code or low-code** - you can build flows using natural language or a visual designer.
- **All-in-one-platform** - you can design, test and deploy flows in one place - Copilot Studio.

## 🏄🏻‍♂️ How do agent flows enhance your agent?

Agent flows expand what your agent can do beyond "chatting" with users. They allow it to take action and interact with systems.

Examples of enhanced capabilities:
- Update a SharePoint list based on inputs provided in an adaptive card.
- Sending a message to a Teams channel when a training request has been submitted .

### Think of it this way

- **Agents**: the smart decision-makers
- **Agent flows**: the reliable executors

### Why it matters

- You get the best of both worlds: reliable automation and flexible AI.
- It's easy to build and update flows as your business needs chage.
- You can scale automation across teams.

## 🔌 Key features that make agent flows powerful

1. **Natural language authoring**
    - You can describe what you want the flow to do in plain English.
    - Copilot understands your intent and builds the flow for you.
    - No need to write code - just explain your idea.

1. **AI actions**

    Use AI to:
    - Read and understand documents or images.
    - Summarize long content into short, useful answers.
    - Make smart recommendations or decisions.

1. **Generative actions**
    - These let the flow adapt in real time.
    - The agent can plan and adjust steps based on changing information.

1. **Integration actions**
    - Connect your flow to other tools like Outlook, Microsoft Teams, ServiceNow, SharePoint and other applications and services, through from +1400 built-in connectors or from your own custom connector.
    - This helps your agent work with the apps your team already uses.

1. **Human in the loop**
    - Add approval steps where a person needs to review or confirm something.
    - Supports reminders, delegation, and multi-stage approvals.

## ⚙️ How they work

1. **Trigger**

    An event starts the flow - such as a user asking a question, invoking the flow from a topic, a scheduled time, or an event happening in another system.

1. **Actions**
    
    These are steps that the agent follows next - send an email, call an API, update a ticket in ServiceNow.

## 🧶 How to create an agent flow

1. **Natural language**: describe what you want the agent to do, and Copilot builds it for you.
1. **Designer canvas**: drag and drop actions, conditions, and loops in the agent flow designer to build your agent flow.

## 🎨 What is the agent flow designer?

It's a visual tool in Copilot Studio that helps you build, edit, and manage agent flows that provide step-by-step instructions your agent follows to complete tasks. It's designed to be straight forward to use, even if you're new to agent flows.

### Key features of the agent flow designer

1. **Visual canvas**
    - You can see your entire flow laid out like a diagram.
    - Easily zoom in/out, fit the view or use a minimap to navigate large flows.

1. **Add and remove actions**
    - Click the _plus (+)_ button to add a new action such as sending a message or updating an item in a SharePoint list.
    - You can search for actions from connectors, and configure them through its settings.
    - To remove an action, click the _three dots (⋮)_ and select _Delete_.

1. **Check parameters**
    - Click on any action to view or edit its settings called _parameters_.
    - You can enter values manually or use expressions to make them dynamic.

1. **Version history**
    - Every time you save your flow, a version is recorded.
    - You can go back and view or restore previous version if needed.

1. **Error checking**
    - The _Flow Checker_ highlights any errors.
    - All errors will need to be resolved prior to publishing your flow.

1. **Publish and test**
    - Once your flow is error-free, publish to make it live.
    - Use the _Test_ feature to run your flow manually or automatically, and check if it works as expected.

### Why use the agent flow designer?

- **Visual and intuitive** - you can build flows by dragging and clicking.
- **Safe to experiment** - version history lets you undo changes.
- **Built-in testing** - helps you make sure everything works before going live.

## 🔤 You mentioned "expressions" - what are expressions?

Expressions are small formulas or commands that help your agent flow work with data. You use them to calculate values, format text, make decisions, or pull specific information from inputs.

### Why use expressions?

Expressions let you:
- **Customize how data is handled** - combine names, format dates.
- **Make decisions** - if a value is greater than 10, do something.
- **Transform data** - change text to lowercase, extract part of a string.
- **Automate logic** - without writing full code

### What do expressions look like?

Expressions use functions. I'm going to borrow an explaination of what functions are from former Microsoft MVP, Jerry Weinstock.

> "Functions are built-in logic to transform your data either through simple or complex operations in your expression."

Functions enable you to build expressions without you needing to write any code. 

The way I like to describe it, is that a function in agent flows is similar to Excel functions. You can perform an operation on data to transform it into a desired output. When building your formula in Excel you select your input value from the cells in a table or a range, and then apply functions to manipulate the data output. An example is using the <samp>COUNT</samp> function to work out the number of cells that contian number from a range. 

In agent flows, instead of referencing data from cells in a table, you're referencing data outputs from the trigger or actions when building your expressions. Continuing with the previous example, use the function _length_ to retrieve the number of items returned from the _Get items_ SharePoint connector action.

### Why do functions matter?

Using functions makes your agent flows:

- **Smarter** - they can react to different inputs or conditions.
- **Flexible** - you can customize how data is handled.
- **Efficient** - you avoid manual steps by automating logic.

### Most useful functions

The following are common functions used in agent flows. For the full list of functions, head to the [reference guide](https://learn.microsoft.com/en-us/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-170631-ebenitez).

#### 🔡 Text
- <samp>concat()</samp> - Joins two or more pieces of text together.
    - Example: `concat('Hello ', firstName)` → “Hello John”

- <samp>toLower()</samp> / <samp>toUpper()</samp> - Changes text to lowercase or uppercase.
    - Useful for standardizing input.

- <samp>substring()</samp> - Extracts part of a string.
    - Example: Get the first 3 letters of a name.

- <samp>trim()</samp> - Removes spaces from the beginning and end of text.

#### 🔢 Math and number

- <samp>add()</samp>, <samp>sub()</samp>, <samp>mul()</samp>, <samp>div()</samp> - Basic math operations.
    - Example: `add(5, 3)` - the output is 8

#### 📅 Date and time
- <samp>utcNow()</samp> - Gets the current date and time in UTC.
    - Great for timestamps.

- <samp>addDays()</samp>, <samp>addHours()</samp> - Adds time to a date.
    - Example: `addDays(utcNow(), 7)` output is 7 days from now.

- <samp>formatDateTime()</samp> - Formats a date into a readable string.
    - Example: Monday, July 7, 2025

#### ✅ Logical
- <samp>if()</samp> - Runs one value if true, another if false.
    - Example: `if(score > 50, 'Pass', 'Fail')`

- <samp>equals()</samp> - Checks if two values are the same.

- <samp>and()</samp>, <samp>or()</samp>, <samp>not()</samp> - Combine multiple conditions.

#### 🪣 Other handy functions
- <samp>coalesce()</samp> - Returns the first non-empty value.
    - Useful for fallback/default values.

- <samp>guid()</samp> - Generates a unique ID.
    - Useful for tracking or logging.

- <samp>length()</samp> - Counts how many characters or items are in a string or array.


## ⭐ Best practices

Here are some best practices for building agent flows in Copilot Studio.

1. **Start simple and build gradually**

    - Begin with a small, clear task such as sending a message.
    - Add more steps after testing the basics of your automation.

1. **Use clear and descriptive action names**

    - Label each step clearly so you know and your team understands what it does.
    - Example: instead of the default name of "Update item" for the SharePoint connector action, rename it to what it's updating, such as "Update device status."

1. **Check for errors before publishing**

    - Use the **flow checker** to find and fix any issues.
    - You can't publish flows if there are errors, so try to resolve them when they occur.

1. **Test your flow thoroughly**

    - Just because it saves and publishes, doesn't mean it works as expected.
    - Use the _Test_ feature to run your flow manually or automatically, and check the results.

1. **Use Version History**

    - Save your flow often so you can go back to earlier versions if needed.
    - You can view and restore previous versions using the _Version History_ pannel.

1. **Use parameters and expressions wisely**

    - When configuring actions, use parameters to make your flow dynamic.
    - You can enter values manually or use expressions to calcuate them, or combine it with values from actions upstream by using the _dynamic content_ picker.

1. **Delete unused actions**

    - If you add an action and later decide you don't need it, remove it to keep your flow clean.

## 🧪 Lab 09 - Add an agent flow for automation and enhance topic capabilities

We're now going to learn how to enhance our topic with adaptive cards and using advanced functionality of topics and nodes. 

- [9.1 Create an agent flow](/08-add-adaptive-card/README.md/#81-add-an-adaptive-card-to-display-available-devices)
- [9.2 Add agent flow to topic](/08-add-adaptive-card/README.md/#82-add-a-condition-node-to-enable-users-to-request-a-device)
- [9.3 Update Available device topic](/08-add-adaptive-card/README.md/#83-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request)
- [9.4 Test agent using several scenarios](/08-add-adaptive-card/README.md/#84-update-available-devices-topic-to-redirect-to-the-newly-created-topic)

### ✨ Use case

**As a** manager of an employee

**I want to** receive device requests

**So that I** can review the device requested by the employee.

Let's begin!

### Prerequisites

1. **SharePoint list**

    We'll be using the **Devices** SharePoint list from [Lesson 00 - Course Setup - Step 3: Create new SharePoint site](/00-course-setup/README.md/#step-3-create-new-sharepoint-site). 
    
    If you have not set up the **Devices** SharePoint list, please head back to [Lesson 00 - Course Setup - Step 3: Create new SharePoint site](/00-course-setup/README.md/#step-3-create-new-sharepoint-site).

1. **Contoso Helpdesk Copilot**

    We're going to use the same agent created previously in [Lesson 06 - Create a custom agent using natural language with Copilot and grounding it with your data](/06-create-agent-from-conversation/README.md).

### 9.1 Create an agent flow

_placeholder text_

### 9.2 Add agent flow to topic

_placeholder text_

### 9.3 Update Available device topic

_placehoder text_

### 9.4 Test agent using several scenarios

_placehoder text_

## Next lesson
Congratulations! 👏🏻 _placehoder text_

This is the end of **Lab 09 - Add an agent flow for automation and enhance topic capabilities**, select the link below to move to the next lesson. We'll expand on the use case in this lab in the following lesson's lab.

⏭️ [Move to **_placeholder text_** lesson](/07-add-new-topic-with-trigger/README.md)


## 📚 Additional learning
🔗 [Introducing agent flows: Transforming automation with AI-first workflows](https://www.microsoft.com/en-us/microsoft-copilot/blog/copilot-studio/introducing-agent-flows-transforming-automation-with-ai-first-workflows/)

🔗 [Agent flows overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/flows-overview?WT.mc_id=power-170631-ebenitez)

🔗 [Use agent flows with your agent](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-170631-ebenitez)

🔗 [List of functions in the reference guide](https://learn.microsoft.com/en-us/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-170631-ebenitez)

📺 [Agent Flows in Copilot Studio](https://www.youtube.com/watch?v=VJTKyk3Pr7s)


