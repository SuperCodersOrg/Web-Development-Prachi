const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        username: {
            type: string,
            required: true,
            
        },
        email: {
            type: string,
            required: true,
            unique: true
        },
        password: {
            type: string,
            required: true,
            unique: true 
        },
        token: String,
        expiryTime: {
            type: Date,
            default: Date.now(),
        },
       
    },
     { 
            timestamps: true 
        }
);

module.exports=mongoose.module("user",userSchema);