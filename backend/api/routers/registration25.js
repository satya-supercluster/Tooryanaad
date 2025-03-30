const express = require("express");
const nodemailer = require("nodemailer");
const pug = require("pug");
require("dotenv").config();
const path = require("path");
const pdf = require("html-pdf");
const router = express.Router();
const Register = require("../model/registration25");
//middleware
router.use(express.static(path.join(__dirname, "public")));
function generateUniqueID() {
  const timestamp = Date.now().toString(); // Get the current timestamp
  const randomNum = Math.floor(Math.random() * 900000) + 100000; // Generate a random 6-digit number
  const uniqueID = randomNum.toString() + timestamp; // Combine the random number and timestamp
  return "AVH" + uniqueID.substr(0, 6); // Return the first 6 digits of the combined ID
}
const generatePDF = (users) => {
  const templatePath = path.join(__dirname, "../public/reportpdf.pug");
  const compiledFunction = pug.compileFile(templatePath, { encoding: "utf-8" });
  const html = compiledFunction({ users });
  const options = {
    format: "Letter",
    base: "file:///" + path.join(__dirname, "../public/"), // Use this if you have any CSS or image files in the "public" folder.
    childProcessOptions: {
      env: {
        OPENSSL_CONF: "/dev/null",
      },
    },
  };
  return new Promise((resolve, reject) => {
    pdf.create(html, options).toBuffer((err, buffer) => {
      if (err) {
        reject(err);
      } else {
        resolve(buffer);
      }
    });
  });
};
router.post("/Reg25", async (req, res) => {
  try {
    // Destructure the request body for cleaner code
    const { name, email, year, contact, scholar, branch, vertical } = req.body;

    // Create the user object with a unique token
    const users = {
      token: generateUniqueID(),
      name,
      email,
      year,
      contact,
      scholar,
      branch,
      vertical,
    };

    // Check if user already exists
    const existingUser = await Register.findOne({ email });
    if (existingUser) {
      return res.json({ status: 400, msg: "exists" });
    }

    // Save the new user to the database
    const newUser = new Register(users);
    await newUser.save();

    // Generate PDF buffer from user data
    const pdfBuffer = await generatePDF(users);

    // Configure the nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.REACT_APP_EMAIL_,
        pass: process.env.REACT_APP_PASSKEY_,
      },
    });

    // Send the email with the PDF attachment
    await transporter.sendMail({
      from: process.env.REACT_APP_EMAIL_,
      to: email,
      subject: "From Team Tooryanaad",
      text: "Thank you for registration",
      html: `<b>${name}, your registration details are attached.</b>`,
      attachments: [
        {
          filename: "report.pdf",
          content: pdfBuffer,
          encoding: "utf-8",
        },
      ],
    });

    console.log("Email sent successfully");
    res.json({ status: 200, msg: "success" });
  } catch (error) {
    console.error("Error occurred:", error);
    res.json({ status: 500, error: error.message });
  }
});

module.exports = router;
