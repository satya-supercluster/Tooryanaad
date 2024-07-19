const express = require("express");
const multer = require("multer");
const nodemailer = require("nodemailer");
const ejs = require("ejs");
const pug = require("pug");
const fs = require('fs');
const path = require("path");
const pdf = require("html-pdf");
const validator = require("validator");
require("dotenv").config();
const router = express.Router();
const { google } = require("googleapis");

const Register = require("./model/a_registration");
const multerFilehandler = require('./multer');
const GoogleDriveService = require('./googleDriveService');

// Initialize Express app if not already done
const app = express();

// Define the storage and other configurations for multer
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'uploads'); // Set your destination folder here
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  },
});

// Create an instance of Multer
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB limit
  },
});

// Authentication function
const authenticateGoogle = () => {
  const auth = new google.auth.GoogleAuth({
    keyFile: `${__dirname}/../../automatic-map-398602-ef7ba40c729d.json`, // Correct key file path
    scopes: 'https://www.googleapis.com/auth/drive',
  });
  return auth;
};

// Upload to Google Drive function
const uploadToGoogleDrive = async (file, auth) => {
  const fileMetadata = {
    name: file.originalname,
    parents: ["1_3OVWBc3U_TjtFkeY1KQ3eJFYWyCqDgZ"], // Change it according to your desired parent folder id
  };

  const media = {
    mimeType: file.mimetype,
    body: fs.createReadStream(file.path),
  };

  const driveService = google.drive({ version: "v3", auth });

  const response = await driveService.files.create({
    requestBody: fileMetadata,
    media: media,
    fields: "id",
  });
  return response;
};

// Delete file function
const deleteFile = (filePath) => {
  fs.unlink(filePath, () => {
    console.log("file deleted");
  });
};

// Route for uploading files to Google Drive
app.post("/upload-file-to-google-drive", upload.single("file"), async (req, res, next) => {
  try {
    if (!req.file) {
      res.status(400).send("No file uploaded.");
      return;
    }
    const auth = authenticateGoogle();
    const response = await uploadToGoogleDrive(req.file, auth);

    deleteFile(req.file.path);
    res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error uploading file to Google Drive.");
  }
});

// ... Your other routes and code ...

// Start your Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
