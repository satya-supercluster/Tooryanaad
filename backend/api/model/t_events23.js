const mongoose = require('mongoose');
const validator = require('validator');

const t_events23Schema = {
    title:{
        type :String,
        required:true,
        unique:true
    },
    alias:{
        type: String,
        required:false,
        unique:true,
    },
    datetime_start:{
        type:Date,
        default:Date.now,
    },
    datetime_end:{
        type:Date,
        default:Date.now,
    },
    description:{
        type: String,
        required:true,
        Unique: true
    },
    prize:{
        type: String,
        required: true,

    },
    is_prize_to_all:{
        type:Number,
        required:true,
    },
    rules:{
        type:Array,
        required: true

    },
    are_rules:{
        type:Number,
        required: true
    },
    coordinators:{
        type: String,
        required: true,
    },
    winnerf:{
        type: String,
    },
    winners:{
        type: String,
    },
    winnert:{
        type: String,
    },
    guest:{
        type: String,

    },
    tagline:{
        type:String,
        required:true
    },
    place:{
        type:String,

    },
    gallery:{
        type:String,
    },
    other:{
        type:String,

    },
    priority:{
        type:Number,
    },
    timeline:{
        type:String,
    },
    links:{
        type:String,
    },
}

const T_events23 = mongoose.model("T_events23",t_events23Schema);
module.exports= T_events23;