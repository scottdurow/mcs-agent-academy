# Creating a Solution for your agent

## Introduction

- Solution? What's that?
- Why should I use a solution for my agent?
- Power Platform solution lifecycle
- Lab 04: Create a new Solution
    - Prerequisites
    - 4.1 Create a Solution publisher
    - 4.2 Create a Solution

## 🕵🏻‍♀️ Solution? What's that?
In Microsoft Power Platform, solutions are like containers or packages that hold all the parts of your apps or agents - these could be tables, forms, flows, and custom logic. Solutions are essential for Application Lifecycle Management (ALM), they enable you to manage your app and agents from idea to development, testing, deployment, and updates.

   ![Solutions](assets/4.0_01_Solutions.png)    

There are two types of solutions:

- **Unmanaged solutions** - used during development. You can freely edit and customize as needed.
- **Managed solutions** - used when you're ready to deploy your app to testing or production. These are locked down to prevent accidental changes.


## 🤔 Why _should_ I use a solution for my agent?
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

## 🧭 Power Platform solution lifecycle

**1. Create Solution in Development** - start by creating a new solution in your development environment.

**2. Add Components** - add apps, flows, tables, and other elements to your solution.

**3. Export as Managed Solution** - package your solution for deployment by exporting it as a managed solution.

**4. Import to Test Environment** - test your solution in a separate environment to ensure everything works as expected.

**5. Import to Production Environment** - deploy the tested solution to your live production environment.

**6. Apply Updates or Patches** - make improvements or fixes using patches or upgrades and repeat the cycle.

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

### Prerequisite
- Makers must have permissions to create in and have access to a Copilot Studio environment.

### 4.1 Create a Solution publisher

Placeholder text

### 4.2 Create a Solution

Placeholder text

## Next lesson
Congratulations! 👏🏻 You've created a Publisher and used it in your newly created Solution to build your agent in!

This is the end of **Lab 04 - Creating a Solution**, select the link below to move to the next lesson. Your solution created in this lab will be used in the next lesson's lab.

⏭️ [Move to **Creating a solution** lesson](https://github.com/microsoft/copilot-studio-for-beginners/blob/main/05-using-prebuilt-agents/README.md)