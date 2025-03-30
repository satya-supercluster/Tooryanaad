const mongoose = require("mongoose");

const registrationSchema = {
  token: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique:true,
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

const Registration = mongoose.model('Ahvaan25', registrationSchema);
module.exports = Registration;