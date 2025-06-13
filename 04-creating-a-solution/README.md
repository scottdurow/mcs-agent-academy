# Creating a Solution for your agent

## Introduction

- [Solution? What's that?](#️-solution-whats-that)
- [Why should I use a Solution for my agent?](#-why-should-i-use-a-solution-for-my-agent)
- [Understanding Solution Publishers](#understanding-solution-publishers)
- [Power Platform Solution lifecycle](#-power-platform-solution-lifecycle)
- [Lab 04: Create a new Solution](#-lab-04-create-a-new-solution)
    - [Prerequisites](#prerequisite)
    - [4.1 Create a Solution publisher](#41-create-a-solution-publisher)
    - [4.2 Create a Solution](#42-create-a-solution)

## 🕵🏻‍♀️ Solution? What's that?
In Microsoft Power Platform, solutions are like containers or packages that hold all the parts of your apps or agents - these could be tables, forms, flows, and custom logic. Solutions are essential for Application Lifecycle Management (ALM), they enable you to manage your app and agents from idea to development, testing, deployment, and updates.

Solutions are created in the **Power Apps maker portal** - a web based interface where you can build and customize apps, Dataverse, flows, explore AI components and more. This is where we'll create a solution shortly in the upcoming 🧪 lab for this lesson.

   ![Solutions](assets/4.0_01_Solutions.png)    

There are two types of solutions:

- **Unmanaged solutions** - used during development. You can freely edit and customize as needed.
- **Managed solutions** - used when you're ready to deploy your app to testing or production. These are locked down to prevent accidental changes.


## 🤔 Why _should_ I use a Solution for my agent?
Think of Solutions as a toolbox. When you need to fix or build something (an agent) in a different location (environment), you gather all the necessary tools (components) and put them in your toolbox (Solution). You can then carry this toolbox to the new location (environment) and use the tools (components) to complete your work, or add new tools (components) to customize your agent or project you're building.

💬 Elaiza, your friendly cloud advocate popping in here 🙋🏻‍♀️ to share some words: 

> We have a saying in New Zealand, "Be a tidy Kiwi!" which is a call to action for New Zealanders 🥝 to take responsibility for their environment by disposing of litter properly and keeping public spaces clean. We can use the same context for agents by keeping everything related to your agent organized and portable, and it'll help you maintain a tidy environment.

It's good practice to create an agent in a dedicated solution in your source [developer] environment. Here's why solutions are valuable:

🧩 **Organized development**
- You're keeping your agent separate from the Default solution which contains everything in the environment. All your agent components are in one place 🎯

- Everything you need for your agent is in a solution, making it easier to export and import to a target environment 👉🏻 this is a healthy habit of ALM.

🧩 **Safe deployment**
- You can export your app or agent as a managed solution and deploy it to other environments (like testing or production) without risking accidental edits.

🧩 **Version control**
- You can create patches (target fixes), updates (a more comprehensive change) or upgrades (replacing a solution - usually major changes and introducing new features).

- Helps you roll out changes in a controlled way.

🧩 **Dependency Management**
- Solutions track which parts depend on others. This prevents you from breaking things when you make changes.

🧩 **Team Collaboration**
- Developers and makers can work together using unmanaged solutions in development, then hand off a managed solution for deployment.

## Understanding Solution Publishers

A Solution Publisher in Power Platform is like a label or brand that identifies who created or owns a solution. It’s a small but important part of managing your apps, agents and flow customizations, especially when working in teams or across environments.

When you create a solution, you must choose a publisher. This publisher defines:

- A prefix that gets added to all custom components (like tables, fields, and flows).

- A name and contact info for the organization or person who owns the solution.

### 🤔 Why is it important? 
1. **Easy identification** - the prefix (like new_ or abc_) helps you quickly identify which components belong to which solution or team.

2. **Avoids conflicts** - if two teams create a column called status, their prefixes (teamA_status, teamB_status) prevent naming collisions.

3. **Supports ALM** - when moving solutions between environments (Dev → Test → Prod), the publisher helps track ownership and maintain consistency.

### ✨ Example
Let’s say you create a publisher called Contoso Solutions with the prefix `cts_`.

If you add a custom column called _Priority_, it will be stored as `cts_Priority` in the solution.

Anyone who comes across the column at a solution level regardless of what environment they're in, they can easily identify it as a column that's associated to Contoso Solutions.

## 🧭 Power Platform Solution lifecycle

So now you understand the purpose of a Solution, let's next learn about the lifecycle.

**1. Create Solution in Development ennvironment** - start by creating a new solution in your development environment.

**2. Add Components** - add apps, flows, tables, and other elements to your solution.

**3. Export as Managed Solution** - package your solution for deployment by exporting it as a managed solution.

**4. Import to Test Environment** - test your solution in a separate environment to ensure everything works as expected.

**5. Import to Production Environment** - deploy the tested solution to your live production environment.

**6. Apply Patches, Updates or Upgrades** - make improvements or fixes using patches, updated, or upgrades. 🔁 Repeat the cycle!

### ✨ Example

Imagine you're building an IT helpdesk agent to help employees with issues such as device problems, network troubleshooting, printer setup and more.

- You start in a development environment using an unmanaged solution.

- Once it's ready, you export it as a managed solution and import it into a target environment such as a system test or user acceptance testing (UAT) environment.

- After testing, you move it to production - all without touching the original development version.

## 🧪 Lab 04: Create a new Solution

We're now going to learn
- How to create a Solution publisher

- How to create a Solution

We're going to stick with the example from earlier, where we're going to create a solution in the dedicated Copilot Studio environment to build our IT helpdesk agent in.

Let's begin!

### Prerequisites
- Makers must have permissions to create in and have access to a Copilot Studio environment.

### 4.1 Create a Solution publisher

1. Using the same Copilot Studio environment used in the previous lesosn, select the elipsis icon (. . .) on the left handside menu in Copilot Studio. Select Power Apps.

    _insert screenshot_

1. The Power Apps maker portal will load in a new browser tab and we can begin creating our solution! Select **Solutions** in the left handside menu.

    _insert screenshot_

1. Next, select **+ New solution**

    _insert screenshot_

1. We're now going to create a new Solution Publisher. Select **+ New publisher**.



1. The **New publisher** pane will appear with required and non-required fields to be populated in the **Properties** tab.

| Property    | Description | Required |
| ---------- | ---------- | :----------: |
| Display name | Display name for the publisher | Yes   |
| Name  | The unique name and schema name for the publisher  | Yes    |
| Description   | Outlines the purpose of the solution    | No     |
| Prefix    | Publisher prefix which will be applied to newly created components   | Yes      |
| Choice value prefix   | Generates a number based on the publisher prefix. This number is used when you add options to choices and provides an indicator of which solution was used to add the option.   | Yes      |

### 4.2 Create a Solution

Placeholder text

## Next lesson
Congratulations! 👏🏻 You've created a Publisher and used it in your newly created Solution to build your agent in!

This is the end of **Lab 04 - Creating a Solution**, select the link below to move to the next lesson. Your solution created in this lab will be used in the next lesson's lab.

⏭️ [Move to **Creating a solution** lesson](https://github.com/microsoft/copilot-studio-for-beginners/blob/main/05-using-prebuilt-agents/README.md)