
const mongoose = require("mongoose");
const validator = require("validator");

const TG_regSchema = {
  token: {
    type: String,
    required: true,
    unique:true
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
    type:String,
    required: true
  },                         
  competitions:{
    type :[String],
    required: true
  }
  ,

  Date:{
    type:Date,
    default:Date.now,
    required:true
  }


};

const TG_Registration = mongoose.model('TG_Registration23', TG_regSchema);
module.exports = TG_Registration;
