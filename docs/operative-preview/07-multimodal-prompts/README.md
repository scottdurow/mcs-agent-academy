# 🚨 Mission 07: Extracting resume contents with multimodal prompts

--8<-- "disclaimer.md"

## 🕵️‍♂️ CODENAME: `DOCUMENT RESUME RECON`

> **⏱️ Operation Time Window:** `~45 minutes`

## 🎯 Mission Brief

Welcome, Operative. Your ability to analyze documents is about to level up. This mission will transform you into a multimodal AI expert, capable of extracting detailed information from resumes, invoices, and other documents with precision. You'll learn how Copilot Studio's multimodal prompts can process both text and images, understand different model capabilities, and format outputs for seamless integration with your business processes.

## 🔎 Objectives

In this mission, you'll learn:

1. What multimodal prompts are and when to use different AI models
1. How to configure prompts with image and document inputs
1. How to format prompt outputs as JSON for structured data extraction
1. Best practices for prompt engineering with document analysis
1. How to integrate multimodal prompts with Agent Flows

## 🧠 Understanding multimodal prompts

### What makes a prompt "multimodal"?

Traditional prompts work with text only. Multimodal prompts can process multiple types of input:

- **Text**: Written instructions and content
- **Images**: Photos, screenshots, charts, and diagrams (.PNG, .JPG, .JPEG)
- **Documents**: Invoices, Resumes, Forms etc. (.PDF)

This capability opens up powerful scenarios like analyzing resumes, processing invoices, or extracting data from forms.

### Why multimodal matters for business

Consider these common business challenges:

- **Resume screening**: Manually reading hundreds of resumes takes hours
- **Invoice processing**: Extracting vendor details, amounts, and dates from unknown document structures
- **Form analysis**: Converting paper forms into digital data

Multimodal prompts solve these by combining AI's language understanding with visual analysis capabilities.

### Common business scenarios

Here are some examples of how multimodal prompts can be applied:

| Scenario                | Task                                                                                                                                      | Example Output Fields                                                                                   |
|-------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| **Resume screening**    | Extract candidate name, email, phone, current title, years of experience, and key skills.                                                 | Candidate Name, Email Address, Phone Number, Current Job Title, Years of Experience, Key Skills         |
| **Invoice processing**  | Extract vendor information, invoice date, total amount, and line items from this invoice.                                                 | Vendor Name, Invoice Date, Total Amount, Invoice Line Items                                             |
| **Form analysis**       | Analyze this application form and extract all filled fields.                                                                              | Field Name (e.g., Applicant Name), Entered Value (e.g., John Doe), ...                                  |
| **ID document verification** | Extract name, ID number, expiration date, and address from this identification document. Verify that all text is clearly readable and flag any unclear sections. | Full Name, Identification Number, Expiration Date, Address, Unclear Sections Flag                        |

## ⚙️ Model selection in AI Builder

AI Builder offers different models optimized for specific tasks. Understanding which model to use is crucial for success.

!!! note "Accurate as of September 2025"
    AI Builder models are updated regularly, so check the latest [AI Builder model settings documentation](https://learn.microsoft.com/en-us/ai-builder/prompt-modelsettings) for current model availability.

### Model comparison

All of the following models support vision and document processing

| Model | 💰Cost | ⚡Speed | ✅Best for |
|-------|------|-------|----------|
| **GPT-4.1 mini** | Basic (most cost-effective) | Fast | Standard document processing, summarization, budget-conscious projects |
| **GPT-4.1** | Standard | Moderate | Complex documents, advanced content creation, high accuracy needs |
| **o3** | Premium | Slow (reasons first) | Data analysis, critical thinking, sophisticated problem-solving |
| **GPT-5 chat** | Standard | Enhanced | Latest document understanding, highest response accuracy |
| **GPT-5 reasoning** | Premium | Slow (complex reasoning) | Most complex analysis, planning, advanced reasoning tasks |

### Temperature settings explained

Temperature controls how creative or predictable your AI responses are:

- **Temperature 0**: Most predictable, consistent results (best for data extraction)
- **Temperature 0.5**: Balanced creativity and consistency  
- **Temperature 1**: Maximum creativity (best for content generation)

For document analysis, use **temperature 0** to ensure consistent data extraction.

## 📊 Output formats: Text vs JSON

Choosing the right output format is critical for downstream processing.

### When to use text output

Text output works well for:

- Human-readable summaries
- Simple classifications
- Content that doesn't need structured processing

### When to use JSON output

JSON output is essential for:

- Structured data extraction
- Integration with databases or systems
- Power Automate flow processing
- Consistent field mapping

### JSON best practices

1. **Define clear field names**: Use descriptive, consistent naming
1. **Provide examples**: Include sample output and values for each field
1. **Specify data types**: Include examples for dates, numbers, and text
1. **Handle missing data**: Plan for null or empty values
1. **Validate structure**: Test with various document types

### Document quality considerations

- **Resolution**: Ensure images are clear and readable
- **Orientation**: Rotate documents to proper orientation before processing
- **Format support**: Test with your specific document types (PDF, JPG, PNG)
- **Size limits**: Be aware of file size restrictions in your environment

### Performance optimization

- **Choose appropriate models**: Upgrade models only when needed
- **Optimize prompts**: Often, shorter, clearer instructions perform better
- **Error handling**: Plan for documents that can't be processed
- **Monitor costs**: Different models consume different amounts of AI Builder credits

## 🧪Lab 7: Building a resume extraction system

In this lab, you'll create a multimodal prompt that extracts key information from candidate resumes and formats it as JSON so that it can be used to update Dataverse.

### Prerequisites

Before starting, ensure you have:

- Your **Hiring Agent** from previous missions open in Copilot Studio
- Access to the Dataverse environment with candidate storage tables
- The Application Intake Agent configured from Mission 02
- Download the sample resume documents from [test Resumes](https://download-directory.github.io/?url=https://github.com/microsoft/agent-academy/tree/main/operative/sample-data/resumes&filename=operative_sampledata)

!!! note "Mission 7 starter solution"
    This mission builds on the multi-agent hiring system from the previous missions. Alternatively, you can import the Mission 08 starter solution which includes the required components.

### 1. Create a multimodal prompt

1. Sign in to [Copilot Studio](https://copilotstudio.preview.microsoft.com) , and select **Tools** from the left navigation.

1. Select **+ New tool**, and then select **Prompt**.

1. Select the **title** (that will look similar to *Custom prompt 09/04/2025, 04:59:11 PM*), and rename it to be `Summarize Resume`.

1. In the Instructions, add the following:

    ```text
    You are tasked with extracting key candidate information from a resume and cover letter to facilitate matching with open job roles and creating a summary for application review.
    
    Instructions:
    1. Extract Candidate Details:
        - Identify and extract the candidate’s full name.
        - Extract contact information, specifically the email address.
    2. Create Candidate Summary:
        - Summarize the candidate’s profile as multiline text (max 2000 characters) with the following sections:
            - Candidate name
            - Role(s) applied for if present
            - Contact and location
            - One-paragraph summary
            - Experience snapshot (last 2–3 roles with outcomes)
            - Key projects (1–3 with metrics)
            - Education and certifications
            - Top skills (Top 10)
            - Availability and work authorization
    
    Guidelines:
    - Extract information only from the provided resume and cover letter documents.
    - Ensure accuracy in identifying all details such as contact details and skills.
    - The summary should be concise but informative, suitable for quick application review.
    
    Resume: /document
    CoverLetter: /text
    ```

    !!! tip "Use Copilot!"
        You can use the "Get started with Copilot" to generate your prompt using a free text description. Experiment with this by asking Copilot to create you a prompt to summarize a Resume!

1. Configure the parameters as follows:

    | Parameter | Type | Name | Sample Data |
    |-----------|------|------|-------------|
    | Resume | Image or document | Resume | Upload sample resume from test-data folder |
    | CoverLetter | Text | CoverLetter | Here is a Resume! |

1. Select **Test**, and observe the Model response. You will see a free text output that matches your prompt.

### 2. Configure JSON output

1. Because we want to use this information in a structured way to update Dataverse, add the following to the end of the prompt

    ```text
    Output Format:
    Provide the output in valid JSON format with the following structure:
    
    {
        "CandidateName": "string",
        "Email": "string",
        "Summary": "string max 2000 characters",
        "Skills":[ 
        {"SkillName":"string", "SkillLevel":"5 highest, 1 lowest"}
        ],
    "Experience":[
        {"Employer":"string", "StartYear":"number","EndYear":"number (leave blank if present)"}
        ]
    }
    ```

1. Next, change **Output** to be **JSON**

1. Select **Test** again to see the output formatted as a JSON document.

1. Experiment with selecting different models to see the different outputs, and then switch back to the default model.

1. Select

1. Select **Save**, to create the prompt.

1. In the **Configure for use in Agent** dialog, select **Cancel**. This is because we are going to use our prompt in an Agent Flow rather than adding it directly as a tool.

    !!! tip "Prompts as tools"
        You can add a prompt directly to your agent as you learned in recruit - this gives it very specific instructions on performing tasks, however we need to take a more sophisticated approach to perform analysis on Resumes that are stored in Dataverse.

### 3. Add prompt to an Agent Flow

1. Navigate to your **Hiring Agent** inside Copilot Studio

1. Select the **Agents** tab, and select the child **Application Intake Agent**

1. Inside the **Tools** panel, Select **+ Add** -> **+ New tool** -> **Agent flow**

1. Select the When an agent calls the flow node, use **+ Add an input** to add the following parameter:

    | Type | Name | Description |
    |------|------|-------------|
    | Text | ResumeNumber | Be sure to use [ResumeNumber]. This must always start with the letter R |

1. Select the **+** Insert action icon below the first node, search for **Dataverse**, select **See more**, and then locate the **List rows** action

1. Select the title to rename the node as `Get Resume Record`, and then set the following parameters:

    | Property | How to Set | Value |
    |----------|------------|-------|
    | **Table name** | Select | Resumes |
    | **Filter rows** | Dynamic data (thunderbolt icon) | `ppa_resumenumber eq 'ResumeNumber'` Replace **ResumeNumber** with **When an agent calls the flow** → **ResumeNumber** |
    | **Row count** | Enter | 1 |

1. Select the **+** Insert action icon below the Get Resume Record node, search for **Dataverse**, select **See more**, and then locate the **Download a file or an image** action.
    NOTE: Don't select the action that ends in "from selected environment"

1. Rename the action `Download Resume`, and then set the following parameters:

    | Property | How to Set | Value |
    |----------|------------|-------|
    | **Table name** | Select | Resumes |
    | **Row ID** | Expression (fx icon) | `first(body('Get_Resume_Record')?['value'])?['ppa_resumeid']` |
    | **Column name** | Select | Resume PDF |

1. Now, select the **+** Insert action icon below Download Resume, under **AI capabilities**, select **Run a prompt**,

1. Rename the action to `Summarize Resume` and set the following parameters:

    | Property | How to Set | Value |
    |----------|------------|-------|
    | **Prompt** | Select | Summarize Resume |
    | **CoverLetter** | Expression (fx icon) | `first(body('Get_Resume_Record')?['value'])?['ppa_coverletter']` |
    | **Resume** | Dynamic data (thunderbolt icon) | Download Resume → File or image content |

    !!! tip "Prompt Parameters"
        Notice how the parameters you are filling out are the same ones that you configured as input parameters when you created your prompt.

### 4. Create candidate record

Next we need to take the information that the Prompt gave us and create a new candidate record if it doesn't already exist.

1. Select the **+** Insert action icon below the Summarize Resume node, search for **Dataverse**, select **See more**, and then locate the **List rows** action

1. Select the title to rename the node as `Get Existing Candidate`, and then set the following parameters:

    | Property | How to Set | Value |
    |----------|------------|-------|
    | **Table name** | Select | Candidates |
    | **Filter rows** | Dynamic data (thunderbolt icon) | Summarize Resume → Email |
    | **Row count** | Enter | 1 |

1. Select the **+** Insert action icon below the Get Existing Candidate node, search for **Control**, select **See more**, and then locate the **Condition** action

1. In the condition properties, set the following condition:

    | Condition | Operator | Value |
    |-----------|----------|-------|
    | Expression (fx icon): `length(outputs('Get_Existing_Candidate')?['body/value'])` | is equal to | 0 |

1. Select the **+** Insert action icon in the True branch, search for **Dataverse**, select **See more**, and then locate the **Add a new row** action

1. Select the title to rename the node as `Add a New Candidate`, and then set the following parameters:

    | Property | How to Set | Value |
    |----------|------------|-------|
    | **Table name** | Select | Candidates |
    | **Candidate Name** | Dynamic data (thunderbolt icon) | Summarize Resume → CandidateName |
    | **Email** | Dynamic data (thunderbolt icon) | Summarize Resume → Email |

### 5. Update the Resume, and respond to the agent

Now that we have structured information about the Resume and Candidate, we return parameters to the agent so that it can make a decision on what to do next. This is one of the most important distinctions between generative AI orchestration and deterministic agent flows.

1. Select the **+** Insert action icon below the condition, search for **Dataverse**, select **See more**, and then locate the **Update a row** action

1. Select the title to rename the node as `Update Resume`, select **Show all**, and then set the following parameters:

    | Property | How to Set | Value |
    |----------|------------|-------|
    | **Table name** | Select | Resume |
    | **Row ID** | Expression (fx icon) | `first(body('Get_Resume_Record')?['value'])?['ppa_resumeid']` |
    | **Summary** | Dynamic data (thunderbolt icon) | Summarize Resume → Text |
    | **Candidate (Candidates)** | Expression (fx icon) | `if(equals(length(outputs('Get_Existing_Candidate')?['body/value']), 1), first(outputs('Get_Existing_Candidate')?['body/value'])?['ppa_candidateid'], outputs('Add_a_New_Candidate')?['body/ppa_candidateid'])` |

1. Select **Save draft** on the top right

1. Select the **Overview** tab, Select **Edit** on the **Details** panel

    1. **Flow name**:`Summarize Resume`
    1. **Description**:

        ```text
        Summarize an existing Resume stored in Dataverse using a [ResumeNumber] as input, return the [CandidateNumber], and resume summary JSON
        ```

1. Select the Respond to the agent node and then use **+ Add an output** to configure:

    | Type | Name | How to Set | Value | Description |
    |------|------|------------|-------|-------------|
    | Text | CandidateName | Dynamic data (thunderbolt icon) | Summarize Resume → See more → CandidateName | The [CandidateName] given on the Resume |
    | Text | CandidateEmail | Dynamic data (thunderbolt icon) | Summarize Resume → See more → Email | The [CandidateEmail] given on the Resume |
    | Text | CandidateNumber | Expression (fx icon) | `if(equals(length(outputs('Get_Existing_Candidate')?['body/value']), 1), first(outputs('Get_Existing_Candidate')?['body/value'])['ppa_candidatenumber'], outputs('Add_a_New_Candidate')?['body/ppa_candidatenumber'])` | The [CandidateNumber] of the new or existing candidate |
    | Text | ResumeSummary | Dynamic data (thunderbolt icon) | Summarize Resume → See more → body/responsev2/predictionOutput/structuredOutput | The resume summary and details in JSON form |

1. Select the **Designer** tab again, and select **Publish**.

### 6. Instruct the agent to summarize resumes

1. Open your **Hiring Agent** inside Copilot Studio

1. Select the Agents tab, and open the **Application Intake Agent**

1. Select the **Tools** panel, and Select **+ Add a tool** - > **Flow** -> **Summarize Resume**

1. Select **Add and configure**

1. Configure the tool settings as follows:

    | Setting | Value |
    |---------|-------|
    | **Description** | Summarize an existing Resume stored in Dataverse using a [ResumeNumber] as input, return the [CandidateNumber], and resume summary JSON |
    | **When this tool may be used** | Only when referenced by topics or agents |

1. Select **Save**

1. Navigate to the Application Intake Child agent, and add the following to the end of the instructions:

    ```text
    2. Post-Upload Processing  
       - After uploading, be sure to also output the [ResumeNumber] in all messages
       - Pass [ResumeNumber] to /Summarize Resume  - Be sure to use the correct value that will start with the letter R.
       - Be sure to also output the [CandidateNumber] in all messages
       - Use the [ResumeSummary] to output a summary of the processed Resume and candidate
    ```

    Replace `/Summarize Resume` by inserting a reference to the **Summarize Resume agent flow** by typing forward slash (`/)` or selecting `/Summarize` to insert the reference.

### 7. Test your agent

1. Now you are ready to test the resume summarization by selecting Test and in the test panel, typing:

    ```text
    Here is a candidate Resume
    ```

1. Upload a sample resume from [test Resumes.](https://download-directory.github.io/?url=https://github.com/microsoft/agent-academy/tree/main/operative/sample-data/resumes&filename=operative_sampledata)

1. Select the open activity map icon, and notice how the Resume upload tool is first run and then the Summarize Resume tool is then automatically run using the agent instructions.

1. The response should then provide you with a Candidate Number and summary of the resume in a structured response. In the next mission we will be using this information to perform further processing!

### Production readiness notes

To make this agent flow production ready you would also need to consider the following:

1. Error handling - if the Resume Number was not found, or the prompt failed to parse the document, error handling should be added to return a clear error to the agent.
1. Updating existing Candidates - the candidate is found using the email, then the name could be updated to match that on the resume
1. Splitting the Resume summarization and the Candidate creation - This functionality could be split into small agent flows to make them easier to maintain, and then the agent given instructions to use them in turn.

## 🎉 Mission Complete

Excellent work, Operative! **Document Resume Recon** is now complete. You've successfully mastered multimodal prompts and can now extract structured data from any document with precision.

Here's what you've accomplished in this mission:

**✅ Multimodal prompt mastery**  
You now understand what multimodal prompts are and when to use different AI models for optimal results.

**✅ Document processing expertise**  
You've learned to configure prompts with image and document inputs, and format outputs as JSON for structured data extraction.

**✅ Resume extraction system**  
You've built a complete resume extraction system that processes candidate documents and integrates with your hiring workflow.

**✅ Best practices implementation**  
You've applied best practices for prompt engineering with document analysis and integrated multimodal prompts with Agent Flows.

**✅ Foundation for advanced processing**  
Your enhanced document analysis capabilities are now ready for the advanced data grounding features we'll add in upcoming missions.

🚀 **Next up:** In Mission 08, you'll discover how to enhance your prompts with real-time data from Dataverse, creating dynamic AI solutions that adapt to changing business requirements.

⏩ [Move to Mission 08: Enhanced prompts with Dataverse grounding](../08-dataverse-grounding/README.md)

## 📚 Tactical Resources

📖 [Create a prompt](https://learn.microsoft.com/ai-builder/create-a-custom-prompt?WT.mc_id=power-power-182762-scottdurow)

📖 [Add text, image, or document input to your prompt](https://learn.microsoft.com/ai-builder/add-inputs-prompt?WT.mc_id=power-182762-scottdurow)

📖 [Process responses with JSON output](https://learn.microsoft.com/ai-builder/process-responses-json-output?WT.mc_id=power-182762-scottdurow)

📖 [Model selection and temperature settings](https://learn.microsoft.com/ai-builder/prompt-modelsettings?WT.mc_id=power-182762-scottdurow)

📖 [Use your prompt in Power Automate](https://learn.microsoft.com/ai-builder/use-a-custom-prompt-in-flow?WT.mc_id=power-182762-scottdurow)

📺 [AI Builder: JSON outputs in prompt builder](https://www.youtube.com/watch?v=F0fGnWrRY_I)
