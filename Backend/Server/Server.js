import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";
import sgMail from "@sendgrid/mail";

dotenv.config();

const app = express();

// CORS Configuration
app.use(
  cors({
    origin: [
      "http://localhost:8080", // Local development
      "https://gokulportfolio-ten.vercel.app", // Production frontend
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// ✅ FIX: Middleware to parse incoming JSON bodies
app.use(express.json());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// Email validation
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
/**
 * Contact form endpoint
 * URL: POST /send-email
 */
app.post("/send-email", (req, res) => {
  console.log("Incoming body:", req.body); // Debugging log

  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ message: "Name, email, and message are required!" });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: "Invalid email address!" });
  }

  // ✅ Respond immediately to the client
  res.status(200).json({ message: "Your message has been received!" });

  (async () => {
    try {
      // 1️⃣ Send Telegram notification via Pipedream (Optional)
      if (process.env.PIPEDREAM_WEBHOOK_URL) {
        await fetch(process.env.PIPEDREAM_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, subject, message }),
        });
        console.log("Notification sent to Telegram via Pipedream");
      }

      // 2️⃣ Send acknowledgment email via SendGrid
      await sgMail.send({
        to: email,
        from: { name: "Gokulnath", email: process.env.SENDGRID_SENDER },
        subject: "Thank you for reaching out!",
        text: `Hi ${name},

Thanks a lot for reaching out! I’ve received your message:

"${message}"

I truly appreciate you taking the time to contact me. I’ll review your message carefully and get back to you very soon. I’m genuinely excited to connect and assist you!

Warm regards,
Gokulnath. S
`,
        html: `
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height:1.7; max-width:600px; margin:auto; padding:20px;">
  <p style="font-size:16px;">Hi <strong>${name}</strong>,</p>
  <p style="font-size:16px;">Thanks a lot for reaching out! 🎉 I’ve received your message:</p>
  <blockquote style="padding:14px 16px; border-left:4px solid #0d6efd; margin:15px 0; font-style:italic; font-size:15px;">
    ${message}
  </blockquote>
  <p style="font-size:16px;">I truly appreciate you taking the time to contact me. I’ll review your message carefully and get back to you very soon. I’m genuinely excited to connect and assist you!</p>
  <p style="font-size:16px;">Warm regards,<br><strong>Gokulnath. S</strong></p>
  <hr style="border:none; border-top:1px solid #ddd; margin:25px 0;">
  <p style="font-size:12px;">If you didn’t reach out, you can safely ignore this email.</p>
</div>
        `,
      });

      console.log("Acknowledgment email sent successfully.");
    } catch (err) {
      console.error("Error sending notification or email:", err);
    }
  })();
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
