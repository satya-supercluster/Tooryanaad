"use strict";

var express = require("express");

var nodemailer = require("nodemailer");

var ejs = require("ejs");

var pug = require("pug");

var validator = require("validator");

var emailVerify = require("email-verify");

var fs = require('fs');

require("dotenv").config();

var path = require("path"); // const pdf = require("html-pdf");


var router = express.Router();

var _require = require("uuid"),
    uuidv4 = _require.v4; //schema model


var Register = require("../model/t_registration"); //middleware


router.use(express["static"](path.join(__dirname, "public"))); // const generatePDF = (users) => {
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

router.post("/T_Reg", function _callee(req, res) {
  var users, attachments, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, competition, pdfPath, email, existingUser, newUser, emailTemplate, transporter, mail;

  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          // console.log("Received POST request:", req.body);
          users = {
            token: req.body.token,
            name: req.body.name,
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
          _context2.prev = 5;

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

          _context2.next = 13;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](5);
          _didIteratorError = true;
          _iteratorError = _context2.t0;

        case 13:
          _context2.prev = 13;
          _context2.prev = 14;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 16:
          _context2.prev = 16;

          if (!_didIteratorError) {
            _context2.next = 19;
            break;
          }

          throw _iteratorError;

        case 19:
          return _context2.finish(16);

        case 20:
          return _context2.finish(13);

        case 21:
          email = req.body.email; //number 10 digits

          if (validator.isLength(req.body.contact, {
            min: 10,
            max: 10
          })) {
            _context2.next = 24;
            break;
          }

          return _context2.abrupt("return", res.send("!contact"));

        case 24:
          if (validator.isEmail(req.body.email)) {
            _context2.next = 26;
            break;
          }

          return _context2.abrupt("return", res.send("!email"));

        case 26:
          _context2.next = 28;
          return regeneratorRuntime.awrap(Register.findOne({
            email: req.body.email
          }));

        case 28:
          existingUser = _context2.sent;

          if (!existingUser) {
            _context2.next = 31;
            break;
          }

          return _context2.abrupt("return", res.send("exists"));

        case 31:
          _context2.prev = 31;
          newUser = new Register(users); // console.log(newUser);

          _context2.next = 35;
          return regeneratorRuntime.awrap(newUser.save());

        case 35:
          // console.log(newUser);
          // Generate PDF
          // const pdfBuffer = await generatePDF(users);
          emailTemplate = "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\">\n        <title>Registration Confirmation</title>\n    </head>\n    <body style=\" margin: 0; font-family: Arial, sans-serif;\">\n        <div style=\"text-align: center; background-color: rgba(118, 118, 118, 0.408); margin: 10px; color: rgb(33, 33, 33); position: relative;\">\n            <div style=\"color: rgb(45, 45, 45); font-weight: bold; font-size: 40px;\">\u0924\u0942\u0930\u094D\u092F\u0928\u093E\u0926'23</div>\n            <div style=\"color: green; margin: 20px; font-size: 30px;\">\n                <b>\u0928\u092E\u0938\u094D\u0915\u093E\u0930,</b> ".concat(req.body.name, "\n            </div>\n            <div align=\"center\" style=\"display: flex; justify-content: center; align-items: center; margin-bottom: 20px; color:rgb(30, 30, 30);font-size: 20px; \">\n                \u0924\u0942\u0930\u094D\u092F\u0928\u093E\u0926'23 \u092E\u0947\u0902 \u092A\u0902\u091C\u0940\u092F\u0928 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0927\u0928\u094D\u092F\u0935\u093E\u0926\u0964<br>\n            </div>\n        </div>\n        <div align=\"center\" style=\"background-color: rgba(192, 192, 192, 0.5);  width: 100%; padding: 10px 0;\" >\n            \u092A\u094D\u0930\u0924\u093F\u092F\u094B\u0917\u093F\u0924\u093E \u0938\u0902\u092C\u0902\u0927\u093F\u0924 \u0915\u094B\u0908  \u0938\u0902\u0926\u0947\u0939 \u0939\u094B \u0924\u094B \u0939\u092E\u0938\u0947 \u0938\u0902\u092A\u0930\u094D\u0915 \u0915\u0930 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902, <a href=\"http://tooryanaad.in\">\u0938\u0902\u092A\u0930\u094D\u0915 \u0915\u0930\u0947\u0902</a> \u092F\u093E \u0939\u092E\u093E\u0930\u0940 \u0935\u0947\u092C\u0938\u093E\u0907\u091F \u092A\u0930 \u091C\u093E\u090F\u0902\u0964\n        </div>\n    </body>\n    </html>\n");
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

          _context2.next = 40;
          return regeneratorRuntime.awrap(mail().then(function () {
            res.send("success"); // console.log("Email sent successfully");
          })["catch"](function (err) {
            console.error("Error sending email:", err);
          }));

        case 40:
          _context2.next = 45;
          break;

        case 42:
          _context2.prev = 42;
          _context2.t1 = _context2["catch"](31);
          res.send(_context2.t1.message);

        case 45:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[5, 9, 13, 21], [14,, 16, 20], [31, 42]]);
}), router.get;
module.exports = router;