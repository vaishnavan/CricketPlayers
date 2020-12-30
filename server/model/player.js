const mongoose = require('mongoose')



const playSchema = new mongoose.Schema({
    country:{
        type:String,
        required:true
    },
    playerName:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    s_rate:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    playAs:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model('Play',playSchema)


