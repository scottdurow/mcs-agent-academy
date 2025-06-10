# Create a declarative agent for Microsoft 365 Copilot

## Introduction

This lesson will cover:
- What is a declarative agent
- Why would I use Microsoft Copilot Studio to build a declarative agent?
    - Feature comparison
    - Extending Microsoft 365 Copilot in Copilot Studio
- Build a declarative agent in Microsoft Copilot Studio for Microsoft 365 Copilot
    - Understanding Business-to-Employee (B2E)
    - Use case scenario
- Lab 03: Build a declarative agent in Microsoft Copilot Studio for Microsoft 365 Copilot
    - Understanding Business-to-Employee (B2E)
    - Prerequisites
    - 3.1 Create a declarative agent
    - 3.2 Create and add a prompt for your declarative agent
    - 3.3 Test your declarative agent
    - 3.4 Publish your declarative agent to Microsoft 365 Copilot and Teams

## What is a declarative agent for Microsoft 365 Copilot?

Declarative agents are tailored versions of Microsoft 365 Copilot. You can customize Microsoft 365 Copilot to meet specific business needs by providing it with instructions to support a particular process, ground it with enterprise knowledge, and leverage tools for wider extensibility. This allows organizations to create personalized experiences with greater functionality for their users.

## Why would I use Microsoft Copilot Studio to build a declarative agent?

There's a chance you've already explored [Copilot Studio agent builder](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/copilot-studio-agent-builder) in Microsoft 365 Copilot and so you're probably wondering why build a declrative agent in Microsoft Copilot Studio? 🤔

Microsoft Copilot Studio offers a comprehensive set of tools and features for declarative agents that go beyond the limitations of Copilot Studio agent builder.  Let's break this down further for declarative agents.

### Feature comparison
The following table higlightes the differences when building a declarative agent in Copilot Studio Agent Builder and Copilot Studio. 

| Feature                   | Copilot Studio Agent Builder in Microsoft 365 Copilot                          | Extend Microsoft 365 Copilot in Copilot Studio                                |
|---------------------------|-------------------------------------------------------|------------------------------------------------------------|
| **Knowledge**       | Web, SharePoint, Teams chats, Outlook emails, Copilot connectors     | Web search (via Bing), SharePoint, Dataverse, Dynamics 365, Copilot connectors  |
| **Tools**       | None     | 1400+ Power Platform connectors, custom connectors, prompt, computer use, REST API, Model Context Protocol   |
| **Channel**           | Agent only published to Microsoft 365 Copilot     | Agent published to Microsoft 365 Copilot and Teams      |
| **Sharing permissions**         | Users are only viewers    | Users can be editors or viewers   |

There's more capabilities offered for declarative agents built in Microsoft Copilot Studio which we'll learn about next.

### Extending Microsoft 365 Copilot in Copilot Studio

Let's expand what we've learnt from the feature comparison table. 

#### Customization

- **Detailed Instructions**: You can provide detailed instructions and capabilities to define the agent's purpose and behavior precisely.
  - This includes invoking tools simply from using natural language

- **Enterprise Knowledge Access**: Enables access to enterprise knowledge that respect user permissions
  - SharePoint integration
  - Dataverse integration
  - Dynamics 365 integration
  - Microsoft 365 Copilot connectors enabled by your organization administrator

#### Advanced Capabilities

- **Integration with External Services**: Allows you to choose from 1400+ Power Platform connectors that integrate with external services, providing more complex and powerful functionalities.
  - Examples include [docusign](https://learn.microsoft.com/en-us/connectors/docusign/), [ServiceNow](https://learn.microsoft.com/en-us/connectors/service-now/), [Salesforce](https://learn.microsoft.com/en-us/connectors/salesforce/), [SAP](https://learn.microsoft.com/en-us/connectors/sap/) and more
  - Alternatively, you can also leverage MCP clients and REST APIs directly within your declarative agent

- **AI prompts**: Use a prompt to analyze and transform text, documents, images and data with natural language and AI reasoning.
  - Change the GPT model from Basic, Standard, Premium
  - Option to bring-your-own Azure AI Foundry model to ground your prompt in

- **More deployment configuration options**: Select channels and define user permissions
  - Teams enablement is another interactive path for declarative agents, users are already familiar with the Teams user interface
  - Edit user permisisons can be shared to prevent single point of dependency on the owner of the agent


In summary, declarative agents in Microsoft Copilot Studio allow customization of Microsoft 365 Copilot to suit business needs through integration of enterprise knowledge systems, tools to connect to external services or AI GPT models.

## 🧪 Lab 03: Build a declarative agent in Microsoft Copilot Studio for Microsoft 365 Copilot

We'll next learn how to build a declarative agent for a "Business-to-Employee" use case which will act as an **IT helpdesk agent**.

> [!NOTE]
> This lab will outline steps to add a Prompt as a tool. The following lessons will dive into adding knowledge sources and adding other tools available. Keeping it simple for your learning 😊 

### Understanding Business-to-Employee (B2E)

Business-to-Employee (B2E) refers to the interactions and services that a business provides directly to its employees. In the context of an agent, it means using the advanced capabilities of Copilot Studio to support and enhance the work experience of employees within the organization.

### Use case scenario

**As an** employee

**I want to** get quick and accurate help from the IT helpdesk agent for issues like device problems, network troubleshooting, printer setup

**So that I can** stay productive and resolve technical issues without delays

Let's begin!

### Prerequsities
- Users and makers must have a license to use Microsoft 365 Copilot.
- Makers must have permissions to create in and have access to a Copilot Studio environment.

### 3.1 Create a declarative agent

1. Navigate to https://copilotstudio.microsoft.com/ and sign in using your credentials. Make sure to switch to your environment that you're using for these labs.

1. Select **Agents** from the menu and select **Copilot for Microsoft 365**.

   ![Copilot for Microsoft 365](assets/3.1_02_CopilotForM365.png)

1. Next, we're going to create a declarative agent by selecting **+ Add** agent.

   ![Add Agent](assets/3.1_03_AddAgent.png))

1. We'll then see the conversational creation experience load where we can chat in natural language with Copilot to describe the declarative agent we want to build, and use the provided questions for guidance. 

   Let's enter a detailed description that outlines the following,
   - the task of the agent
   - what type of inquiries it can handle
   - the format of its response
   - the goal of the agent


   ```
   You are a highly skilled and experienced IT professional specializing in a wide range of computer systems, networking, and cybersecurity. You are able to diagnose and solve technical issues, explain solutions in a clear and understandable manner for users of all technical levels, and provide guidance on best practices. You should be concise and informative, using step-by-step instructions with bullet points when appropriate. Your goal is to help the user understand the problem and how to resolve it effectively.
   ```

   ![Create Prompt](assets/3.1_04_CreatePrompt.png)

1. After submitting the prompt, a noticeable update will appear on the right handside pane with the details and instructions of the agent as defined by the prompt. Next you'll be asked to confirm the name of your agent and Copilot will have suggested a name. 

   Either enter `yes` to accept the suggested name or enter a different name such as the following,

   ```
   Contoso Tech Support Pro
   ```

   ![Instructions updated](assets/3.1_05_InstructionsUpdated.png)

   > [!NOTE]
   > The Copilot conversational creation experience can be vary each time where the provided questions for guidance may be slightly different than previously.

1. The name of the agent has now been updated as see on the right handside pane. We're now asked to refine the instructions for the agent. The instructions on the right-hand side pane is already suitable as it covers the topics we want - refer to yellow highlighted text in screenshot below. Instead, we'll expand on how it should format its response and the tone. We'll enter the following,

   ```
   Concise and Informative:
   - Bullet Points: Use bullet points for clarity and to break down information into digestible parts.
   - Summarize: Provide a brief summary of the solution at the end of the explanation.

   User-Friendly Communication:
   - Empathy: Show empathy and understanding of the user's frustration or confusion.
   - Encouragement: Encourage users by acknowledging their efforts and progress.

   Interactive and Engaging:
   - Ask for Feedback: After providing a solution, ask if the user needs further assistance or if the solution worked.
   ```

   ![Name updated](assets/3.1_06_NameUpdated.png)

1. Next we'll be asked if we want to add any publicly accessible websites or knowledge. I'll respond with `No` as we will only be adding a prompt for our declarative agent in this lab. Subsequent labs in future lessons will cover knowledge sources.

  ![No websites or knowledge sources added](assets/3.1_07_KnowledgeSources.png)

1. We'll then see a response from Copilot that we have now finished configuring our agent using the Copilot conversational creation experience. Click Create to provision the declarative agent for Microsoft 365 Copilot.

   > [!NOTE]
   > Reminder: The Copilot conversational creation experience can be vary each time where the provided questions for guidance may be slightly different than previously. So you may be seeing a different message from Copilot at the end of your configuration.

   ![Create agent](assets/3.1_08_CreateDeclarativeAgent.png)

1. Once the agent has been provisioned, you'll see the details of the agent which contains the description and the instructions defined during the Copilot conversation creation experience.

   ![Agent details](assets/3.1_09_01_AgentDetails.png)

  Scroll down the pane and you'll also see the capabilities of adding knowledge, enabling web search (via Bing), starter prompts and the publish details of the declarative agent for Microsoft 365 Copilot. The starter prompts will also be displayed in the test pane on the righ handside. Users can select these starter prompts to begin interacting with the agent.

   ![Additional capabilities](assets/3.1_09_02_SuggestedPrompts.png)

### 3.2 Create and add a prompt for your declarative agent

Lorem ipsum

### 3.3 Test your declarative agent

Lorem ipsum

### 3.4 Publish your declarative agent to Microsoft 365 Copilot and Teams

Lorem ipsum

> [!IMPORTANT]
> Reminder: To publish a declarative agent built in opilot Studio to Microsoft 365 Copilot and Teams, you need a Microsoft 365 Copilot user license.

## Next lesson
Congratulations! 👏🏻 You've built a declarative agent by building a Prompt and instructing the agent to use the Prompt when helping employees with their IT related questions.

This is the end of Lab 03 - Build a declarative agent in Microsoft Copilot Studio for Microsoft 365 Copilot, select the link below to move to the next lesson.

⏭️ [Move to **Creating a solution** lesson](https://github.com/microsoft/copilot-studio-for-beginners/blob/main/04-creating-a-solution/README.md)