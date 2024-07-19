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
const G_Register = require("../model/tg_registration");
//middleware
router.use(express.static(path.join(__dirname, "public")));
function generateUniqueID() {
  const timestamp = Date.now().toString(); // Get the current timestamp
  const randomNum = Math.floor(Math.random() * 900000) + 100000; // Generate a random 6-digit number
  const uniqueID = randomNum.toString() + timestamp; // Combine the random number and timestamp
  return "TRY" + uniqueID.substr(0, 6); // Return the first 6 digits of the combined ID
}
// const generatePDF = (users) => {
//   const templatePath = path.join(__dirname, "../public/tooryanaad_ind.pug");
//   const compiledFunction = pug.compileFile(templatePath, { encoding: "utf-8" });
//   const html = compiledFunction({ users });
//   const options = {
//     format: "Letter",
//     base: "file:///" + path.join(__dirname, "../public/"), // Use this if you have any CSS or image files in the "public" folder.
//     childProcessOptions: {
//       env: {
//         OPENSSL_CONF: "/dev/null",
//       },
//     },
//   };
//   return new Promise((resolve, reject) => {
//     pdf.create(html, options).toBuffer((err, buffer) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(buffer);
//       }
//     });
//   });
// };
router.post("/TG_Reg",async (req, res) => {

  try {
    // ... existing code ..
    let users = {
      token: req.body.token,
      teamName: req.body.teamName,
      representativeName: req.body.representativeName,
      email: req.body.email,
      contact: req.body.contact,
      college: req.body.college,
      competitions:req.body.competitions
    };
    // console.log(users);

    // Create an array to store attachments
const attachments = [];

// Loop through the 'posts' array and attach a PDF for each post
for (const competition of req.body.competitions) {
  
  const pdfPath = path.join(__dirname, '../public/', `${competition}.pdf`);

  // Check if the PDF file exists
  if (fs.existsSync(pdfPath)) {
    // If the PDF file exists, add it as an attachment
    attachments.push({
      filename: `${competition}.pdf`,
      path: pdfPath
    });
  } else {
    
    console.error(`PDF file for post '${competition}' not found.`);
  }
}
    let email = req.body.email;
    //number 10 digits
    if (!validator.isLength(req.body.contact.toString(), { min: 10, max: 10 })) {
      return res.send("!number");
    }
    // Validate email
    if (!validator.isEmail(req.body.email)) {
      return res.send("!email");
    }
    // user already exists
    const existingUser = await G_Register.findOne({ email: req.body.email });
    if (existingUser) {
      return res.send("exists");
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
    <body style=" margin: 0; font-family: Arial, sans-serif;">
        <div style="text-align: center; background-color: rgba(118, 118, 118, 0.408); margin: 10px; color: rgb(33, 33, 33); position: relative;">
            <div style="color: rgb(45, 45, 45); font-weight: bold; font-size: 40px;">तूर्यनाद'23</div>
            <div style="color: green; margin: 20px; font-size: 30px;">
                <b>नमस्कार,</b> ${req.body.teamName}
            </div>
            <div align="center" style="display: flex; justify-content: center; align-items: center; margin-bottom: 20px; color:rgb(30, 30, 30);font-size: 20px; ">
                तूर्यनाद'23 में पंजीयन करने के लिए धन्यवाद।<br>
            </div>
        </div>
        <div align="center" style="background-color: rgba(192, 192, 192, 0.5);  width: 100%; padding: 10px 0;" >
            प्रतियोगिता संबंधित कोई  संदेह हो तो हमसे संपर्क कर सकते हैं, <a href="http://tooryanaad.in">संपर्क करें</a> या हमारी वेबसाइट पर जाएं।
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
          subject: "तूर्यनाद'23 पंजीयन हेतु",
          text: "Thankyou for registration",
          html: emailTemplate,
          attachments: attachments
        });
        // console.log("Message sent: %s", info.messageId);
      };
      await mail()
        .then(() => {
          res.send("success");
          // console.log("Email sent successfully");
        })
        .catch((err) => {
          console.error("Error sending email:", err);
  
        });
    } catch (error) {
      res.send(error.message);
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
    }
  )

  module.exports = router;
