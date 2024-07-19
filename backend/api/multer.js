const multer = require("multer");

// Define the storage and other configurations for multer
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, `${__dirname}/audio-files`);
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  },
});

// Create an instance of Multer
const multerFilehandler = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB limit
  },
});

// Define a method to get the instance
function getInstance() {
  return multerFilehandler;
}

module.exports = {
  getInstance,
};
