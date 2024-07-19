const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = {

    name:{
        type: String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email Id already exists"],
        validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error("invalid Email")
            }
        }

    },
    subject:{
        type:String,
        required:true,
    },

    message:{
        type:String,
        required: true,
    }
};
  

//creating collection
const Contact= new mongoose.model('Contact',studentSchema);

module.exports = Contact;