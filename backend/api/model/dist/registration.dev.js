"use strict";

var mongoose = require("mongoose");

var validator = require("validator");

var regSchema = {
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
var Registration = mongoose.model('Ahvaan24', regSchema);
module.exports = Registration;