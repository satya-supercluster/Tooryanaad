import mongoose from "mongoose";

const teamSchema={
    alias:{
        type:String,
        unique:true,
    },
    name:{
        type:String,
    },
    post:{
        type:String,
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
    },
    short_description:{
        type:String,
    },
    member_extra:{
        type:String,
    },
    order:{
        type:Number,
    }
}

const Team = mongoose.model("Team",teamSchema);
export default Team;