require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

// 1. Setup Gmail Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER || 'bareabhilash2000@gmail.com',
    pass: process.env.GMAIL_PASS || 'cful aaac tnqq mkcb'
  }
});

// 2. Setup CallMeBot WhatsApp API Details
const WHATSAPP_PHONE = process.env.WHATSAPP_PHONE || '971564780211';
const WHATSAPP_API_KEY = process.env.WHATSAPP_API_KEY || '1119630';

app.post('/api/contact', async (req, res) => {
  const { name, company, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Name, email, and message are required.' });
  }

  let emailSent = false;
  let whatsappSent = false;
  let errors = [];

  // A. Send Email via Nodemailer
  try {
    const mailOptions = {
      from: `"${name}" <${process.env.GMAIL_USER || 'bareabhilash2000@gmail.com'}>`,
      to: process.env.GMAIL_USER || 'bareabhilash2000@gmail.com',
      replyTo: email,
      subject: `Portfolio Contact from ${name}`,
      text: `You got a new message from your Portfolio!\n\nName: ${name}\nCompany: ${company || 'N/A'}\nEmail: ${email}\nMessage: ${message}`
    };

    await transporter.sendMail(mailOptions);
    emailSent = true;
    console.log('✅ Email sent successfully to Gmail!');
  } catch (err) {
    console.error('❌ Gmail Error:', err.message);
    errors.push(`Email: ${err.message}`);
  }

  // B. Send WhatsApp Message via CallMeBot API
  if (WHATSAPP_API_KEY && WHATSAPP_API_KEY !== 'YOUR_CALLMEBOT_APIKEY') {
    try {
      const whatsappText = encodeURIComponent(
        `*New Portfolio Lead!*\n*Name:* ${name}\n*Company:* ${company || 'N/A'}\n*Email:* ${email}\n*Message:* ${message}`
      );
      const cleanPhone = WHATSAPP_PHONE.replace(/[^0-9]/g, '');
      const whatsappUrl = `https://api.callmebot.com/whatsapp.php?phone=${cleanPhone}&text=${whatsappText}&apikey=${WHATSAPP_API_KEY}`;

      await axios.get(whatsappUrl);
      whatsappSent = true;
      console.log('✅ WhatsApp notification sent successfully!');
    } catch (err) {
      console.error('❌ WhatsApp Error:', err.message);
      errors.push(`WhatsApp: ${err.message}`);
    }
  } else {
    console.log('⚠️ WhatsApp API key is missing in .env (WHATSAPP_API_KEY). Skipping WhatsApp notification.');
  }

  // If at least one medium succeeded (or if both succeed), respond with success
  if (emailSent || whatsappSent) {
    return res.status(200).json({
      success: true,
      message: 'Contact form request processed.',
      details: { emailSent, whatsappSent, warnings: errors }
    });
  } else {
    return res.status(500).json({
      success: false,
      error: 'Failed to send both Email and WhatsApp notifications.',
      details: errors
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
