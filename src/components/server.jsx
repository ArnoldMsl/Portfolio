// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use any email service
  auth: {
    user: 'arnold.masselin@gmail.com',
    pass: 'your-email-password',
  },
});

app.post('/contact', upload.single('file'), (req, res) => {
  const { name, email, message } = req.body;
  const file = req.file;

  const mailOptions = {
    from: email,
    to: 'arnold.masselin@gmail.com',
    subject: `Contact Form Submission from ${name}`,
    text: message,
    attachments: file ? [{ path: file.path }] : [],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending email');
    }
    res.status(200).send('Email sent');
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
