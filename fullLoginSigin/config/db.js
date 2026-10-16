// const mongoose = require('mongoose');
// // const connectDb = async ()=>{
// //     try{
        
// //     }
// //
const mongoose = require('mongoose');
const connectDb = async ()=>{
try{
    
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(mongoose);
}
catch(err){
    console.log("error is: ", err);
}

}
module.exports = connectDb;