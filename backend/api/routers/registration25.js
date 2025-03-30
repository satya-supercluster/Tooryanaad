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
// const generatePDF = (users) => {
//   const templatePath = path.join(__dirname, "../public/reportpdf.pug");
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

// const puppeteer = require("puppeteer");

// async function generatePDF(users) {
//   const html = `
//   <!DOCTYPE html>
//   <html lang="hi">
//   <head>
//     <meta charset="UTF-8">
//     <title>आह्वान'25 (Aahvaan'25)</title>
//     <style>
//       body { font-family: 'Noto Sans', sans-serif; margin: 26px; }
//       .avhh { text-align: center; margin-top: 20px; }
//       .data { margin: 20px; }
//       .data ul { list-style-type: none; padding: 0; }
//       .section1 { font-weight: bold; }
//       hr { border: 1px solid #ccc; margin: 10px 0; }
//     </style>
//   </head>
//   <body>
//     <div class="avhh">
//       <h1>आह्वान'25 (Aahvaan'25)</h1>
//     </div>
//     <div class="data">
//       <ul>
//         <li>
//           <span class="section1">आह्वान पहचान (Aahvaan ID): </span>
//           <span class="section">${users.token}</span>
//         </li>
//         <br>
//         <li>
//           <span class="section1">नाम (Name): </span>
//           <span class="section">${users.name}</span>
//         </li>
//         <br>
//         <li>
//           <span class="section1">स्कॉलर नंबर (Scholar Number): </span>
//           <span class="section">${users.scholar}</span>
//         </li>
//         <br>
//         <li>
//           <span class="section1">साल (Year): </span>
//           <span class="section">${users.year}</span>
//         </li>
//         <br>
//         <li>
//           <span class="section1">ईमेल (Email): </span>
//           <span class="section">${users.email}</span>
//         </li>
//         <br>
//         <li>
//           <span class="section1">संपर्क (Contact): </span>
//           <span class="section">${users.contact}</span>
//         </li>
//         <br>
//         <li>
//           <span class="section1">शाखा (Branch): </span>
//           <span class="section">${users.branch}</span>
//         </li>
//         <br>
//         <hr>
//         <li>
//           <span class="section1">कार्यक्षेत्र (Vertical): </span>
//           <span class="section">${users.vertical}</span>
//         </li>
//         <br>
//       </ul>
//     </div>
//     <div class="avahan">${new Date().toLocaleDateString()}</div>
//     <div class="avah">टूर्यनाड (Tooryanaad)</div>
//   </body>
//   </html>
//   `;

//   // Launch a headless browser and create a new page
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   // Set the HTML content of the page and wait until the network is idle
//   await page.setContent(html, { waitUntil: "networkidle0" });

//   // Generate a PDF buffer from the page content in A4 format
//   const pdfBuffer = await page.pdf({ format: "A4" });

//   // Close the browser instance
//   await browser.close();

//   // Return the generated PDF buffer
//   return pdfBuffer;
// }

// const generatePDF=require("../public/regPdfGenerator")

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
      return res.status(400).json({ msg: "exists" });
    }

    // Get current date in DD-MM-YYYY format
    const currentDate = new Date().toLocaleDateString("hi-IN");

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

    // Send the email with the registration details
    await transporter.sendMail({
      from: process.env.REACT_APP_EMAIL_,
      to: email,
      subject: "तूर्यनाद परिवार की ओर से पंजीकरण पुष्टि",
      text: `प्रिय ${name},\n\nआपका पंजीकरण सफलतापूर्वक पूरा हो गया है। \n\nआपकी जानकारी निम्नलिखित है:\n\nनाम (Name): ${name}\nवर्ष (Year): ${year}\nसंपर्क (Contact): ${contact}\nस्कॉलर नंबर (Scholar Number): ${scholar}\nशाखा (Branch): ${branch}\nकार्यक्षेत्र (Vertical): ${vertical}\nदिनांक (Date): ${currentDate}\n\nतूर्यनाद`,
      html: `<b>प्रिय ${name},</b><br><br>
             <b>आपका पंजीकरण सफलतापूर्वक पूरा हो गया है। </b><br><br>
             <b>आपकी जानकारी निम्नलिखित है:</b><br><br>
             <b>नाम (Name):</b> ${name}<br>
             <b>वर्ष (Year):</b> ${year}<br>
             <b>संपर्क (Contact):</b> ${contact}<br>
             <b>स्कॉलर नंबर (Scholar Number):</b> ${scholar}<br>
             <b>शाखा (Branch):</b> ${branch}<br>
             <b>कार्यक्षेत्र (Vertical):</b> ${vertical}<br>
             <b>दिनांक (Date):</b> ${currentDate}<br><br>
             <b>तूर्यनाद</b>`,
    });

    console.log("Email sent successfully");
    res.status(200).json({ msg: "success" });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/countReg25", async (req, res) => {
  try {
    const data = await Register.find();
    res.status(200).json({ data: data });
  } catch (error) {
    console.error("Error counting documents:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
