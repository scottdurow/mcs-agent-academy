# Course Setup: Copilot Studio Development Environment

We are very excited for you to start this course and see what you get inspired to build with Copilot Studio!

To help you get started, this page outlines the technical requirements and steps needed to get an environment up and running so you can start building. 

Copilot Studio is part of the Microsoft 365 ecosystem, so you’ll need a Microsoft 365 account (work or school) to get started. These instructions cover:

1. Signing up for a Microsoft 365 account (Developer Program or paid subscription)  
1. Configuring your Microsoft 365 tenant for Copilot Studio  
1. (Optional) Obtaining a Microsoft 365 Copilot license (required to publish agents into Copilot chat)  
1. Accessing Copilot Studio and verifying your environment

---

## Prerequisites

Before you begin, ensure you have:

1. A **work or school email address** (personal @outlook.com, @gmail.com, etc., are not supported).   
1. Access to the internet and a modern browser (Edge, Chrome, or Firefox recommended).  
1. Basic familiarity with Microsoft 365 (for example, signing into Office apps or Teams).  
1. (Optional) A credit card or billing method if you plan to purchase paid licenses.

---

## Step 1: Get a Microsoft 365 Account

Copilot Studio resides within Microsoft 365, so you need a Microsoft 365 account to access it. You have two main options:

1. **Microsoft 365 Developer Program (free sandbox)**  
   1. Provides a preconfigured, renewable Microsoft 365 E5 developer subscription (90-day rolling sandbox).  
   1. Ideal for experimentation and learning; includes SharePoint, Teams, and other Microsoft 365 apps.  
   1. **Sign up**:  
      1. Go to [Microsoft 365 Developer Program](https://developer.microsoft.com/microsoft-365/dev-program) and click **Join now**.  
      1. Sign in with your work/school account—or create a new one using a custom domain you control.  
      1. Follow the wizard to provision your free Microsoft 365 E5 tenant.  
   1. **Why use this?** You don’t need to pay anything up front and can renew your sandbox as long as you’re actively using it.   

1. **Paid Microsoft 365 Subscription**  
   1. If you already have a qualifying Microsoft 365 business or enterprise subscription (E3, E5, Business Standard/Business Premium, etc.), you can skip the free developer sandbox.  
   1. Otherwise, you can purchase a Microsoft 365 E5 trial from the Microsoft 365 admin center or through your Microsoft sales representative.  

> **Tip:** If you plan to publish agents into Microsoft 365 Copilot Chat or connect to organizational data (SharePoint, OneDrive, Dataverse), a paid or trial Microsoft 365 plan (Business or Enterprise) is required. 

---

## Step 2: Join the Microsoft 365 Developer Program (Free Sandbox)

If you don’t already have a Microsoft 365 tenant, the Developer Program sandbox is the fastest way to get a fully provisioned environment:

1. Navigate to [Microsoft 365 Developer Program](https://developer.microsoft.com/microsoft-365/dev-program).  
1. Sign in with your work/school account (if you don’t have one, you’ll be guided to create a new work account using a domain you own).  
1. Under **Join now**, agree to the terms and click **Set up E5 subscription**.  
1. Wait for the provisioning process (usually < 15 minutes). You’ll receive an @<yourdomain>.onmicrosoft.com account and global-admin credentials.  

   > **Sandbox Features:** Preconfigured sample data packs, Teams app templates, and a renewable 90-day Microsoft 365 E5 subscription.  
   > 

1. Verify your new tenant by signing in at [Microsoft 365](https://portal.office.com) using the credentials you chose.  

---

## Step 3: Configure Your Microsoft 365 Tenant for Copilot Studio

Once your tenant is up and running (either via Developer Program or an existing subscription), complete these steps:

1. **Assign Global Administrator Role**  
   1. Ensure your user account is a **Global Administrator** in the Microsoft 365 tenant.  
   1. If you used the Developer Program, the account created during provisioning is automatically global-admin.  

1. **Enable Copilot Studio Sign-up**  
   1. By default, self-service sign-up for Copilot Studio may be **disabled** in some tenants. To check:  
      1. Sign in to the Microsoft 365 admin center ([https://admin.microsoft.com](https://admin.microsoft.com)).  
      1. Go to **Settings > Org settings > Services**.  
      1. Locate **Copilot Studio** (or “Microsoft Copilot Studio”) and ensure **“Allow self-service sign-up”** is toggled **On**.  
   1. If your tenant has this disabled, contact your IT admin to enable it.   

1. **Verify Licensing**  
   1. If you want to test agent creation only, you don’t need a paid license immediately—Copilot Studio offers a free trial.  
   1. If you plan to publish agents into Microsoft 365 Copilot Chat or consume organizational data (e.g., SharePoint lists, Dataverse), you will need either:  
      1. A **Microsoft 365 Copilot** license (a user-based add-on that starts at \$30 per user/month).  
      1. A **Copilot Studio capacity** (tenant-wide message pack).  
   1. You can obtain trials for both—see Step 5 below.  

---

## Step 4: Sign Up for a Copilot Studio Trial

Copilot Studio offers a **60-day free trial** so you can create and publish agents without purchasing capacity upfront. To sign up:

1. Visit the official **Copilot Studio sign-up** page:  
   1. For individual sign-up (work/school accounts):  
      https://learn.microsoft.com/microsoft-copilot-studio/sign-up-individual   
1. Enter your **work or school email** (the same one you used for your Microsoft 365 tenant).  
1. Follow the on-screen prompts. During this process:  
   1. You may be asked to **authenticate** with your Microsoft 365 credentials.  
   1. The system verifies that self-service sign-up is enabled in your tenant.  
   1. Once complete, you’ll have Copilot Studio access for 60 days.  

> **Trial Notes:**  
> 1. The free trial provides **full Copilot Studio capabilities**.  
> 1. You will receive email notifications about your trial expiration. You can extend the trial in 30-day increments (up to 90 days of agent runtime).  
> 1. If your tenant administrator disabled self-service sign-up, you’ll see an error—contact your Microsoft 365 admin to re-enable it.   

---

## Step 5: (Optional) Obtain a Microsoft 365 Copilot License

If you want to publish agents directly into **Microsoft 365 Copilot Chat** (so end users can call your agents inside their Office apps, Teams, or SharePoint), you need a Microsoft 365 Copilot license:

1. **Check Eligibility**  
   1. Microsoft 365 Copilot is available only to customers with a qualifying Microsoft 365 subscription (Business or Enterprise).  
   1. Visit your **Microsoft 365 admin center** and go to **Billing > Purchase services**. Search for “Microsoft 365 Copilot” to see if you can start a trial or purchase.   

1. **Start a Copilot Trial or Purchase**  
   1. **Trial**:  
      1. In the Microsoft 365 admin center, locate **Microsoft 365 Copilot**.  
      1. Click **Try for free** (usually a 30-day trial).  
      1. Assign the Copilot license to at least one user (the user that will build/publish the agent).  
   1. **Purchase**:  
      1. Click **Buy now** next to Microsoft 365 Copilot.  
      1. Follow the checkout flow to commit to a paid license.  
      1. Assign licenses to users who need to consume or publish Copilot agents.  

> **Why This Matters:**  
> 1. With a Copilot license, usage of agents published to M365 Copilot is **included** in that license—no additional Copilot Studio capacity purchase is required for those usage scenarios.  
> 1. If you skip this step, you can still build and test agents in Copilot Studio, but they cannot be surfaced inside the Copilot Chat experience.   

---

## Step 6: Access Copilot Studio and Verify Your Environment

Now that you have a Microsoft 365 tenant, Copilot Studio trial (and optionally a Copilot license), let’s confirm you can open Copilot Studio:

1. **Sign into Microsoft 365**  
   1. Go to [https://portal.office.com](https://portal.office.com) and sign in with your work/school account.  

1. **Open Copilot Studio**  
   1. In the App Launcher (the waffle icon in the top-left), search for **Copilot Studio**, or navigate directly to:  
      https://copilot.microsoft.com/studio  
   1. If you do not see Copilot Studio in the App Launcher, use the direct URL above.  

1. **Verify Access**  
   1. After signing in, you should land on the **Copilot Studio Home** page.  
   1. You’ll see an option to **“Create agents”** in the right rail (or a banner to start your free trial if you haven’t signed up yet).   
   1. If you see an error about missing licenses or capacity, double-check that you:  
      1. Completed the Copilot Studio trial sign-up (Step 4).  
      1. Assigned a Copilot license (if you want to publish agents to Copilot Chat).  

1. **Confirm Licensing Status**  
   1. In Copilot Studio, click **Settings > Subscription** (if available) to see your trial expiration date or active license.  
   1. If you see “Free trial: 60 days remaining,” you’re all set to build and publish agents in Copilot Studio.  

---

Congratulations—you now have a working Microsoft 365 developer environment with Copilot Studio access. You’re ready to start building, testing, and publishing AI agents for Microsoft 365!  
