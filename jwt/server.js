const express = require('express');

const cookieParser = require('cookie-parser');

const app = express();
const port = 3100;

const authoRoutes = require("./routes/auth.js");

const verifyToken=require('./middleware/midleware.js');
const studentRoutes = require("./routes/students.js");//
const teacherRoue = require("./routes/teacher.js");//

app.use(cookieParser());
// const jwt = require('jsonwebtoken');


// const Cookie_Name = 'accessToken';
// const Secret_Token = process.env.Secret_Token || "generating-secret-key-firstTime";

// const verifyToken=require('verifyToken');


const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'publc')));

app.get('/', (req, res, next) => {
    res.redirect('/index.html');
})

app.use('/auth', authoRoutes);
app.use('/students', verifyToken, studentRoutes);
app.use('/teacher', verifyToken, teacherRoue);

app.listen(port, (req, res) => {
    console.log("Sever is on load!");
})
