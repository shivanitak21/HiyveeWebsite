const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const UAParser = require("ua-parser-js");
const moment = require("moment-timezone");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer Setup
const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com", // Use your SMTP host
    port: 465, // SMTP port
    secure: true, // Use SSL/TLS
    auth: {
        user: "Official@haiyvee.com", // Your email
        pass: "your-email-password", // Your email password
    },
});

app.post("/api/send-email", async (req, res) => {
    const { name, email, subject, message } = req.body;

    const remoteIP = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const userAgent = req.headers["user-agent"];
    const parser = new UAParser(userAgent);
    const browserDetails = `${parser.getBrowser().name} ${parser.getBrowser().version}`;
    const osDetails = `${parser.getOS().name} ${parser.getOS().version}`;

    const currentDate = moment().tz("Asia/Kolkata").format("YYYY-MM-DD");
    const currentTime = moment().tz("Asia/Kolkata").format("hh:mm A");

    const mailOptions = {
        from: `"Hiyvee Contact Form" <${email}>`,
        to: "Official@haiyvee.com", // The recipient email
        subject: `New Message from ${name}: ${subject}`,
        text: `
        Name: ${name}
        Email: ${email}
        Date: ${currentDate}
        Time: ${currentTime}
        Remote IP: ${remoteIP}
        Browser: ${browserDetails}
        OS: ${osDetails}
        Message: ${message}
        `,
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
            <h2>New Message from ${name}</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>
            <p><strong>IP Address:</strong> ${remoteIP}</p>
            <p><strong>Browser:</strong> ${browserDetails}</p>
            <p><strong>OS:</strong> ${osDetails}</p>
            <p><strong>Date:</strong> ${currentDate}</p>
            <p><strong>Time:</strong> ${currentTime}</p>
        </div>
        `,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully", messageId: info.messageId });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send email" });
    }
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
