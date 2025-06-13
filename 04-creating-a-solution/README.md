# Creating a Solution for your agent

## Introduction

Placeholder text

## 🕵🏻‍♀️ Solution? What's that?
In Microsoft Power Platform, solutions are like containers or packages that hold all the parts of your apps or agents - these could be tables, forms, flows, and custom logic. Solutions are essential for Application Lifecycle Management (ALM), they enable you to manage your app and agents from idea to development, testing, deployment, and updates.

There are two types of solutions:

- **Unmanaged solutions** - used during development. You can freely edit and change things.
- **Managed solutions** – used when you're ready to deploy your app to testing or production. These are locked down to prevent accidental changes.


## 🤔 Why _should_ I use a solution for my agent?
Think of Solutions as a toolbox. When you need to fix or build something (an agent) in a different location (environment), you gather all the necessary tools (components) and put them in your toolbox (Solution). You can then carry this toolbox to the new location (environment) and use the tools (components) to complete your work, or add new tools (components) to customize your agent or project you're building.

💬 Elaiza, your friendly cloud advocate popping in here 🙋🏻‍♀️ to share some words: 

> We have a saying in New Zealand, "Be a tidy Kiwi!" which is a call to action for New Zealanders 🥝 to take responsibility for their environment by disposing of litter properly and keeping public spaces clean. We can use the same context for agents by keeping everything related to your agent organized and portable, and it'll help you maintain a tidy environment.

It's good practice to create an agent in a dedicated solution in your source [developer] environment. Here's why solutions are valuable:

🧩 **Organized development**
- You're keeping your agent separate from the Default solution which contains everything in the environment. All your agent components are in one place!
- Everything you need to for your agent is in a solution making it easier to export and import to a target environment 👉🏻 this is a healthy habit of ALM

🧩 **Safe deployment**
- You can export your app as a managed solution and deploy it to other environments (like testing or production) without risking accidental edits.

🧩 **Version control**
- You can create patches (small updates) or upgrades (bigger changes) to your app.
- Helps you roll out changes in a controlled way.

🧩 **Dependency Management**
Solutions track which parts depend on others. This prevents you from breaking things when you make changes.

🧩 **Team Collaboration**
- Developers and makers can work together using unmanaged solutions in development, then hand off a managed solution for deployment.

## 🧭 Power Platform solution lifecycle

1. Create Solution in Development Start by creating a new solution in your development environment.
Add Components Add apps, flows, tables, and other elements to your solution.

2. Export as Managed Solution Package your solution for deployment by exporting it as a managed solution.

3. Import to Test Environment Test your solution in a separate environment to ensure everything works as expected.

4. Import to Production Environment Deploy the tested solution to your live production environment.
Apply Updates or Patches Make improvements or fixes using patches or upgrades and repeat the cycle.

### Example

Imagine you're building an IT helpdesk agent to help employees with issues such as device problems, network troubleshooting, printer setup and more.

- You start in a development environment using an unmanaged solution.
- Once it's ready, you export it as a managed solution and import it into a target environment such as a test or user-acceptance-test (UAT) environment.
- After testing, you move it to production - all without touching the original development version.

## Next lesson
Congratulations! 👏🏻 You've created a Publisher and used it in your newly created Solution to build your agent in!

This is the end of **Lab 04 - Creating a Solution**, select the link below to move to the next lesson.

⏭️ [Move to **Creating a solution** lesson](https://github.com/microsoft/copilot-studio-for-beginners/blob/main/05-using-prebuilt-agents/README.md)