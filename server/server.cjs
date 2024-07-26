require('dotenv').config({ path: 'server/.env' });
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 5174;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Configurez le transporteur SMTP
const transporter = nodemailer.createTransport({
  host: 'barbotte.o2switch.net',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Route pour recevoir les données du formulaire
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: email,
      to: 'contact@arnoldmasselin.fr',
      subject: `Message from ${name}`,
      text: `Message from: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

// Démarrez le serveur
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
