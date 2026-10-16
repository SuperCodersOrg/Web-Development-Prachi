// const mongoose = require('mongoose');
// // const connectDb = async ()=>{
// //     try{
        
// //     }
// //
const mongoose = require('mongoose');
const connectDb = async ()=>{
try{
    
    await mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost:27017");
    console.log(mongoose);
}
catch(err){
    console.log("error is: ", err);
}

}
module.exports = connectDb;