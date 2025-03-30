
const mongoose = require("mongoose");

const regSchema = {
  token: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  scholar: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  vertical: {
    type: [String],
    required: true,
  },
  Date: {
    type: Date,
    default: Date.now,
    required: true,
  },
};

const Registration = mongoose.model('Ahvaan25', regSchema);
module.exports = Registration;
