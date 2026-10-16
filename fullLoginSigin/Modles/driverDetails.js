// const mongoose = require('mongoose');

// const userSchemav = new mongoose.Schema({
// name: {
//     typr: String,
//     required: true,
//     trim: true,
// },
// email:{
//     type: String,
//     required: true,
//     unique: [true, "EMail already exist"],
//     lowecase : true,
//     trim: true
// },
// passworrd:{
//     type: String,
//     required: true
// },

// });
// module.exports = mongoose.model


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email is not registered"],
        lowercase: true,
        trim: true, 
    },
    password: {
        type: String,
        required: true,
        
    }
})