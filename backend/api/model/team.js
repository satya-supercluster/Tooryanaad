const mongoose = require('mongoose');
const validator = require('validator');

const teamSchema={
    alias:{
        type:String,
        unique:true,
        // required:true,
    },
    name:{
        type:String,
        // required:true,
    },
    post:{
        type:String,
        // required:true,
    },
    fb_:{
        type:String,
    },
    twitter_:{
        type:String,
    },
    instagram:{
        type:String,
    },
    google_:{
        type:String,
    },
    member_type:{
        type:Number,
        // required:true,
    },
    short_description:{
        type:String,
    },
    member_extra:{
        type:String,
    },
    order:{
        type:Number,
        // required:true,
    }
}

const Team = mongoose.model("Team",teamSchema);
module.exports= Team;