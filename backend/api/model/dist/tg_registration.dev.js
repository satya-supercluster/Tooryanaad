"use strict";

var mongoose = require("mongoose");

var validator = require("validator");

var TG_regSchema = {
  token: {
    type: String,
    required: true,
    unique: true
  },
  teamName: {
    type: String,
    required: true
  },
  representativeName: {
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
    "default": Date.now,
    required: true
  }
};
var TG_Registration = mongoose.model('TG_Registration23', TG_regSchema);
module.exports = TG_Registration;