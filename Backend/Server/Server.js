import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import sgMail from '@sendgrid/mail';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:8080",
  methods: ["GET","POST"],
  credentials: true
}));

// Set SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Simple email validation
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Contact form endpoint
app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Name, email, and message are required!" });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: "Invalid email address!" });
  }

  // Respond immediately to frontend
  res.status(200).json({ message: "Your message has been received!" });

  try {
    // 1️⃣ Send Telegram notification
    const telegramMessage = `
📩 New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject || "(no subject)"}
Message: ${message}
    `;
    const tgUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
    await fetch(tgUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: telegramMessage
      })
    });
    console.log("Notification sent to Telegram");

    // 2️⃣ Send acknowledgment email to user via SendGrid
  await sgMail.send({
  to: email,
  from: {
    name: "Gokulnath", // what the user sees
    email: process.env.SENDGRID_SENDER // verified sender email in SendGrid
  },
  subject: "Thank you for reaching out!",
  text: `Hi ${name},

Thank you for reaching out! I’ve received your message:

"${message}"

I truly appreciate you taking the time to contact me. I’ll review your message carefully and get back to you very soon. I’m excited to connect and assist you!

Warm regards,
Gokulnath. S
`,
  html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #000;">
  <p>Hi ${name},</p>
  <p>Thank you for reaching out! I’ve received your message:</p>
  <blockquote style="background-color: #f9f9f9; padding: 12px; border-left: 3px solid #0d6efd; margin:10px 0; font-style:italic;">
    ${message}
  </blockquote>
  <p>I truly appreciate you taking the time to contact me. I’ll review your message carefully and get back to you very soon. I’m excited to connect and assist you!</p>
  <p>Warm regards,<br><strong>Gokulnath. S</strong></p>
  <hr style="border:none; border-top:1px solid #ddd; margin:20px 0;">
</div>

  `
});
    console.log("Acknowledgment sent to user via email");

  } catch(err) {
    console.error("Error sending notification or acknowledgment:", err);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
