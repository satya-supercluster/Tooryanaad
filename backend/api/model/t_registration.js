
const mongoose = require("mongoose");
const validator = require("validator");

const T_regSchema = {
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
    type:String,
    required: true
  },
  competitions:{
    type:[String],
    required: true
  }
  ,
  Date:{
    type:Date,
    default:Date.now,
    required:true
  }

};

const T_Registration = mongoose.model('T_Registration23', T_regSchema);
module.exports = T_Registration;
