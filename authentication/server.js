const express = require('express');
const port = 300;
const app = express();

const fs=require('fs');
const path=require('path');

const cookieParser=require('cookie-parser');

const authRoutes = require('./routes/auth.js');
const DashboardRoutes = require('./routes/dashboard.js')
const sessionMiddleWare = require('./sessionMiddleware/sessionMiddleware.js');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname,'public')));

app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));



app.get('/',(req,res)=>{
    res.render('index');
})

app.use(cookieParser());
// app.use(sessionMiddleWare);
// app.use(sessionMiddleWare);

app.use('/auth',authRoutes);
app.use('/',DashboardRoutes);


app.listen(port,(req,res)=>{
    console.log("Server is on Load");
})