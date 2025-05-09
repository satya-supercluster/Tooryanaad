import mongoose from "mongoose";

const eventIndividualRegistration = {
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

const EventIndividualRegistrations = mongoose.model('EventIndividualRegistrations25', eventIndividualRegistration);
export default EventIndividualRegistrations;
