const mongoose = require("mongoose");

const ambassadorRegistrationSchema = {
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

const AmbassadorRegistration = mongoose.model('AmbassadorRegistration25', ambassadorRegistrationSchema);
module.exports = AmbassadorRegistration;
