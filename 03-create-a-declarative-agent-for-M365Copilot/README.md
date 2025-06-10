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
| **Channel**           | Agent only published to Microsoft 365 Copilot, can't be used in Teams chat     | Agent published to Microsoft 365 Copilot and Teams      |
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

Lorem ipsum

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