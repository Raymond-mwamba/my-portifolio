# Setting Up EmailJS for Your Contact Form

To make your contact form functional, follow these steps to set up EmailJS:

## 1. Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
   - The free plan allows 200 emails per month

## 2. Add an Email Service

1. Log in to your EmailJS dashboard
2. Click on "Email Services" in the left sidebar
3. Click "Add New Service"
4. Select your email provider (Gmail, Outlook, etc.)
5. Follow the authentication steps
6. Give your service a name (e.g., "portfolio_contact")
7. Save the **Service ID** for later

## 3. Create an Email Template

1. Click on "Email Templates" in the left sidebar
2. Click "Create New Template"
3. Design your email template with the following variables:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{message}}` - Message content
4. Here's a simple template you can use:

```
Subject: New Contact Form Message from {{name}}

You received a new message from your portfolio website:

Name: {{name}}
Email: {{email}}

Message:
{{message}}
```

5. Save the template and note the **Template ID**

## 4. Get Your Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

## 5. Update Your Code

1. Open `src/components/ContactForm.tsx`
2. Replace these placeholder values:
   - `YOUR_SERVICE_ID` with your actual Service ID
   - `YOUR_TEMPLATE_ID` with your actual Template ID
   - `YOUR_PUBLIC_KEY` with your actual Public Key

```jsx
const SERVICE_ID = 'your_service_id_here';
const TEMPLATE_ID = 'your_template_id_here';
const PUBLIC_KEY = 'your_public_key_here';
```

## 6. Test the Form

1. Run your project locally with `npm run dev`
2. Fill out the contact form and submit
3. Check your email to make sure you received the message

## Notes

- Make sure your form input names match the variables in your EmailJS template
- For security, you may want to use environment variables for API keys in a production environment
- The free tier of EmailJS has monthly limits, so monitor usage for high-traffic sites
