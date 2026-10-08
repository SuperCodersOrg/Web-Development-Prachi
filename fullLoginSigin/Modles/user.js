const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        name: {
            type: string,
            required: true
        },
        email: {
            type: string,
            required: true,
            unique: true
        },
        age: {
            type: Number,
            default: 18 
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        }
    }
)

module.exports=mongoose.module("user",userSchema);