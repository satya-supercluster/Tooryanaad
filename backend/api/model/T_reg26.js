const mongoose = require("mongoose");

const T26Reg = {
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

  contact: {
    type: Number,
    required: true
  },

  college: {
    type: String,
    required: true
  },

  competitions: {
    type: [String],
    required: true
  },

  Date: {
    type: Date,
    default: Date.now,
    required: true
  }
};

module.exports = mongoose.model('T26Reg', T26Reg);