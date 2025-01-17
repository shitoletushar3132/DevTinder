const nodemailer = require("nodemailer");

// Create a transporter with connection pooling and rate limiting
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  pool: true, // Use connection pooling
  maxConnections: 5, // Maximum number of connections in the pool
  maxMessages: 100, // Maximum number of messages per connection
  rateDelta: 1000, // Time span for rate limit (in milliseconds)
  rateLimitCount: 5, // Maximum number of messages in the time span
});

// Verify transporter connection once at the start
transporter.verify((error, success) => {
  if (error) {
    console.error("Error verifying transporter:", error);
  } else {
    console.log("Transporter verified and ready to send emails.");
  }
});

/**
 * Send a basic email quickly and efficiently.
 * @param {string} to - The recipient's email address
 * @param {string} subject - The subject of the email
 * @param {string} text - The plain text content of the email
 * @param {string} html - The HTML content of the email (optional)
 */
const sendEmail = async (to, subject, text, html = null) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
      ...(html && { html }), // Add HTML content if provided
    };

    console.log(`Sending email to ${to} with subject "${subject}"`);
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

module.exports = { sendEmail };
