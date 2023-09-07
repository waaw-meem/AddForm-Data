const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName:{
        type: String,
        required: true 
    },
    userEmail:{
        type: String,
        required: true 
    },
    shortBio:{
        type: String,
        required: true 
    }
})

module.exports = mongoose.model('User',userSchema)