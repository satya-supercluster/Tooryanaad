"use strict";

var express = require("express");

var nodemailer = require("nodemailer");

var ejs = require("ejs");

var pug = require("pug"); // const multerFilehandler = require('../multer');
// const multer = require('multer');


var fs = require("fs"); // const GoogleDriveService = require('../googleDriveService');


var validator = require("validator");

var emailVerify = require("email-verify");

require("dotenv").config();

var path = require("path");

var pdf = require("html-pdf");

var router = express.Router();

var _require = require("uuid"),
    uuidv4 = _require.v4; //schema model
// const Register = require("../model/t_registration");


var G_Register = require("../model/tg_registration"); //middleware


router.use(express["static"](path.join(__dirname, "public")));

function generateUniqueID() {
  var timestamp = Date.now().toString(); // Get the current timestamp

  var randomNum = Math.floor(Math.random() * 900000) + 100000; // Generate a random 6-digit number

  var uniqueID = randomNum.toString() + timestamp; // Combine the random number and timestamp

  return "TRY" + uniqueID.substr(0, 6); // Return the first 6 digits of the combined ID
} // const generatePDF = (users) => {
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


router.post("/TG_Reg", function _callee(req, res) {
  var users, attachments, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, competition, pdfPath, email, existingUser, newUser, emailTemplate, transporter, mail;

  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          // ... existing code ..
          users = {
            token: req.body.token,
            teamName: req.body.teamName,
            representativeName: req.body.representativeName,
            email: req.body.email,
            contact: req.body.contact,
            college: req.body.college,
            competitions: req.body.competitions
          }; // console.log(users);
          // Create an array to store attachments

          attachments = []; // Loop through the 'posts' array and attach a PDF for each post

          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context2.prev = 6;

          for (_iterator = req.body.competitions[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            competition = _step.value;
            pdfPath = path.join(__dirname, '../public/', "".concat(competition, ".pdf")); // Check if the PDF file exists

            if (fs.existsSync(pdfPath)) {
              // If the PDF file exists, add it as an attachment
              attachments.push({
                filename: "".concat(competition, ".pdf"),
                path: pdfPath
              });
            } else {
              console.error("PDF file for post '".concat(competition, "' not found."));
            }
          }

          _context2.next = 14;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](6);
          _didIteratorError = true;
          _iteratorError = _context2.t0;

        case 14:
          _context2.prev = 14;
          _context2.prev = 15;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 17:
          _context2.prev = 17;

          if (!_didIteratorError) {
            _context2.next = 20;
            break;
          }

          throw _iteratorError;

        case 20:
          return _context2.finish(17);

        case 21:
          return _context2.finish(14);

        case 22:
          email = req.body.email; //number 10 digits

          if (validator.isLength(req.body.contact.toString(), {
            min: 10,
            max: 10
          })) {
            _context2.next = 25;
            break;
          }

          return _context2.abrupt("return", res.send("!number"));

        case 25:
          if (validator.isEmail(req.body.email)) {
            _context2.next = 27;
            break;
          }

          return _context2.abrupt("return", res.send("!email"));

        case 27:
          _context2.next = 29;
          return regeneratorRuntime.awrap(G_Register.findOne({
            email: req.body.email
          }));

        case 29:
          existingUser = _context2.sent;

          if (!existingUser) {
            _context2.next = 32;
            break;
          }

          return _context2.abrupt("return", res.send("exists"));

        case 32:
          _context2.prev = 32;
          newUser = new G_Register(users);
          _context2.next = 36;
          return regeneratorRuntime.awrap(newUser.save());

        case 36:
          // Generate PDF
          // const pdfBuffer = await generatePDF(users);
          emailTemplate = "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\">\n        <title>Registration Confirmation</title>\n    </head>\n    <body style=\" margin: 0; font-family: Arial, sans-serif;\">\n        <div style=\"text-align: center; background-color: rgba(118, 118, 118, 0.408); margin: 10px; color: rgb(33, 33, 33); position: relative;\">\n            <div style=\"color: rgb(45, 45, 45); font-weight: bold; font-size: 40px;\">\u0924\u0942\u0930\u094D\u092F\u0928\u093E\u0926'23</div>\n            <div style=\"color: green; margin: 20px; font-size: 30px;\">\n                <b>\u0928\u092E\u0938\u094D\u0915\u093E\u0930,</b> ".concat(req.body.teamName, "\n            </div>\n            <div align=\"center\" style=\"display: flex; justify-content: center; align-items: center; margin-bottom: 20px; color:rgb(30, 30, 30);font-size: 20px; \">\n                \u0924\u0942\u0930\u094D\u092F\u0928\u093E\u0926'23 \u092E\u0947\u0902 \u092A\u0902\u091C\u0940\u092F\u0928 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0927\u0928\u094D\u092F\u0935\u093E\u0926\u0964<br>\n            </div>\n        </div>\n        <div align=\"center\" style=\"background-color: rgba(192, 192, 192, 0.5);  width: 100%; padding: 10px 0;\" >\n            \u092A\u094D\u0930\u0924\u093F\u092F\u094B\u0917\u093F\u0924\u093E \u0938\u0902\u092C\u0902\u0927\u093F\u0924 \u0915\u094B\u0908  \u0938\u0902\u0926\u0947\u0939 \u0939\u094B \u0924\u094B \u0939\u092E\u0938\u0947 \u0938\u0902\u092A\u0930\u094D\u0915 \u0915\u0930 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902, <a href=\"http://tooryanaad.in\">\u0938\u0902\u092A\u0930\u094D\u0915 \u0915\u0930\u0947\u0902</a> \u092F\u093E \u0939\u092E\u093E\u0930\u0940 \u0935\u0947\u092C\u0938\u093E\u0907\u091F \u092A\u0930 \u091C\u093E\u090F\u0902\u0964\n        </div>\n    </body>\n    </html>\n");
          transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
              pass: process.env.REACT_APP_PASSKEY_,
              user: process.env.REACT_APP_EMAIL_
            }
          });

          mail = function mail() {
            return regeneratorRuntime.async(function mail$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return regeneratorRuntime.awrap(transporter.sendMail({
                      from: process.env.REACT_APP_EMAIL_,
                      to: "".concat(email),
                      subject: "तूर्यनाद'23 पंजीयन हेतु",
                      text: "Thankyou for registration",
                      html: emailTemplate,
                      attachments: attachments
                    }));

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            });
          };

          _context2.next = 41;
          return regeneratorRuntime.awrap(mail().then(function () {
            res.send("success"); // console.log("Email sent successfully");
          })["catch"](function (err) {
            console.error("Error sending email:", err);
          }));

        case 41:
          _context2.next = 46;
          break;

        case 43:
          _context2.prev = 43;
          _context2.t1 = _context2["catch"](32);
          res.send(_context2.t1.message);

        case 46:
          _context2.next = 52;
          break;

        case 48:
          _context2.prev = 48;
          _context2.t2 = _context2["catch"](0);
          console.error("Error:", _context2.t2);
          res.status(500).send("Internal Server Error");

        case 52:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 48], [6, 10, 14, 22], [15,, 17, 21], [32, 43]]);
});
module.exports = router;