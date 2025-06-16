# Create a custom agent using a conversational creation experience with Copilot

## Introduction

- What is a custom agent?
    - What can a custom agent do?
    - Why use a custom agent?
    - Example
- Use natural language to create agents
- But I'm new to "describing what I want" - what do I do?    
    - Why Prompts matter
    - Tips for writing a good prompt
    - Example
- Improving your agent's responses in Copilot Studio
- Lab 06: Create an agent with Copilot

## 🤔 What is a _custom_ agent?

A custom agent is a chatbot or virtual assistant that you create and design in Copilot Studio to help users with specific tasks or questions. It's called custom because:

- You decide the purpose - help users request vacation time, check order status, provide assistance with IT related questions.
- You define the converstaion - what the agent says and how it should respond.
- You connect it to your own data or systems - connect to your enterprise data, either through the built-in support resources or choose from connectors, flows, REST APIs and model context protocol servers.

Think of it like building your own digital helper that can talk to users and complete tasks for them such as answering questions, collecting information required by a process, or connecting to your enterprise data.

### 🤖 What can a custom agent do?

A custom agent can fulfil the following:

- Ask users for information such as names, dates, or preferences
- Save that information to a database or table
- Look up data based on the questions asked and give answers
- Work autonomously without users directly interacting with the agent
- Trigger actions either on-demand through direct user interaction or autonomously such as sending emails or creating records

### 👩🏻‍💻  Why use a custom agent?
- Saves time by automating repetitive tasks.
- Gives users a friendly, guided experience.
- You can tailor it to your business or project needs.

### ✨ Example
You build a custom agent that helps employees request vacation.

It asks for their name, vacation dates, and manager’s name, then saves the information into the designated system that managed vacation requests, such as a SharePoint list.

Now, instead of navigating to the SharePoint list and creating a new item, employees simply chat with the agent instead.

## 🗣️ Use natural language to create agents

Previously you learnt how to quickly get started in building a custom agent with the prebuilt agent templates. In this lesson, wi'll dive into the conversational creation experience with Copilot. Copilot Studio makes it easy to build agents by chatting with Copilot, just like having a conversation. 

In Copilot Studio, you don’t need to write code to create an agent. Instead, you describe what you want your agent to do in plain language, and Copilot helps you build it step by step through a chat-like experience.

## 🌱 But I'm new to "describing what I want" - what do I do?

Describing in natural language to create a custom agent might be a new concept for you. Whenever you use Copilot across Microsoft products and services, you are using natural lanugage in the form of a _prompt_. 

A prompt is the message or instruction you give to an AI agent to tell it what you want it to do. Think of it like giving directions to a helpful assistant. The clearer your instructions, the better the result.

### 🪄 Why Prompts matter

- They guide the agent’s behavior.
- They help the agent understand what kind of conversation to have.
- A good prompt makes the agent more helpful and accurate.

### 📝 Tips for writing a good prompt

- Be clear and specific – say exactly what you want the agent to do.
- Think like the user – what will the user say? What should the agent reply?
- Include examples – if possible, give a sample interaction.

### ✨ Example

Let's say the HR team needs an agent to help with vacaction requests.

The prompt could be,

    “I want to build an agent that helps users submit a vacation request. When a user says they want to request time off, the agent should ask for their name, the start date of their vacation, the end date of their vacation, and their manager’s name. Once the user provides this information, the agent should save it to a SharePoint list called ‘Vacation Requests’ and post a notification in a dediciated Microsoft Teams channel.”

Why this prompt works:

- **Clearly states the goal** - submit a vacation request
- **Describes the user interaction** - what the user says and what the agent should ask
- **Lists the required data** - name, start date, end date, manager
- **Mentions where the data goes** - a SharePoint list called Vacation Requests

## Improving your agent's responses in Copilot Studio

After your agent is provisoned from the conversational creation experience, you'll want to test your agent against the instrutions Copilot generated from your prompt. Improving your agent’s responses in Copilot Studio is all about making sure it understands your goals clearly and has the right information to work with.

1. **Refine the agent instructions** - this is where you tell your agent how it should behave. Use clear, specific language.

    For example:
    
    ✅ “Act like a friendly customer support agent who explains things simply.”
    
    ❌ “Be helpful.” (Too vague)

1. **Check the tone and launguage** - Make sure the agent’s tone matches your audience. 

    You can set it to be:

    - Friendly and casual.
    - Professional and concise.
    - Supportive and patient.

1. **Add or update knowledge sources** - if your agent needs to answer questions about a topic, make sure it has access to the right information.

    - Add links to websites, documents, or FAQs.
    - Keep the content up to date.
    - Use clear, well-structured information.

1. **Use Topics and Triggers** - If your agent needs to handle specific tasks or conversations, you can create topics with trigger phrases. This helps guide the conversation more precisely. We'll learn more about this in the following lesson.

1. **Test with real questions** - try asking your agent the kinds of questions users might ask. 

    If the answers aren’t great:

    - Adjust the system instructions.
    - Add more examples or knowledge.
    - Rephrase your questions to see how it responds.

1. **Review and iterate** - improving an agent is an ongoing process! 

    After publishing:

    - Collect feedback from users.
    - Watch for common questions or confusion.
    - Keep refining the agent’s setup.

## 🧪 Lab 06: Create an agent with Copilot

Placeholder text

## Next lesson
Congratulations! 👏🏻 You've _placeholder text_

This is the end of **Lab 06 - Create an agent with Copilot**, select the link below to move to the next lesson. Your solution created in this lab will be used in the next lesson's lab.

⏭️ [Move to **Creating a solution** lesson](https://github.com/microsoft/copilot-studio-for-beginners/blob/main/05-using-prebuilt-agents/README.md)


## 📚 Additional learning
🔗 [Quickstart: Create and deploy an agent](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-get-started?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-170631-ebenitez)

🔗 [Create and delete agents](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-first-bot?WT.mc_id=power-170631-ebenitez)

🔗 [Key concepts - Authoring agents](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-fundamentals/?WT.mc_id=power-170631-ebenitez)