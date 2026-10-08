const express=require('express');
const app=express();
const port = 2700;

const jwt=require('jsonwebtoken');

const fs=require('fs');
const path=require('path');

const authRoutes=require("./routes/auth.js");


app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
res.render('index');
})
app.use('/auth',authRoutes);

app.listen(port,()=>{
    console.log("server is on load!");
})