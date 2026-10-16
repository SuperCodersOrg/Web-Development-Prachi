const express = require('express');
const router = express.Router();

const fs = require('fs');
const path = require('path');

const cookie = require('cookie-parser');

const nodeMailer = require('nodemailer');

const jwt = require('jsonwebtoken')

const crypto = require('crypto');
const bcrypt = require('bcrypt');

const Cookie_Name = 'ecom-cookie';
const cookie_Security_Key = 'no-one-can-ever-guess-me';



router.use(express.json());

router.use(express.urlencoded({ extended: true }));

router.use(express.static("public"));

router.get('/login', (req, res) => {
    res.render('login');
})

router.post('/login', (req, res) => {

    const file = fs.readFileSync(path.join(__dirname, '..', 'data', 'userinfo.json'), 'utf8');
    const parsData = JSON.parse(file);

    console.log(req.body);
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    let user = parsData.find((info) => info.username == username && info.password == password);
    console.log("user exists", user);

    const payload = {
        username: username,
        email: email,
    }

    const token = jwt.sign(
        payload,
        cookie_Security_Key,
        { expiresIn: '1hr'}
    )
    res.cookie(Cookie_Name,token,{
        httpOnly: true,
        sameSite: 'lax',
        maxAge: 60 * 60 * 1000
    })

    if (!username || !password || !email) {
        // console.log("issue in thei");
        return res.send("Enter the information");
    }
    else {
        // console.log("issue in rendering");
        res.redirect('/home');
        // res.send("Dashboard using login post");
    }
})

router.get('/signin', (req, res) => {

    res.render('signin');

})
router.post('/signin', (req, res) => {

    const file = fs.readFileSync(path.join(__dirname, '..', 'data', 'userinfo.json'), 'utf8');
    const parsData = JSON.parse(file);

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    if (!username || !password || !email) {
        return res.send("Enter the information");
    }

    const payload = {
        username : req.body.username,
        email : req.body.email,
    }
    const token = jwt.sign(
        payload, 
        cookie_Security_Key,
        { expiresIn: '1hr'}
    )

    // checks where to redirect 
    res.cookie(Cookie_Name, token, {
        httpOnly: true ,
        maxAge: 60 * 60 * 1000,
    })

    const user = {
        username: username,
        email: email,
        password: password
    }

    console.log(parsData);
    console.log(req.body);

    parsData.push(user);

    fs.writeFileSync(path.join(__dirname, '..', 'data', 'userinfo.json'), JSON.stringify(parsData, null, 2));
    // res.send('dashboard');
    res.redirect('/home');
})

router.get('/forgot', (req, res) => {

    res.render('forgotPass');

})

router.post('/forgot', (req, res) => {

    const file = fs.readFileSync(path.join(__dirname, '..', 'data', 'userinfo.json'), 'utf8');
    const parsData = JSON.parse(file);

    const username = req.body.username;
    const email = req.body.email;
    // const password = req.body.password;

    console.log(req.body.username);
    // console.log(req.body.password);
    console.log(req.body.email);

    let user = parsData.find((info) => info.username == username && info.email == email);
    // console.log("user exists",user);

    const serverEmail = 'manchandaprachi69@gmail.com';
    const serverEmailPass = 'eulk pyip rmzy odes';

    if (!username || !email) {

        console.log("Enter info to forget information");
        return res.send("redirect to sign page as user doesn't exist");

    }

    else {
        const transporter = nodeMailer.createTransport({
            service: 'gmail',
            auth: {

                user: serverEmail,
                pass: serverEmailPass,

            },
        })

        // if(email == serverEmail || password == serverEmailPass){
        //     res.render('resetPassword',{
        //         error: true,
        //         message: "Email is not configerated"
        //     })
        // }

        if (user) {

            const token = crypto.randomBytes(32).toString('hex');
            const hashToken = bcrypt.hash(token, 10);

            console.log(token);
            const baseUrl = `http://localhost:${2700}`;
            const resetUrl = `${baseUrl}/auth/reset/${token}`;

            console.log(resetUrl);
            user.token = hashToken;
            user.expiryTime = Date.now() + 60 * 60 * 1000;

            try {
                transporter.sendMail({
                    from: serverEmail,
                    to: email,
                    subject: "Enter the new password",
                    text: "Click the link to reset Password.",
                    // html: `<p>Click the link to reset the password</p><a href='${resetUrl}'>Reset URL</a>`,
                    html: `<p>Click the link to reset the password</p><a href='${resetUrl}'>Reset URL</a><script></script>`,

                })
                res.send('Email is sent on your mail');
                
                console.log("Email sent");
                console.log(email);
            }
            catch (error) {

                console.log(error);
                delete user.token;
                delete user.expiryTime;

            }
        }
    }

    //valid Email  //user already exist // 
})

router.get('/reset/:token', (req, res) => {

    // console.log(req.params.token);
    res.render('resetPassword');

})

router.post('/reset', (req, res) => {

    console.log("token", req.body);
    // console.log(req.params.token)
    const file = fs.readFileSync(path.join(__dirname, '..', 'data', 'userinfo.json'), 'utf8');
    const parsData = JSON.parse(file);

    // const username = req.body.username;
    // const email = req.body.email;

    const newPass = req.body.password;
    const rePass = req.body.rePassword;

    if (newPass == rePass) {

        // res.redirect('/home');
        res.send("done");//redirect.

    }
    else {

        res.send("Password Doesn't match");

    }
    //
})

// router.get('/changePass',(req,res)=>{

//     // console.log("cahneged");
//     res.render('changePass');

// })

// router.post('/changePass',(req,res)=>{

//     const file=fs.readFileSync(path.join(__dirname,'..','data','userinfo.json'),'utf8');
// const parsData=JSON.parse(file);

// const username=req.body.username;
// const email = req.body.email;
// // const password = req.body.password;

// console.log(req.body.username);
// // console.log(req.body.password);
// console.log(req.body.email);

// let user=parsData.find((info)=> info.username == username && info.email == email );
// // console.log("user exists",user);

// const serverEmail='manchandaprachi69@gmail.com';
// const serverEmailPass='eulk pyip rmzy odes';

// if(!username  || !email){

//     console.log("Enter info to forget information");
//     return res.send("redirect to sign page as user doesn't exist");

// } 

// else{
//     const transporter= nodeMailer.createTransport({
//         service: 'gmail',
//         auth: {

//             user: serverEmail,
//             pass: serverEmailPass,

//         },
//     })

//     // if(email == serverEmail || password == serverEmailPass){
//     //     res.render('resetPassword',{
//     //         error: true,
//     //         message: "Email is not configerated"
//     //     })
//     // }

//     if(user){

//         const token = crypto.randomBytes(32).toString('hex');
//         const hashToken = bcrypt.hash(token,10);

//         console.log(token);
//         const baseUrl = `http://localhost:${2700}`;
//         const resetUrl = `${baseUrl}/auth/reset/${token}`;

//         console.log(resetUrl);
//         user.token = hashToken;
//         user.expiryTime = Date.now() + 60 * 60 * 1000;

//         try{
//         transporter.sendMail({
//             from: serverEmail,
//             to: email,
//             subject: "Enter the new password",
//             text: "Click the link to reset Password.",
//             html: `<p>Click the link to reset the password</p><a href='${resetUrl}'>Reset URL</a>`,
//         }) 
//         res.send('Email is sent on your mail');
//         // res.render('resetPassword');
//         console.log("Email sent");
//         console.log(email);
//         }
//         catch(error){

//             console.log(error);
//             delete user.token;
//             delete user.expiryTime;

//         }
//     }
// }



//     console.log("perhaps",req.body);

//     console.log("token",req.body);

//     // const file=fs.readFileSync(path.join(__dirname,'..','data','userinfo.json'),'utf8');
//     // const parsData=JSON.parse(file);

//     const newPass = req.body.password;
//     const rePass = req.body.rePassword;

//     if(newPass ==rePass){

//         res.send("done");//redirect.

//     }
//     else{

//         res.send("Password Doesn't match");

//     }

//     res.send("cahneged");

// })


router.get('/logout', (req, res) => {

    res.send('logout');

})
module.exports = router;