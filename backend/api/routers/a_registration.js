const express = require("express");
const nodemailer = require("nodemailer");
// const ejs = require("ejs");
const pug = require("pug");
// const multerFilehandler = require('../multer');
// const multer = require('multer');


// const GoogleDriveService = require('../googleDriveService');
const validator = require("validator");
// const emailVerify = require("email-verify");
require("dotenv").config();
const path = require("path");
const pdf = require("html-pdf");
const router = express.Router();
// const { v4: uuidv4 } = require("uuid");
//schema model
const Register = require("../model/a_registration");
//middleware
// router.use(express.static(path.join(__dirname, "public")));
function generateUniqueID() {
  const timestamp = Date.now().toString(); // Get the current timestamp
  const randomNum = Math.floor(Math.random() * 900000) + 100000; // Generate a random 6-digit number
  const uniqueID = randomNum.toString() + timestamp; // Combine the random number and timestamp
  return "SAP" + uniqueID.substr(0, 6); // Return the first 6 digits of the combined ID
}
const generatePDF = (users) => {
  const templatePath = path.join(__dirname, "../public/reportpdf24.pug");
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
router.post("/A_Reg",async (req, res) => {
  let users = {
    token: generateUniqueID(),
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
    collegeName: req.body.collegeName,
    year: req.body.year,
    post: req.body.post,
    degree: req.body.degree
    

  };
  let email = req.body.email;
  //number 10 digits
  if (!validator.isLength(req.body.number, { min: 10, max: 10 })) {
    return res.status(400).json({msg:"!number"});
  }
  // Validate email
  if (!validator.isEmail(req.body.email)) {
    return res.status(400).json({msg:"!email"});
  }
  // user already exists
  const existingUser = await Register.findOne({ email: req.body.email });
  if (existingUser) {
    return res.status(401).json({ msg: "यह ईमेल पता पहले ही पंजीकृत है।" });
  }
  //saving to database
  try {
    const newUser = new Register(users);
    await newUser.save();
    // Generate PDF
    const pdfBuffer = await generatePDF(users);
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
        subject: "From Team Tooryanaad",
        text: "Thankyou for registration",
        html: `<b>${req.body.name} your registation details are: </b>`,
        attachments: [
          {
            filename: "report.pdf",
            content: pdfBuffer,
            encoding: "utf-8",
          },
        ],
      });
      // console.log("Message sent: %s", info.messageId);
    };
    await mail()
      .then(() => {
        res.status(200).json({ msg: "पंजीकरण सफल रहा!" });
        // console.log("Email sent successfully");
      })
      .catch((err) => {
        console.error("Error sending email:", err);
        res.status(402).json({ msg: "ईमेल भेजने में त्रुटि!" });
      });
    // creating pdf file
    // pug.renderFile(
    //   path.join(__dirname, "../public", "reportpdf.pug"),
    //   {
    //     users: users,
    //   },
    //   (err, data) => {
    //     if (err) {
    //       console.log(err);
    //       res.send(err);
    //     } else {
    //       let options = {
    //         height: "11.25in",
    //         width: "8.5in",
    //         header: {
    //           height: "20mm",
    //         },
    //         footer: {
    //           height: "20mm",
    //         },
    //       };
    //       pdf.create(data, options).toFile("test.pdf", function (err, data) {
    //         if (err) {
    //           res.send(err);
    //           console.log(err);
    //         } else {
    //           let email = req.body.email;
    //           //sending pdf  email
    //         }
    //       });
    //     }
    //   }
    // );
  } catch (error) {
    res.status(500).json({msg:"internal searver error"});
  }
});

router.get("/A_Count", async (req, res) => {
  try {
    const count = await Register.countDocuments();
    res.json({ count });
  } catch (error) {
    console.error("Error counting documents:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


module.exports = router;
