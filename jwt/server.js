const express=require('express');


const cookie=require('cookie-parser');

const  port= 3100;
const app=express();

const jwt= require('jsonwebtoken');
app.use(cookie());

const Cookie_Name='accessToken';
const Secret_Token=process.env.Secret_Token || "generating-secret-key-firstTime";

const authoRoutes=require("./middleware/midleware.js");
const studentRoutes=require("./routes/students.js");//
const teacherRoue=require("./routes/teacher.js");//

const path = require('path');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'publc')));

app.get('/',(req,res,next)=>{
    res.redirect('/index.html');
})

app.use('/auth', authoRoutes);
app.use('/students',authoRoutes,studentRoutes);
app.use('/teacher',authoRoutes,teacherRoue);


app.listen(port,(req,res)=>{
    console.log("Sever is on load!");
})
