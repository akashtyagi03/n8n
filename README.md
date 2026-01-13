# n8n Automation Workflows

A collection of intelligent automation workflows built with n8n to streamline business processes, improve productivity, and automate repetitive tasks.

## 📁 Repository Structure

```
n8n/
├── feedback-form-workflow/    # AI-powered feedback management system
├── webhook/
├── CRM automation/            # CRM automation and user onboarding workflows
└── README.md
```

## 🚀 Workflows

### 1. Feedback Form Intelligence Automation
**Location:** `/feedback-form-workflow`

An automated workflow that intelligently processes user feedback using AI.

**Features:**
- Automated feedback collection via form submissions
- AI-powered categorization (compliments, complaints, feature requests)
- Airtable integration for data tracking
- Slack notifications for team alerts
- Automated personalized email responses

**Tech Stack:** n8n, OpenAI, Airtable, Slack, REST APIs

[View detailed documentation →](./feedback-form-workflow/README.md)

---

### 2. CRM Automation System
**Location:** `/webhook`

An intelligent CRM workflow that manages the complete user onboarding process from registration to account creation.

**Features:**
- Automated welcome emails and team notifications
- Smart follow-up system with scheduled reminders
- Real-time progress tracking in Google Sheets
- AI-powered personalized communications
- Conversion optimization with up to 2 reminder emails

**Tech Stack:** n8n, AI Agent, Google Gemini, Gmail, Google Sheets, Slack

[View detailed documentation →](./webhook/README.md)

---

## 🛠️ Technologies Used

- **n8n** - Workflow automation platform
- **OpenAI API** - AI-powered text analysis and generation
- **Google Gemini** - Advanced AI chat model
- **Gmail** - Email communications
- **Google Sheets** - Data storage and tracking
- **Airtable** - Database management
- **Slack** - Team collaboration and notifications
- **REST APIs** - Integration layer

## 📋 Prerequisites

To use these workflows, you'll need:

- n8n instance (self-hosted or cloud)
- API keys for respective services (OpenAI, Google, etc.)
- Active accounts for integrated platforms (Slack, Airtable, Gmail)
- Basic understanding of workflow automation concepts

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/akashtyagi03/n8n.git
   cd n8n
   ```

2. **Import workflows into n8n**
   - Open your n8n instance
   - Navigate to Workflows
   - Click "Import from File"
   - Select the desired workflow JSON file

3. **Configure credentials**
   - Set up API credentials for each service
   - Update webhook URLs
   - Configure email templates and scheduling intervals

4. **Test the workflow**
   - Activate the workflow
   - Test with sample data
   - Monitor execution logs

## 🎯 Use Cases

- **Customer Support Automation**: Automatically categorize and route customer feedback
- **Lead Management**: Streamline user onboarding and follow-up processes
- **Team Collaboration**: Keep teams informed with real-time notifications
- **Data Management**: Centralize data across multiple platforms
- **Communication Automation**: Send personalized messages at scale

## 📊 Benefits

- **Time Savings**: Automate hours of manual work
- **Improved Response Time**: Instant notifications and automated replies
- **Better Data Organization**: Centralized tracking across platforms
- **Enhanced User Experience**: Personalized, timely communications
- **Increased Conversion**: Smart follow-ups reduce drop-offs
- **Team Efficiency**: Real-time visibility into processes

## 🔄 Workflow Examples

### Feedback Processing Flow
```
Form Submission → AI Analysis → Categorization → Airtable Storage → Slack Alert → Email Response
```

### CRM Onboarding Flow
```
Registration → Welcome Email → Team Alert → Progress Tracking → Follow-ups → Account Creation → Success Notification
```

## 📖 Documentation

Each workflow folder contains:
- Detailed README with setup instructions
- Workflow JSON file for import
- Configuration examples
- Troubleshooting guide

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Issues

Found a bug or have a feature request? Please open an issue on GitHub.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Akash Tyagi**
- GitHub: [@akashtyagi03](https://github.com/akashtyagi03)
- LinkedIn: [Connect with me](https://linkedin.com/in/yourprofile)

## ⭐ Show Your Support

If you find these workflows helpful, please consider giving this repository a star!

## 📧 Contact

For questions or collaboration opportunities, feel free to reach out!

---

**Note:** Make sure to secure your API keys and sensitive credentials. Never commit them directly to the repository. Use environment variables or n8n's credential management system.
