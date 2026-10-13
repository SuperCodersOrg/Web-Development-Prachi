const express = require('express');
const port = 4200;
const app = express();

const authRoutes = require('./routes/auth')
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.redirect('/auth',authRoutes);
})

app.listen(port,(req,res)=>{
    console.log("Server is onLoad");
})