# 🚨 Mission 01: Get started with the Hiring Agent

--8<-- "disclaimer.md"

## 🕵️‍♂️ CODENAME: OPERATION TALENT SCOUT

> **⏱️ Operation Time Window:** `~45 minutes`

## 🎯 Mission Brief

In this mission, you'll get started with AI-powered recruitment by importing a pre-built solution that contains the foundational data structure for a hiring management system. You'll then create a basic Hiring Agent that serves as the starting point for the comprehensive hiring automation scenario you'll build throughout the Agent Academy Operative program. This initial agent will establish the foundation that you'll enhance with advanced capabilities in subsequent missions.

## 🔎 Objectives

By completing this mission, you will:

- **Scenario Understanding**: Gain comprehensive knowledge of hiring automation challenges and solutions
- **Solution Deployment**: Successfully import and configure the fundamentals of a hiring management system
- **Agent Creation**: Build a hiring agent that is the start of the scenario you're going to build as an Agent Academy Operative

## 🔍 Prerequisites

Before embarking on this mission, ensure you have:

- Copilot Studio license
- Access to a Microsoft Power Platform environment
- Administrative permissions to create solutions and agents

## 🏢 Understanding the Hiring Automation Scenario

This scenario demonstrates how a company can use Microsoft Copilot Studio to improve and automate its hiring process. It introduces a system of agents that work together to handle tasks like reviewing resumes, recommending job roles, preparing interview materials, and evaluating candidates.

### Business Value

The solution helps HR teams save time and make better decisions by:

- Automatically processing resumes received via email.
- Suggesting suitable job roles based on candidate profiles.
- Creating job applications and interview guides tailored to each candidate.
- Ensuring fair and compliant hiring practices through built-in safety and moderation features.
- Collecting feedback to improve the solution.

### How It Works

- A central "Hiring Agent" coordinates the process and stores data in Microsoft Dataverse.
- An "Application Intake Agent" reads resumes and creates job applications.
- An "Interview Prep Agent" generates interview questions and documents based on the candidate's background.
- The system can be published to a demo website, allowing stakeholders to interact with it.

This scenario is ideal for organizations looking to modernize their recruitment workflows using AI-powered automation, while maintaining transparency, fairness, and efficiency.

## 🧪 Lab: Setup the Hiring Agent

In this hands-on lab, you'll establish the foundation for your hiring automation system. You'll begin by importing a pre-configured solution that contains all the necessary Dataverse tables and data structure for managing candidates, job positions, and hiring workflows. Next, you'll populate these tables with sample data that will support your learning throughout this module and provide realistic scenarios for testing. Finally, you'll create the Hiring Agent in Copilot Studio, setting up the basic conversational interface that will serve as the cornerstone for all the other features you'll add in future missions.

### 🧪 Lab 1.1: Import solution

1. Go to **[Copilot Studio](https://copilotstudio.microsoft.com)**
1. Select the **...** in the left navigation and select **Solutions**
1. Select the **Import Solution** button on the top
1. **[Download](https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/operative-preview/01-get-started/assets/Operative01_1_0_0_0.zip)** the prepared solution

    !!! info "Solution"  
        This solution contains multiple tables you need later on in the course:
        <!-- markdownlint-disable-next-line MD009 -->
        
        - **Candidate** - Candidate information
        - **Evaluation Criteria** - Evaluation criteria for the role
        - **Job Application** - Job applications
        - **Job Role** - Job roles
        - **Resume** - Resumes of the candidates

1. Select **Browse** and select the downloaded solution from the previous step
1. Select **Next**
1. Select **Import**

This will import the solution, it might take a while, but you will see a green notification bar when it's done!

### 🧪 Lab 1.2: Generate sample data

In this

### 🧪 Lab 1.3: Create the hiring agent

## 🎉 Mission Complete

Mission 01 is completed! You now have mastered the following skills:

- **Scenario Understanding**: Comprehensive knowledge of hiring automation challenges and solutions
- **Solution Deployment**: Successfully imported and configured the fundamentals of a hiring management system
- **Agent Creation**: Built an hiring agent that is the start of the scenario you're going to build as an Agent Academy Operative

Next up is Mission 02: Make your agent multi-agent ready with connected agents.

## 📚 Tactical Resources

- [Microsoft Copilot Studio Documentation](https://docs.microsoft.com/copilot-studio)
- [Power Platform Dataverse Best Practices](https://docs.microsoft.com/power-platform/dataverse)
