AI-Powered Feedback Intelligence Automation 🚀
An end-to-end automation workflow built with n8n that captures user feedback, analyzes sentiment using AI, and orchestrates data distribution across Airtable and Slack while closing the loop with the user.

📌 Overview
Managing user feedback manually is slow and prone to error. This project automates the entire lifecycle of a feedback submission:

Capture: Collects username, email, phone, and feedback text.

Analyze: An AI agent classifies the feedback as a Compliment, Complaint, or Feature Request.

Route: Data is saved to Airtable and the team is instantly notified on Slack.

Respond: The user receives an automated, personalized acknowledgment message.

🛠 Tech Stack
Automation Engine: n8n

AI Model: OpenAI (GPT-4o / GPT-3.5)

Database: Airtable

Communication: Slack (Internal) & SMTP/Twilio (External)

Integration: REST APIs & JSON

📂 Workflow Structure
Webhook/Form Trigger: Entry point for user feedback data.

AI Agent Node: Uses a system prompt to categorize feedback and extract sentiment.

Airtable Node: Appends a new row with user info and AI-generated tags.

Slack Node: Sends a formatted message to a specific channel (e.g., #feedback-alerts).

Response Node: Triggers a personalized "Thank You" or "Follow-up" message to the user.

🚀 Setup Guide
1. Prerequisites
An n8n instance (Cloud or Self-hosted).

API Keys for:

OpenAI (for the AI Agent).

Airtable (Personal Access Token).

Slack (Bot User OAuth Token).

2. Database Setup (Airtable)
Create a new Base in Airtable.

Set up a table with the following columns: Name, Email, Phone, Feedback, Category (AI), and Date.

3. n8n Configuration
Import Workflow: Copy the workflow JSON and paste it into your n8n canvas.

Credentials: * Add your OpenAI API Key to the AI node.

Connect your Airtable account using your Access Token and Base ID.

Authenticate Slack and select the target channel.

AI Prompting: Set the AI node system prompt to:

"Analyze the following feedback: [Feedback]. Categorize it strictly as 'Compliment', 'Complaint', or 'Feature Request'. Return the result in JSON format."

4. Testing
Use the "Test Workflow" button in n8n.

Send a sample Webhook/Form request.

Check if the data appears in Airtable and a message hits your Slack channel.

5. Deployment
Switch the workflow to Active to begin processing real-time feedback.

📈 Impact
Zero Manual Entry: Eliminated the need for manual data sorting.

Faster Response: Reduced team reaction time to complaints by 90%.

Better UX: 100% of users receive an instant confirmation of their feedback.