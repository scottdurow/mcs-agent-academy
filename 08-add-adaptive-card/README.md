# Enhance user interactions with Adaptive Cards

## Introduction

- [Lab 08 - Add apative cards and enhance topic capabilities](/08-add-adaptive-card/README.md#-lab-08---add-adaptive-cards-and-enhance-topic-capabilities)
    - [8.1 Add an adaptive card to display available devices](/08-add-adaptive-card/README.md/#81-add-an-adaptive-card-to-display-available-devices)
    - [8.2 Add a condition node to enable users to request a device](/08-add-adaptive-card/README.md/#82-add-a-condition-node-to-enable-users-to-request-a-device)
    - [8.3 Create a new topic with an adaptive card for user to submit their request](/08-add-adaptive-card/README.md/#83-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request)
    - [8.4 Update _Available devices_ topic to redirect to the newly created topic](/08-add-adaptive-card/README.md/#84-update-available-devices-topic-to-redirect-to-the-newly-created-topic)

## 🧪 Lab 08 - Add adaptive cards and enhance topic capabilities

We're now going to learn how to enhance our topic with adaptive cards and using advanced functionality of topics and nodes. 

- [8.1 Add an adaptive card to display available devices](/08-add-adaptive-card/README.md/#81-add-an-adaptive-card-to-display-available-devices)
- [8.2 Add a condition node to enable users to request a device](/08-add-adaptive-card/README.md/#82-add-a-condition-node-to-enable-users-to-request-a-device)
- [8.3 Create a new topic with an adaptive card for user to submit their request](/08-add-adaptive-card/README.md/#83-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request)
- [8.4 Update _Available devices_ topic to redirect to the newly created topic](/08-add-adaptive-card/README.md/#84-update-available-devices-topic-to-redirect-to-the-newly-created-topic)

### ✨ Use case

**As an** employee

**I want to** request a device

**So that I** can request a device from the list of available devices

Let's begin!

### Prerequisites

1. **SharePoint list**

    We'll be using the **Devices** SharePoint list from [Lesson 00 - Course Setup - Step 3: Create new SharePoint site](/00-course-setup/README.md/#step-3-create-new-sharepoint-site). 
    
    If you have not set up the **Devices** SharePoint list, please head back to [Lesson 00 - Course Setup - Step 3: Create new SharePoint site](/00-course-setup/README.md/#step-3-create-new-sharepoint-site).

1. **Contoso Helpdesk Copilot**

    We're going to use the same agent created previously in [Lesson 06 - Create a custom agent using natural language with Copilot and grounding it with your data](/06-create-agent-from-conversation/README.md).

### 8.1 Add an adaptive card to display available devices

1. In the **Available devices** topic delete the **Send a message** node that contains the JSON response of the _Get items_ SharePoint connector action in the body of the message.

    ![Delete Send a message node](assets/8.1_01_DeleteSendMessageNode.png)

1. Select the **+ icon** and select **Send a message** node.

    ![Add Send a message node](assets/8.1_02_AddSendAMessageNode.png)

1. 

### 8.2 Add a condition node to enable users to request a device

_placeholder text_

### 8.3 Create a new topic with an adaptive card for user to submit their request

_placeholder text_

### 8.4 Update _Available devices_ topic to redirect to the newly created topic

_placeholder text_

## Next lesson
Congratulations! 👏🏻 You've learnt how to _placeholder text_ 🙌🏻

This is the end of **Lab 08 - _placeholder text_**, select the link below to move to the next lesson. We'll expand on the use case in this lab in the following lesson's lab.

⏭️ [Move to **_placeholder text_** lesson](/07-add-new-topic-with-trigger/README.md)


## 📚 Additional learning
🔗 [Link 1](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-system-topics?mc_id=power-170631-ebenitez)

🔗 [Link 2](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/topics-overview?WT.mc_id=power-170631-ebenitez)

🔗 [Link 3](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-triggers?WT.mc_id=power-170631-ebenitez)
