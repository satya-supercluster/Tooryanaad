"use strict";

var express = require("express"); // const nodemailer = require("nodemailer");


var ejs = require("ejs");

var pug = require("pug"); // const multerFilehandler = require('../multer');
// const multer = require('multer');
// const GoogleDriveService = require('../googleDriveService');


var validator = require("validator");

var emailVerify = require("email-verify");

require("dotenv").config();

var path = require("path");

var pdf = require("html-pdf");

var router = express.Router();

var _require = require("uuid"),
    uuidv4 = _require.v4; //schema model


var Register = require("../model/a_registration"); //middleware
// router.use(express.static(path.join(__dirname, "public")));


function generateUniqueID() {
  var timestamp = Date.now().toString(); // Get the current timestamp

  var randomNum = Math.floor(Math.random() * 900000) + 100000; // Generate a random 6-digit number

  var uniqueID = randomNum.toString() + timestamp; // Combine the random number and timestamp

  return "SAP" + uniqueID.substr(0, 6); // Return the first 6 digits of the combined ID
}

var generatePDF = function generatePDF(users) {
  var templatePath = path.join(__dirname, "../public/reportpdf.pug");
  var compiledFunction = pug.compileFile(templatePath, {
    encoding: "utf-8"
  });
  var html = compiledFunction({
    users: users
  });
  var options = {
    format: "Letter",
    base: "file:///" + path.join(__dirname, "../public/"),
    // Use this if you have any CSS or image files in the "public" folder.
    childProcessOptions: {
      env: {
        OPENSSL_CONF: "/dev/null"
      }
    }
  };
  return new Promise(function (resolve, reject) {
    pdf.create(html, options).toBuffer(function (err, buffer) {
      if (err) {
        reject(err);
      } else {
        resolve(buffer);
      }
    });
  });
};

router.post("/A_Reg", function _callee(req, res) {
  var users, email, existingUser, newUser, transporter, mail;
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          users = {
            token: generateUniqueID(),
            name: req.body.name,
            email: req.body.email,
            number: req.body.number,
            collegeName: req.body.collegeName,
            year: req.body.year,
            post: req.body.post,
            degree: req.body.degree
          };
          email = req.body.email; //number 10 digits

          if (validator.isLength(req.body.number, {
            min: 10,
            max: 10
          })) {
            _context2.next = 4;
            break;
          }

          return _context2.abrupt("return", res.send("!number"));

        case 4:
          if (validator.isEmail(req.body.email)) {
            _context2.next = 6;
            break;
          }

          return _context2.abrupt("return", res.send("!email"));

        case 6:
          _context2.next = 8;
          return regeneratorRuntime.awrap(Register.findOne({
            email: req.body.email
          }));

        case 8:
          existingUser = _context2.sent;

          if (!existingUser) {
            _context2.next = 11;
            break;
          }

          return _context2.abrupt("return", res.send("exists"));

        case 11:
          _context2.prev = 11;
          newUser = new Register(users);
          _context2.next = 15;
          return regeneratorRuntime.awrap(newUser.save());

        case 15:
          // Generate PDF
          // const pdfBuffer = await generatePDF(users);
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
                      subject: "From Team Tooryanaad",
                      text: "Thankyou for registration",
                      html: "<b>".concat(req.body.name, " your registation details are: </b>"),
                      attachments: [{
                        filename: "report.pdf",
                        content: pdfBuffer,
                        encoding: "utf-8"
                      }]
                    }));

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            });
          };

          _context2.next = 19;
          return regeneratorRuntime.awrap(mail().then(function () {
            res.send("success"); // console.log("Email sent successfully");
          })["catch"](function (err) {
            console.error("Error sending email:", err);
          }));

        case 19:
          _context2.next = 24;
          break;

        case 21:
          _context2.prev = 21;
          _context2.t0 = _context2["catch"](11);
          res.send(_context2.t0.message);

        case 24:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[11, 21]]);
});
module.exports = router;