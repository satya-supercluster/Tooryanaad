const express = require("express");
const nodemailer = require("nodemailer");
const ejs = require("ejs");
const pug = require("pug");
// const multerFilehandler = require('../multer');
// const multer = require('multer');

const fs = require("fs");
// const GoogleDriveService = require('../googleDriveService');
const validator = require("validator");
const emailVerify = require("email-verify");
require("dotenv").config();
const path = require("path");
const pdf = require("html-pdf");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
//schema model
// const Register = require("../model/t_registration");
const G_Register = require("../model/TG24_Reg");
//middleware
router.use(express.static(path.join(__dirname, "public")));
function generateUniqueID() {
  const timestamp = Date.now().toString(); // Get the current timestamp
  const randomNum = Math.floor(Math.random() * 900000) + 100000; // Generate a random 6-digit number
  const uniqueID = randomNum.toString() + timestamp; // Combine the random number and timestamp
  return "TRY" + uniqueID.substr(0, 6); // Return the first 6 digits of the combined ID
}

router.post("/TG24_Reg", async (req, res) => {
  try {
    // ... existing code ..
    let users = {
      token: req.body.token,
      teamName: req.body.teamName,
      name: req.body.name,
      email: req.body.email,
      contact: req.body.contact,
      college: req.body.college,
      competitions: req.body.competitions,
    };
    // console.log(users);

    // Create an array to store attachments
    const attachments = [];

    // Loop through the 'posts' array and attach a PDF for each post
    for (const competition of req.body.competitions) {
      const pdfPath = path.join(__dirname, "../public/", `${competition}.pdf`);

      // Check if the PDF file exists
      if (fs.existsSync(pdfPath)) {
        // If the PDF file exists, add it as an attachment
        attachments.push({
          filename: `${competition}.pdf`,
          path: pdfPath,
        });
      } else {
        console.error(`PDF file for post '${competition}' not found.`);
      }
    }
    let email = req.body.email;
    //number 10 digits
    if (!validator.isLength(req.body.contact, { min: 10, max: 10 })) {
      return res.status(401).json({
        message: "Not a number",
      });
    }
    // Validate email
    if (!validator.isEmail(req.body.email)) {
      return res.status(402).json({
        message: "Not an email",
      });
    }
    // user already exists
    const existingUser = await G_Register.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(403).json({
        message: "User Already Exists",
      });
    }
    //saving to database
    try {
      const newUser = new G_Register(users);
      await newUser.save();
      // Generate PDF
      // const pdfBuffer = await generatePDF(users);
      const emailTemplate = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Registration Confirmation</title>
</head>
<body style="margin: 0; font-family: Arial, sans-serif; background-color: #f0f0f0; padding: 20px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 0 20px rgba(0,0,0,0.1);">
        <div style="background-color: #4a148c; padding: 20px; text-align: center;">
            <div style="color: #ffd700; font-weight: bold; font-size: 40px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">तूर्यनाद'24</div>
        </div>
        <div style="padding: 30px; background-color: #ffffff;">
            <div style="color: #4a148c; margin-bottom: 20px; font-size: 30px; text-align: center;">
                <b>नमस्कार,</b> ${req.body.teamName}
            </div>
            <div style="color: #333333; font-size: 18px; text-align: center; margin-bottom: 20px;">
                तूर्यनाद'24 में पंजीयन करने के लिए धन्यवाद।
            </div>
            <div style="background-color: #f3e5f5; border-radius: 5px; padding: 15px; text-align: center; margin-bottom: 20px;">
                <div style="color: #4a148c; font-size: 20px; font-weight: bold;">
                    आपका पंजीयन क्रमांक <span style="color: #ff4081;">${req.body.token}</span> है।
                </div>
            </div>
        </div>
        <div style="background-color: #4a148c; color: #ffffff; text-align: center; padding: 15px; font-size: 16px;">
            प्रतियोगिता संबंधित कोई संदेह हो तो हमसे संपर्क कर सकते हैं, 
            <a href="http://tooryanaad.org" style="color: #ffd700; text-decoration: none; font-weight: bold;">संपर्क करें</a>।
        </div>
    </div>
</body>
</html>
`;
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          pass: process.env.REACT_APP_PASSKEY_,
          user: process.env.REACT_APP_EMAIL_,
        },
      });
      const mail = async () => {
        await transporter.sendMail({
          from: process.env.REACT_APP_EMAIL_,
          to: `${email}`,
          subject: "तूर्यनाद'24 पंजीयन हेतु",
          text: "Thankyou for registration",
          html: emailTemplate,
          attachments: attachments,
        });
        // console.log("Message sent: %s", info.messageId);
      };
      await mail()
        .then(() => {
          console.log("Email sent successfully\n",users);
          res.status(200).json({
            message: "success",
          });
        })
        .catch((err) => {
          console.error("Error sending email:", err,"\n",users);
          res.status(400).json({
            message: err.message,
          });
        });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});
router.get("/TG", async (req, res) => {
  try {
    const data = await G_Register.find();
    res.status(200).json({ data: data });
  } catch (error) {
    console.error("Error counting documents:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    pass: process.env.REACT_APP_PASSKEY_,
    user: process.env.REACT_APP_EMAIL_,
  },
});

// Email template function
const generateEmailTemplate = (teamName, token) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Registration Confirmation</title>
</head>
<body style="margin: 0; font-family: Arial, sans-serif; background-color: #f0f0f0; padding: 20px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 0 20px rgba(0,0,0,0.1);">
        <div style="background-color: #4a148c; padding: 20px; text-align: center;">
            <div style="color: #ffd700; font-weight: bold; font-size: 40px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">तूर्यनाद'24</div>
        </div>
        <div style="padding: 30px; background-color: #ffffff;">
            <div style="color: #4a148c; margin-bottom: 20px; font-size: 30px; text-align: center;">
                <b>नमस्कार,</b> ${teamName}
            </div>
            <div style="color: #333333; font-size: 18px; text-align: center; margin-bottom: 20px;">
                तूर्यनाद'24 में पंजीयन करने के लिए धन्यवाद।
            </div>
            <div style="background-color: #f3e5f5; border-radius: 5px; padding: 15px; text-align: center; margin-bottom: 20px;">
                <div style="color: #4a148c; font-size: 20px; font-weight: bold;">
                    आपका पंजीयन क्रमांक <span style="color: #ff4081;">${token}</span> है।
                </div>
            </div>
        </div>
        <div style="background-color: #4a148c; color: #ffffff; text-align: center; padding: 15px; font-size: 16px;">
            प्रतियोगिता संबंधित कोई संदेह हो तो हमसे संपर्क कर सकते हैं, 
            <a href="http://tooryanaad.org" style="color: #ffd700; text-decoration: none; font-weight: bold;">संपर्क करें</a>।
        </div>
    </div>
</body>
</html>
`;

// Function to send email
const sendEmail = async (email, teamName, token, competitions) => {
  const attachments = competitions
    .map((competition) => {
      const pdfPath = path.join(__dirname, "../public/", `${competition}.pdf`);
      if (fs.existsSync(pdfPath)) {
        return {
          filename: `${competition}.pdf`,
          path: pdfPath,
        };
      }
      return null;
    })
    .filter((attachment) => attachment !== null);

  await transporter.sendMail({
    from: process.env.REACT_APP_EMAIL_,
    to: email,
    subject: "तूर्यनाद'24 पंजीयन हेतु",
    html: generateEmailTemplate(teamName, token),
    attachments: attachments,
  });
};

// Modified POST route for bulk insertion and email sending
router.post("/TG/bulk-insert", async (req, res) => {
  try {
    const bulkData = req.body;

    if (!Array.isArray(bulkData)) {
      return res
        .status(400)
        .json({ error: "Invalid data format. Expected an array." });
    }

    const documentsToInsert = bulkData.map((item) => ({
      token: item.token,
      name: item.name,
      email: item.email,
      contact: item.contact,
      college: item.college,
      competitions: item.competitions,
      teamName: item.teamName,
    }));

    // const result = await Register.insertMany(documentsToInsert);

    // Send emails to all inserted participants
    for (const doc of documentsToInsert) {
      try {
        await sendEmail(doc.email, doc.teamName, doc.token, doc.competitions);
        console.log(`Email sent successfully to ${doc.email}`);
      } catch (emailError) {
        console.error(`Failed to send email to ${doc.email}:`, emailError);
      }
    }

    res.status(200).json({
      message: "Bulk insertion and email sending completed",
      insertedCount: documentsToInsert.length,
    });
  } catch (error) {
    console.error("Error during bulk insertion or email sending:", error);
    res.status(500).json({ error: "Internal server error during operation" });
  }
});

module.exports = router;
