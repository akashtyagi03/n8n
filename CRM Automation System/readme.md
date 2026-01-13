# CRM Automation System

An intelligent CRM automation workflow built with n8n that manages the complete user onboarding process from registration to account creation with AI-powered communications.

## 🚀 Features

- **Automated User Onboarding**: Triggered by form submissions via webhook
- **Welcome Email**: Instantly sends personalized welcome emails to new users
- **Team Notifications**: Real-time Slack alerts for new registrations
- **Smart Follow-ups**: Automated reminder system with scheduled triggers
- **Progress Tracking**: Real-time user status updates in Google Sheets
- **AI-Powered Communications**: Uses Google Gemini AI Agent for intelligent message generation
- **Conversion Optimization**: Sends up to 2 reminder emails to incomplete registrations
- **Success Notifications**: Greeting emails and team updates upon account creation

## 🛠️ Tech Stack

- **n8n** - Workflow automation platform
- **AI Agent** - Intelligent processing and decision-making
- **Google Gemini** - AI-powered chat model for personalized communications
- **Gmail** - Email service for user communications
- **Google Sheets** - Real-time data storage and tracking
- **Slack** - Team collaboration and notifications

## 📋 Workflow Overview

### 1. User Registration
- Form submission triggers the workflow via webhook
- User data is captured and processed

### 2. Initial Communication
- Welcome email sent to the new user
- Team notified via Slack about new registration
- User details registered in Google Sheets

### 3. Account Creation Monitoring
- Scheduled triggers check account creation status (2 follow-up checks)
- Reminder emails sent to users who haven't completed registration
- Google Sheets updated with progress status after each check

### 4. Account Creation Success
- Personalized greeting email sent upon account creation
- Final status updated in Google Sheets
- Team notified via Slack about successful onboarding

## 🔄 Automation Flow

```
Form Submission (Webhook)
    ↓
AI Agent Processing
    ↓
Welcome Email (Gmail) → Team Alert (Slack) → Register User (Google Sheets)
    ↓
Schedule Trigger 1 (Check Account Status)
    ↓
Reminder Email 1 (if not created) → Update Sheets
    ↓
Schedule Trigger 2 (Check Account Status)
    ↓
Reminder Email 2 (if not created) → Update Sheets
    ↓
Account Created → Greeting Email → Update Sheets → Slack Notification
```

## 📊 Data Tracking

The system tracks the following user states in Google Sheets:
- Registration timestamp
- Email sent status
- Account creation status
- Reminder count
- Final conversion status

## 🎯 Benefits

- **Improved Conversion Rates**: Automated follow-ups reduce drop-offs
- **Time Savings**: Eliminates manual user tracking and communication
- **Real-time Visibility**: Team stays informed about onboarding progress
- **Personalized Experience**: AI-generated messages tailored to user journey
- **Data-Driven Insights**: Complete tracking of user behavior and conversion metrics

## 🔧 Setup Requirements

1. n8n instance (self-hosted or cloud)
2. Google account with Gmail and Sheets API access
3. Slack workspace with incoming webhooks
4. Google Gemini API key
5. Form submission endpoint configured

## 📝 Configuration

1. Clone the workflow in n8n
2. Configure webhook trigger URL
3. Set up Google authentication (Gmail, Sheets)
4. Configure Slack webhook URL
5. Add Google Gemini API credentials
6. Customize email templates and scheduling intervals
7. Map Google Sheets columns to workflow data

## 🚦 Usage

1. Integrate the webhook URL with your registration form
2. Users submit the form
3. Automation handles the rest automatically
4. Monitor progress in Google Sheets and Slack
5. Review analytics and optimize as needed

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

Your Name
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## ⭐ Show your support

Give a ⭐️ if this project helped you!