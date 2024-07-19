
const mongoose = require("mongoose");
const validator = require("validator");

const A_regSchema = {
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
  number: {
    type: Number,
    required: true
  },
  collegeName: {
    type:String,
    required: true
  },
  degree: {
    type: String,
    required: true
  },
  post: {
    type: String,
    required: true
  },
  year:{
    type:String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
};

const A_Registration = mongoose.model('A_Registration24', A_regSchema);
module.exports = A_Registration;
