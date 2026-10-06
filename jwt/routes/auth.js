const express = require('express');
const jwt=require('jsonwebtoken');

const router = express.Router();

router.use(express.json());

router.use(express.static("public"));

const cookie = require('cookie-parser');
// const verifyToken = require('../middleware/midleware.js');

// const app=express();
// app.use(cookie());
// const authoRoutes=require('');

// router.use( verifyToken);

const users = {
    student: { password: "787", role: "student" },
    teacher: { password: "5678", role: "teacher" },
};

const Cookie_Name = 'accessToken';
const Secret_Token = process.env.Secret_Token || "generating-secret-key-firstTime";

router.get('/signin', (req, res) => {
    res.redirect('/signin.html');
})

router.post('/signin', (req, res) => {
    console.log("user info",req.body);
    const username = req.body.username;
    const password = req.body.password;
    const role = req.body.role;

    console.log(username);
    if (!username || !password || !role) {
        return res.send("Fill all the details");
    }
    if (users[username]) {
        res.send("User already exist");
    }
    users[username] = {
        password,
        role,
    }

    const payload = {
        username: username,
        role: role,
    }

    const jwtToken = jwt.sign(payload, Secret_Token);

    res.cookie(Cookie_Name, jwtToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 1000
    });

    if (role == 'student') {
        res.redirect('/students/home');
    }
    else {
        res.redirect('/teacher/home');
    }
})

router.get('/login',(req, res) => {
    console.log("hdi");
    res.redirect('/login.html');
})

router.post('/login',(req, res) => {
    const useranme = req.body.useranme;
    const password = req.body.password;
    const role = req.body.role;
    const user = users[useranme];

    const payload = {
        username: useranme,
        role: role,
    }

    const jwtToken = jwt.sign(payload, Secret_Token);

    res.cookie(Cookie_Name, jwtToken);

    if (role == "student") {
        res.redirect('/students/home');
    }

    else if (role == "teacher") {
        res.redirect('/teacher/home');
    }

    else {

        res.redirect('/login.html');
    }
})

router.post('/logout',(req, res) => {
    res.clearCookie(Cookie_Name);
    return res.redirect('/login.html');
})

module.exports = router;