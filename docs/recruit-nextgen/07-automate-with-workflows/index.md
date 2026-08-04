---
hide: true
preview: true
prev:
  text: Add Tools
  link: /recruit-nextgen/06-add-tools
next:
  text: Publish your agent
  link: /recruit-nextgen/08-publish-your-agent
short-description: Automate a device request with a workflow and call it from your GitHub Copilot harness agent
difficulty: 1
codename: OPERATION AUTOMATION POWERHOUSE
time: 60
tags:
  - automation
  - triggers
products: [copilot-studio, power-automate, outlook, sharepoint]
industries:
  - it
created-date: 2026-06-28
last-edited-date: 2026-06-28

---

# 🚨 Mission 07: Automate with Workflows {#mission-07-automate-with-workflows}

<mission-meta />

> [!NOTE]
> This lab uses an agent and workflows powered by the **GitHub Copilot harness**.
> On this harness, workflows are standalone, reusable automations that an agent can call as a tool.
> In the current Copilot Studio UI, make sure the **New experience** toggle in the upper-right corner is **on**.

## 🎯 Mission Brief {#mission-brief}

Your agent can converse with users and provide information, but it needs a workflow to take action. In this mission, you'll build a device request workflow that your agent can call as a tool.

You'll configure trigger inputs, retrieve device details from SharePoint, send an email to a manager, and return the selected device model to the agent. You'll then connect the workflow to your **Contoso IT Concierge** agent, update its device request procedure skill, and test the experience from end to end.

## 🔎 Objectives {#objectives}

In this mission, you'll learn:

1. What **Workflows** are on the GitHub Copilot harness and how they differ from agent flows on the standard harness
1. How to configure workflow trigger inputs and response outputs
1. How to add and configure SharePoint and Outlook connector actions
1. How to pass values between workflow nodes by using dynamic content
1. How to publish a workflow, add it to an agent as a tool, and test it end to end

## 🤔 What are Workflows? {#what-are-workflows}

On the standard harness, **agent flows** can support topic-based, structured agent behavior. The GitHub Copilot harness instead uses standalone **workflows** for deterministic automation.

Instead, automations are first-class objects called **workflows**. A workflow is a standalone, reusable, step-by-step automation that lives in its own **Workflows** hub. You build it once on a visual canvas, publish it, and then any agent in your environment can call it as a **tool**.

Think of it this way:

- **Agents** are the smart decision-makers - they understand the user and decide _what_ to do.
- **Workflows** are the reliable executors - they do the same deterministic steps _every_ time.

Unlike the AI-driven agent, a workflow follows the **same path every time** for the same input, which makes it **reliable**, **predictable**, and **rule-based** - exactly what you want for actions like "look up a device and email a manager."

### Why build automations as workflows?

- **Reusable** - build once, attach to many agents. No more copy-pasting flows between topics.
- **Connected** - reach 1,400+ connectors (SharePoint, Outlook, ServiceNow, Salesforce…) or your own custom connector.
- **Tightly integrated** - an agent triggers the workflow as a tool during a conversation and reads its outputs back.
- **All-in-one** - design, test, publish, and monitor workflows in one place inside Copilot Studio. No separate Power Automate license is required, since billing is based on usage inside Copilot Studio.

### 🙋🏽 How is this different to Power Automate cloud flows? {#how-is-this-different-to-power-automate-cloud-flows}

| Use this                       | When you want to                                             |
| :----------------------------- | :----------------------------------------------------------- |
| **Workflows** (Copilot Studio) | Automate tasks an agent invokes during a conversation, use AI actions, and keep everything in Copilot Studio |
| **Power Automate cloud flows** | Automate across apps and services independently of an agent, and share/co-own across teams (requires a Power Automate license) |

## ⚙️ How workflows work {#how-workflows-work}

Every workflow has two ingredients:

1. **A trigger** - the event that starts the workflow. The new designer offers several trigger types:

   | Trigger type                         | Starts the workflow when…                                    |
   | :----------------------------------- | :----------------------------------------------------------- |
   | **Manual**                           | You run it on demand with a button click                     |
   | **Recurrence**                       | A schedule fires                                             |
   | **Connector**                        | An external service raises an event                          |
   | **When a HTTP request is received**  | An HTTP request arrives                                      |
   | **When an agent calls the workflow** | An agent invokes it as a tool - **this is the one we'll use** |

1. **Actions (nodes)** - the steps the workflow runs after the trigger. You add them from the **node palette** on the left of the canvas:

   | Node             | What it does                                                 |
   | :--------------- | :----------------------------------------------------------- |
   | **Agent**        | Hand work to an agent                                        |
   | **Classify**     | Categorize input with AI                                     |
   | **M365 Copilot** | Call Microsoft 365 Copilot                                   |
   | **Human review** | Add an approval / review step                                |
   | **Connector**    | Run an action from any of 1,400+ connectors (e.g., SharePoint, Outlook) |
   | **Function**     | Transform data with an expression                            |
   | **Variable**     | Store and reuse values                                       |
   | **If/Else**      | Branch on a condition                                        |
   | **Loop**         | Repeat over a collection                                     |
   | **Note**         | Document your workflow                                       |

### 🎨 The workflow designer

The designer is a **visual canvas**. You can zoom, fit-to-view, switch between horizontal/vertical layout, and tidy up nodes. A **Health Center** continuously checks for errors - you must resolve them before you can publish or test. Every save creates a **version** you can restore from **Version history**.

## 🔤 Expressions and functions {#expressions-and-functions}

Many parameters can be set to a static value, to **dynamic content** (an output from the trigger or an earlier action, inserted with the **lightning bolt ⚡** icon), or to an **expression / function** (inserted with the **fx** icon).

Expressions are small formulas that work with your data - much like Excel functions, but referencing workflow data instead of cells. Common ones:

- `concat()` - join text, e.g. `concat('Hello ', firstName)`
- `if()` - `if(condition, valueIfTrue, valueIfFalse)`
- `empty()` - checks whether a value is empty
- `coalesce()` - returns the first non-empty value
- `length()` - counts characters or items

For the full list, see the [functions reference guide](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez).

## ⭐ Best practices {#best-practices}

1. **Start simple and build gradually** - get a basic action working, then add steps.
1. **Rename your nodes** - e.g. rename the SharePoint _Get item_ action to _Get Device_ so the canvas is self-documenting.
1. **Fix errors before publishing** - use the **Health Center**; you can't publish with unresolved errors.
1. **Test thoroughly** - saving and publishing doesn't guarantee correct behavior.
1. **Use version history** - save often so you can roll back.
1. **Use dynamic content and expressions** - make parameters dynamic instead of hard-coding values.

## 🧪 Lab 07 - Build a device request workflow and call it from your agent {#lab-07-build-a-device-request-workflow-and-call-it-from-your-agent}

### ✨ Use case {#use-case}

**As a** manager of an employee

**I want to** receive device requests by email

**So that I** can review the device requested by the employee.

### Prerequisites

1. **SharePoint list** - the **EmployeeAssets** SharePoint list from [Mission 00 - Course Setup](../00-course-setup/index.md#step-5-create-new-sharepoint-site). If you haven't set it up, head back and create it.

1. **Contoso IT Concierge agent** - the agent created in [Mission 04 - Build an agent with the GitHub Copilot harness](../04-build-a-custom-agent/index.md#41-create-a-new-agent-with-ai-based-authoring).

### 7.1 Create a new workflow

On the GitHub Copilot harness, workflows are added to your agent as a **tool**.

1. In the left navigation, select **Workflows**, then select **New workflow**.

   ![Select new workflow](./assets/8.1_01_NewWorkflow.png)

   > [!TIP]
   > The Workflows hub lists every workflow in your environment along with its status (Draft / Published).

1. Next, the workflows designer loads. Let's take a moment to familiarize ourselves with the workflow designer.

   Left:
   - Workflow name and status
   - Panel containing available workflow nodes
   - Canvas controls for zooming in, zooming out, and adjusting the view

   Center:
   - At the top, you can switch between **Build**, **Activity**, and **Monitor**
   - Canvas showing the workflow's trigger and action nodes

   Right:
   - Controls for undo, redo, version history, feedback, saving, testing, reviewing issues, and publishing
   - Configuration panel for the selected node

   ![Workflow loads in the designer](./assets/8.1_02_WorkflowDesigner.png)

1. Now that you're familiar with the designer, rename the workflow.

   Copy and paste the following text.

   ```text
   Send device request email
   ```

   ![Rename workflow](./assets/8.1_03_RenameWorkflow.png)

1. In the **Start** trigger node, change the type from **Manual** to **When an agent calls the workflow**.

   The **Respond to the agent** node appears.

   > [!NOTE]
   > The **Respond to the agent** node acts as the return statement of an agent workflow. It sends workflow outputs back to the calling agent so the agent can continue the conversation or make decisions based on the result.

   ![Change trigger type](./assets/8.1_04_ChangeTriggerType.png)

1. Next, add three `text` inputs to the workflow trigger:

   - `sharepointItemId` - stores the SharePoint item ID mapped from the device the user selected and confirmed during the device request procedure.

   - `additionalComment` - stores the comment provided by the user during the device request procedure.

   - `requestorName` - stores the authenticated user's name, retrieved according to the device request procedure skill.

   Start with `sharepointItemId`.

   For the first input, clear the current input name and replace with the following text.

   ```text
   sharepointItemId
   ```

1. In the corresponding details field, copy and paste the following text.

   ```text
   The ID of the SharePoint list item to retrieve
   ```

1. Add a new text input. Copy and paste the following text as the input name.

   ```text
   additionalComment
   ```

1. In the corresponding details field, copy and paste the following text.

   ```text
   Additional comment from the requestor
   ```

1. Add a new text input. Copy and paste the following text as the input name.

   ```text
   requestorName
   ```

1. In the corresponding details field, copy and paste the following text.

   ```text
   Name of the requestor
   ```

   These inputs will be used as dynamic content in the workflow's action nodes and referenced in the `SKILL.md` file later in this lab.

   ![Trigger text inputs](./assets/8.1_05_AddTriggerInputs.png)

1. Next, add a step to the workflow. Select the **+** icon between the nodes.

   ![Add new step](./assets/8.1_06_AddAStep.png)

1. The **Add** dialog opens. It contains actions that perform tasks in the workflow, including actions from more than 1,400 connectors for Microsoft and third-party services.

   In the **search field**, enter the following.

   ```text
   Get item
   ```

   Select the **Get item** action from the **SharePoint** connector in the search results.

   ![Get item action](./assets/8.1_07_GetItem.png)

1. Configure the **Get item** action. In the action's name field, enter the following text.

   ```text
   Get Device
   ```

1. In the **Site Address** field, select the Contoso IT SharePoint site created in [Mission 00 - Course Setup](../00-course-setup/index.md#step-5-create-new-sharepoint-site).

1. In the **List Name** field, select the **EmployeeAssets** SharePoint list.

   ![Configure Get item action](./assets/8.1_08_ConfigureGetItemAction.png)

1. In the **Id** parameter field, we'll add dynamic content.

   > [!TIP] What is dynamic content
   > Dynamic content in workflows is data passed from previous triggers and actions. It lets you reuse values like email subjects, names, or IDs in later steps without writing code.

1. Add dynamic content by using one of the following options.

   - Option 1: Select the **lightning bolt** icon, then select a property from the dynamic content dialog.

   - Option 2: Enter a forward slash, `/`, then select a property from the list.

   Select the **sharepointItemId** property from the trigger. It appears in the **Id** parameter field.

1. Select **Show all** to view the advanced parameters. For **Limit Columns by View**, select **All Items** to limit the returned columns to those included in that SharePoint view.

   ![Update Limit Columns by View](./assets/8.1_11_UpdateLimitColumnsView.png)

1. Add another node. Select the **+** icon between the **Get Device** and **Respond to the agent** nodes.

   ![Add a step](./assets/8.1_12_AddAStep.png)

1. In the **search field**, enter the following.

   ```text
   send an email
   ```

   Select the **Send an email** action from the **Office 365 Outlook** connector.

   ![Select Send an email action](./assets/8.1_13_SendAnEmail.png)

1. In the action's name field, enter the following text.

   ```text
   Send an email to manager
   ```

   ![Rename action](./assets/8.1_14_RenameAction.png)

1. For **Connection**, select **Create new connection**, then follow the prompts in the dialog.

   ![Create a new connection](./assets/8.1_15_Connection.png)

1. Configure the action's input parameters.

   For **To**, select your own email address.

   > [!NOTE]
   > In a production workflow, you could use the requestor's manager or retrieve the manager from their Microsoft Entra ID profile. For the purpose of this lab, use your own email address.

   For **Subject**, enter the following text.

   ```text
   Request type: new device
   ```

   ![Configure input parameters](./assets/8.1_16_ConfigureSendAnEmailAction.png)

1. For **Body**, enter the following text.

    ```text
    Hi,

    New device requested from

    Manufacturer:
    Model:
    Link to item in SharePoint
    Additional comment:

    This is an automated email from Contoso IT Concierge agent
    ```

    ![Configure body input parameter](./assets/8.1_17_Body.png)

1. Next, add dynamic content from the trigger and **Get Device** action to the email body. Enter a space after `New device requested from`.

   Add the **requestorName** property from the trigger after the space.

   ![requestorName dynamic content](./assets/8.1_18_requestorName.png)

   The email body now references dynamic content from the trigger. Repeat this process for the remaining fields.

1. Place the cursor after `Manufacturer:` and enter a space.

   Add the **Value** property for the **Manufacturer** object property from the **Get item** SharePoint action after the space.

   ![Manufacturer value dynamic content](./assets/8.1_19_ManufacturerValue.png)

1. Place the cursor after `Model:` and enter a space.

   Add the **Model** property from the **Get item** SharePoint action after the space.

   ![Model dynamic content](./assets/8.1_20_Model.png)

1. Place the cursor after `Link to item in SharePoint` and enter a space.

   Add the **Link to item** property from the **Get item** SharePoint action after the space.

   ![Link to item dynamic content](./assets/8.1_21_LinkToItem.png)

1. Place the cursor after `Additional comment:` and enter a space.

   Add the **additionalComment** property from the **trigger** after the space.

   ![Additional comment dynamic content](./assets/8.1_22_additionalComment.png)

1. Highlight the text in the last sentence and select the **Italic** icon to italicize the sentence.

   ![Italicize last sentence](./assets/8.1_23_Italics.png)

1. The **Link to item** URL appears as plain text in the email. To make it a clickable hyperlink, switch the **Body** field to the HTML editor and add HTML anchor tags.

   Select the **ellipsis** icon in the editor and select the **HTML** icon.

   ![Toggle to HTML editor view](./assets/8.1_24_ToggleHTMLSource.png)

   > [!NOTE]
   > You can optionally skip these steps and display the link as plain text. The URL will remain visible in the email but won't be clickable.

1. Highlight the **Link to item** dynamic content and cut it by pressing `Ctrl + X` on Windows or `Command + X` on macOS.

   ![Cut dynamic content](./assets/8.1_25_CutDynamicContent.png)

1. Place the cursor before the **Link to item** text and add an HTML anchor tag.

   Copy and paste the following text.

   ```text
   <a href="
   ```

   ![HTML tag](./assets/8.1_26_HTMLTag.png)

1. Place the cursor after the HTML anchor tag, `<a href="`, and paste the dynamic content.

   ![Paste dynamic content](./assets/8.1_27_PasteDynamicContent.png)

1. Place the cursor after the **Link to item** dynamic content.

   Copy and paste the following text.

   ```text
   ">
   ```

   ![HTML tag](./assets/8.1_28_HTMLTag.png)

1. Place the cursor after the **Link to item** text.

   Copy and paste the following text.

   ```text
   </a>
   ```

   This closes the HTML anchor tag, making the text a clickable hyperlink in the email.

   ![HTML tag](./assets/8.1_29_HTMLTag.png)

1. Select the **eye** icon to toggle the editor view.

   ![Toggle HTML view](./assets/8.1_30_ToggleHTMLSource.png)

1. Lastly, for the **Sensitivity** input parameter, select the **General\Anyone (unrestricted)** label from the drop-down list.

   > [!TIP] Understanding sensitivity labels in Outlook emails
   > A sensitivity label is a classification that helps protect and manage emails and files according to your organization's information protection policies. It helps users identify sensitive content and apply the appropriate level of protection without impacting collaboration or productivity.

   ![Sensitivity label](./assets/8.1_31_Sensitivity.png)

1. Select the **Respond to the agent** node. Clear the current text output name and enter the following text.

   Copy and paste the following text.

   ```text
   ModelValue
   ```

1. In the details field, add the **Model** property from the **Get Device** action.

   This value from the SharePoint dynamic content will be sent back to the agent to use in its summarized response to the user.

   ![Update text Output](./assets/8.1_32_TextOutput.png)

1. The workflow can now be saved and published. Select the **Save** icon on the upper-right.

   ![Save workflow](./assets/8.1_33_SaveWorkflow.png)

1. When the confirmation displays that the workflow has been saved, select **Publish**.

   ![Publish workflow](./assets/8.1_34_PublishWorkflow.png)

1. The workflow will now display a status of **Published**.

   ![Workflow published](./assets/8.1_35_WorkflowPublished.png)

You've created and published your first workflow. Next, add it to the agent as a tool.

### 7.2 Add the workflow to your agent

You can now add the workflow to your **Contoso IT Concierge** agent.

1. In the left navigation, select **Agents**, then open the **Contoso IT Concierge** agent.

   ![Open agent](./assets/8.2_01_OpenAgent.png)

1. In the **Build** view, in the **Tools** section, select the **+** icon.

   ![Add a tool](./assets/8.2_02_SelectAddATool.png)

1. The **Add a tool** dialog loads. Select the **Workflows** pill and select the **Send device request email** workflow.

   ![Select workflow](./assets/8.2_03_SelectWorkflow.png)

The workflow is now available to the agent as a tool.

### 7.3 Update device request procedure skill

With the workflow added, update the device request procedure skill so the agent knows when and how to call it.

1. Select the **device request procedure** skill.

   ![Select skill](./assets/8.3_01_ReplaceSkill.png)

1. Select the **ellipsis** icon and select **Replace**.

   Download the skill package using the button below.

   <download-files path="recruit-nextgen/07-automate-with-workflows/assets/device-guidance-v1-0-4" />

   Download `device-guidance-v1-0-4.zip`, extract it, then upload the `SKILL.md` file to the agent.

1. Review the updated skill instructions.

   The updated skill instructs the agent to:

   - confirm that the user wants to proceed after collecting any additional requirements

   ![Confirmation request instruction](./assets/8.3_02_ReviewSkillInstructions.png)

   - retrieve the authenticated user's details

   ![Retrieve user's details](./assets/8.3_03_ReviewSkillInstructions.png)

   - pass the device's SharePoint item ID, the additional requirements, and the user's name to the workflow

   ![pass request details](./assets/8.3_04_ReviewSkillInstructions.png)

   - confirm completion by referencing the device model returned by the workflow and end the session

   ![Confirmation message and end session](./assets/8.3_05_ReviewSkillInstructions.png)

The agent and workflow are now ready for end-to-end testing.

### 7.4 Test several scenarios

You're now going to run through the following test cases:

- Test Case 1: User selects a device and provides additional requirements
- Test Case 2: User selects a device and provides no additional requirements
- Test Case 3: User does not proceed with selecting a device

1. Select **Preview** and start a new chat.

1. Copy and paste the following text and submit it to the agent.

   ```text
   I need a new laptop
   ```

1. When the agent asks which device you want to request, enter the following text.

   Copy and paste the following text and submit it to the agent.

   ```text
   A
   ```

1. When the agent asks for additional requirements, enter the following text or provide your own requirement.

   ```text
   16GB of RAM
   ```

1. After the agent summarizes the request and asks for confirmation, enter the following text.

   Copy and paste the following text and submit it to the agent.

   ```text
   Yes please proceed
   ```

   ![Proceed with request](./assets/8.4_01_TestCase1.png)

1. The agent invokes the workflow. When it completes successfully, the agent confirms the request, includes the selected device model, explains that the manager will review it, and ends the session. This behavior follows the updated skill instructions.

   ![Test Case 1 summarized response](./assets/8.4_02_TestCase1SummarizedResponse.png)

1. Review the email sent to your address. Its subject, sensitivity label, and body should match the values configured earlier in the workflow’s **Send an email (V2)** action. The email body should also display the dynamic content values retrieved from the trigger and the **Get item** action.

   ![Test Case 1 email](./assets/8.4_03_TestCase1Email.png)

1. Select the **Link to Item** hyperlink. The SharePoint list item opens in a new browser tab.

   ![SharePoint List item](./assets/8.4_04_TestCase1Device.png)

1. In **Preview**, start a new chat to test a request with no additional requirements.

   Start a new chat. Copy and paste the following text and submit it to the agent.

   ```text
   I need a new laptop
   ```

   Next, copy and paste the following text for the device request and submit it to the agent.

   ```text
   B
   ```

   Copy and paste the following text and submit it to the agent for additional requirements.

   ```text
   None
   ```

   ![Test Case 2](./assets/8.4_05_TestCase2.png)

1. The agent invokes the workflow and summarizes your request, just as it did in the first test case.

   ![Test Case 2 summarized response](./assets/8.4_06_TestCase2SummarizedResponse.png)

1. Review the email. **Additional Comment** displays `No additional requirements provided`, as defined in the updated skill instructions.

   ![Review test case 2 email](./assets/8.4_07_TestCase2Email.png)

1. For the final test case, start a new chat in **Preview**. Enter the following text.

   ```text
   I need a new laptop
   ```

   Next, copy and paste the following text for the device request and submit it to the agent.

   ```text
   B
   ```

   This time, cancel the request by entering the following text.

   ```text
   Cancel request, do not proceed.
   ```

   The agent cancels the request and ends the session, as defined in the updated skill instructions.

   ![Test Case 3](./assets/8.4_08_TestCase3.png)

## ✅ Mission Complete {#mission-complete}

Mission accomplished, Recruit! You created and published a device request workflow that retrieves device details from SharePoint, sends an email with dynamic content, and returns the selected device model to your agent.

Well done, Agent Maker. You added the workflow to your agent as a tool, updated the device request procedure skill, and tested requests with additional requirements, without additional requirements, and with cancellation.

This is the end of **Lab 07 - Build a device request workflow and call it from your agent**. Select the link below to move to the next mission. You'll publish the agent you enhanced in this lab.

⏭️ [Move to **Publish your agent** mission](../08-publish-your-agent/index.md)

## 📚 Tactical Resources {#tactical-resources}

🔗 [Introducing agent flows: Transforming automation with AI-first workflows](https://www.microsoft.com/microsoft-copilot/blog/copilot-studio/introducing-agent-flows-transforming-automation-with-ai-first-workflows/)

🔗 [Workflows overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/workflows-experience/flows-overview)

🔗 [Add a workflow as a tool to an agent](https://learn.microsoft.com/en-us/microsoft-copilot-studio/workflows-experience/flow-agent)

🔗 [List of functions in the reference guide](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez)

<analytics-tag section="recruit" mission="07-automate-with-workflows" />
