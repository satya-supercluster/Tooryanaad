
const mongoose = require("mongoose");
const validator = require("validator");

const regSchema = {
  token: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  number: {
    type: Number,
    required: true
  },
  scholarNumber: {
    type: Number,
    required: true
  },
  branch: {
    type: String,
    required: true
  },
  posts: {
    type: [String],
    required: true
  }
};

const Registration = mongoose.model('Ahvaan24', regSchema);
module.exports = Registration;
