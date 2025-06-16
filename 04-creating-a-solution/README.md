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

In Copilot Studio, every agent you create is stored in a Power Platform solution. By default, agents are created in the Default solution, unless you create a new custom solution to create your agent in. This is what we'll learn in this lesson and in the hands-on lab.

Solutions tradtionally have been created in the **Power Apps maker portal** - a web based interface where you can build and customize apps, Dataverse, flows, explore AI components and more.

   ![Solutions](assets/4.0_01_Solutions.png)    

In Copilot Studio, there is now the **Solution Explorer** where you can manage your solutions directly. This means you can do the usual solution-related tasks:

- **Create a solution** - custom solutions enable agents to be exported and imported between environments.
- **Set your preferred solution** - choose the solution agents will be created in by default.
- **Add or remove components** - other than agent, your agent could be referencing other components such as environment variables or cloud flows. Therefore these components needed to be included in the solution. 
- **Export solutions** - to move them to another environment.
- **Import solutions** - that were created elsewhere, including [upgrading or updating solutions](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/update-solutions). 
- **Create and manage solution pipelines** - automate the deployment of solutions between environments.
- **Git integration** - enables developers to connect solutions with Git respositores for version control, collaboration and ALM. Intended to be used in developer environments only.

You no longer need to switch to the Power Apps maker portal to manage your solutions, it can be done right inside Copilot Studio 🪄

_insert screenshot_

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
In Copilot Studio, what you can do in the solution explorer depends on your user security role.
If you don’t have permission to manage solutions in the Power Apps admin center, you won’t be able to do those tasks in Copilot Studio either.

To make sure everything works smoothly, check that you have the right seucurity roles and permissions. Or if you don't manage environments in your organisation, ask your IT adminstrator (or the equiavelent) team who manages your tenant/environments.

The following are the security roles that enables users to create a solution in their environment.

| Security role    | Description |
| ---------- | ---------- |
| Environment Maker | Provides the necessary permissions to create, customize, and manage resources within a specific environment, including solutions  |
| System Customizer  | Wider permissions than Environment Maker, including the ability to customize the environment and manage security roles
| System Administrator   | Highest level of permissions and can manage all aspects of the environment, including creating and assigning security roles     |

### 4.1 Create a Solution publisher

1. Using the same Copilot Studio environment used in the previous lesosn, select the **elipsis icon (. . .)** on the left handside menu in Copilot Studio. Select **Solutions** under the **Explore** header.

   ![Solutions](assets/4.1_01_Solutions.png)    

1. The **Solution Explorer** in Copilot Studio will load. Select **+ New solution**

   ![Solutions](assets/4.1_02_NewSolution.png)    

1. The **New solution** pane will appear where we can define the details of our solution. First, we need to create a new publisher. Select **+ New publisher**.

   ![Solutions](assets/4.1_03_NewPublisher.png)  

1. The **Properties** tab of the **New publisher** pane will appear with required and non-required fields to be populated in the **Properties** tab. This is where we can outline the details of the publisher which will be used as the label or brand that identifies who created or owns the solution.

    | Property    | Description | Required |
    | ---------- | ---------- | :----------: |
    | Display name | Display name for the publisher | Yes   |
    | Name  | The unique name and schema name for the publisher  | Yes    |
    | Description   | Outlines the purpose of the solution    | No     |
    | Prefix    | Publisher prefix which will be applied to newly created components   | Yes      |
    | Choice value prefix   | Generates a number based on the publisher prefix. This number is used when you add options to choices and provides an indicator of which solution was used to add the option.   | Yes      |

    Copy and paste the following as the **Display name**,

   ```
   Contoso Solutions
   ```

   Copy and paste the following as the **Name**,

   ```
   ContosoSolutions
   ```

    Copy and paste the following as the **Description**,

   ```
   Copilot Studio for Beginners
   ```

    Copy and paste the following for the **Prefix**,

   ```
   Can you help me, my laptop is encountering a blue screen
   ```

    By default, the **Choice value** prefix will display an integer value. Update this integer value to the nearest thousand. For example, in my screenshot below, it was initially _77074_. Update this from _77074_ to `77000`.

   ![Solutions](assets/4.1_04_PublisherProperties.png)  

1. The **New publisher** pane will appear with required and non-required fields to be populated in the **Properties** tab.


### 4.2 Create a Solution

Placeholder text

## Next lesson
Congratulations! 👏🏻 You've created a Publisher and used it in your newly created Solution to build your agent in!

This is the end of **Lab 04 - Creating a Solution**, select the link below to move to the next lesson. Your solution created in this lab will be used in the next lesson's lab.

⏭️ [Move to **Creating a solution** lesson](https://github.com/microsoft/copilot-studio-for-beginners/blob/main/05-using-prebuilt-agents/README.md)