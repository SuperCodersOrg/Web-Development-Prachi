const express = require('express');
const router = express.Router();

const fs=require('fs');
const path=require('path');

router.use(express.json());
router.use(express.urlencoded({extended: true }));
router.use(express.static("public"));


const { createSession} = require('../sessionMiddleware/sessionMiddleware');
// router.use(createSession);

const { checkValidation } = require('../sessionMiddleware/sessionMiddleware.js');

const { session } = require('../sessionMiddleware/sessionMiddleware.js');

const { sessionExpiration } = require('../sessionMiddleware/sessionMiddleware.js');

router.get('/login',(req,res)=>{
    res.render('login');
})
router.post('/login',checkValidation,sessionExpiration,(req,res)=>{
    
    if(req.session){
        
    res.redirect('/dashboard');

    }

    const { username, password, email } = req.body;

    if (!username || !password) {
        return res.send('Enter the information');
    }
    const file = fs.readFileSync(path.join(__dirname,'..','data','userinfo.json'),'utf8');
    const parseFileData = JSON.parse(file);

    let userData = parseFileData.find((info) => info.username == username && info.password == password);

       if (!userData) {
        return res.send('Invalid username or password');
    }

     const user = {
        username: userData.username,
        email: userData.email,
        password: userData.password
    }
    
    console.log(req.session);
    createSession(res,user);
    console.log(req.body);
    res.redirect('/dashboard');
   

})
router.get('/signin',(req,res)=>{
    res.render('signin');
})
router.post('/signin',checkValidation,(req,res)=>{
    
    const file = fs.readFileSync(path.join(__dirname,'..','data','userinfo.json'),'utf8');
    const parseFileData = JSON.parse(file);
    console.log(req.body);

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

     if (!username || !password || !email) {
        return res.send("Enter the information");
    }
    
    const user = {
        username: username,
        email: email,
        password: password
        
    }

    let userData = parseFileData.find((info) => info.username == username && info.password == password);
    console.log("user exists", user);
   
    console.log(parseFileData);
    console.log(req.body);

        if(!userData){

        createSession(res,user);
        parseFileData.push(user);
        fs.writeFileSync(path.join(__dirname, '..', 'data', 'userinfo.json'), JSON.stringify(parseFileData, null, 2));
        
        // res.cookie();

        res.redirect('/dashboard');

        }
        else
        res.send("Already present");
    


})

router.get('/logout',(req,res)=>{

    res.render('logout');

})

router.post('/logout',(req,res)=>{
    const sessionId = req.cookies.sessionId;

    delete session[sessionId];

    res.clearCookie('sessionId',{
        httpOnly: true,
        secure: false,
        sameSite: 'lax'
    })

    console.log("session id ",sessionId);
    console.log("cookies are cleared",req.cookies);

    return res.send('Successfully Logout!');

})
module.exports = router;