## 🧰 Mission 05: Using a Pre-Built Agent  
**Codename: Operation Safe Travels**

## 🎯 Mission Brief:
Welcome to your next mission in the Copilot Studio Agent Academy. You're about to explore the world of **pre-built agents**—intelligent, purpose-driven agents created by Microsoft to accelerate your deployment and reduce time to value.

Rather than building from scratch, pre-built agents (also called **agent templates**) give you a head start by providing ready-to-use scenarios that you can customize and deploy in minutes.

In this mission, you’ll deploy the **Safe Travels** agent—an agent that helps your users prepare for business travel, understand company policies, and streamline planning.

---

## 🧭 Objectives

Your goals for this mission are:

1. Understand what pre-built agents are and why they matter  
2. Deploy the **Safe Travels** agent template  
3. Customize the agent’s responses and content  
4. Test and publish the agent  

---

## 🧠 What Are Pre-Built Agents?

Pre-built agents are turnkey AI agents created by Microsoft that:

- Address common business needs (like travel, HR, IT support)
- Include fully functioning topics, trigger phrases, instructions and sample knowledge.
- Can be edited, extended, and grounded with your own data

These agents are perfect for getting started quickly or learning how agents are structured.

---

## 🛠️ Step-by-Step Instructions

### Step 1: Launch Copilot Studio

1. Navigate to [https://copilotstudio.microsoft.com](https://copilotstudio.microsoft.com)
2. Sign in with your Microsoft 365 work or school account

> ⚠️ You must be in a tenant where Copilot Studio is enabled. If you don’t see Copilot Studio, revisit [Mission 00](../00-course-setup/README.md) to complete your setup.

---

### Step 2: Choose the Safe Travels Agent Template

1. From the Copilot Studio homepage, click **+ Create**
![Create an agent](./images/create.png)
2. Scroll down to the **Start with an agent template** section
3. Find and select **Safe Travels**
![Choose safe travels template](./images/choose_template.png)
4. Notice that the template comes pre-loaded with a description, instructions and knowledge.
![Review the template](./images/template-setup.png)
4. Click **Create**
![Create an agent](./images/create-agent-setup.png)

This will create a new agent in your environment based on the Safe Travels configuration.

---

### Step 3: Customize the Agent

Now that the agent is created, let’s tailor it to your organization:

1. Select **Enabled generative AI** to turn on the generatve AI feature so that it can use the instructions provided in the template.
![Enable Generative Answers](./images/gen-answers.png)
2. Now we'll equip the agent with an additional knowledge source so it can answer questions about Europe travel. To do this, scroll down to the **knowledge** section and select **Add knowledge**
![Add Knowledge](./images/knowledge.png)
3. Select **Public websites**
![Add a public website](./images/public-website.png)
4. In the text input, paste **https://european-union.europa.eu/** and select **Add**
![Add the website](./images/paste-add.png)
5. Select **Add to agent**
![Add to Agent](./images/add-to-agent.png)

---

### Step 4: Test and Publish

1. Click **Test** in the top-right to launch the test window  
2. Try phrases like:
   - “Do I need a visa to travel from the US to Amsterdam?”
   - “How long does it take to get a US Passport?”
   - “Where is the closest US embassy in Valencia, Spain?”
3. Confirm the agent responds with accurate and helpful information and observe the Activity Map to see where it retrieved the information. 
![Add to Agent](./images/response-passport.png)
4. When ready, click **Publish**
![Add to Agent](./images/publish-1.png)
5. Select **Publish** again in the dialog box
![Add to Agent](./images/publish-2.png)
6. Optionally, add the agent to Microsoft Teams using the built-in **Channels** feature

---

## ✅ Mission Complete

You've now successfully:

- Deployed a Microsoft pre-built agent  
- Customized the agent
- Tested and published your own version of the **Safe Travels** agent template

> 🧳 Bonus Objective: Try grounding the Safe Travels agent with a SharePoint site or FAQ file to make it more relevant to your company’s travel policies.

Your next mission will focus on 
[creating a custom agent from scratch](/06-create-agent-from-conversation/README.md).

![mcs-agent-academy-recruit-05](https://m365-visitor-stats.azurewebsites.net/?resource=https://github.com/microsoft/mcs-agent-academy-recruit/tree/main/05-using-prebuilt-agents)
