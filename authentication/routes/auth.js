const express = require('express');
const router = express.Router();

const fs=require('fs');
const path=require('path');

router.use(express.json());
router.use(express.urlencoded({extended: true }));
router.use(express.static("public"));

const { createSession } = require('./sessionMiddleware/sessionMiddleware.js');
app.use(createSession);

router.get('/login',(req,res)=>{
    res.render('login');
})
router.post('/login',(req,res)=>{
    
    const { username, password } = req.body;


    if (!username || !password) {
        return res.send('Enter the information');
    }
    const file = fs.readFileSync(path.join(__dirname,'..','data','userinfo.json'),'utf8');
    const parseFileData = JSON.parse(file);

    let userData = parseFileData.find((info) => info.username == username && info.password == password);

       if (!userData) {
        return res.send('Invalid username or password');
    }
    
    createSession(res,{username , password});
    res.redirect('/dashboard');
    console.log(req.body);
    // res.redirect('/dashboard');
   

})
router.get('/signin',(req,res)=>{
    res.render('signin');
})
router.post('/signin',(req,res)=>{
    
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
        
    }

    let userData = parseFileData.find((info) => info.username == username && info.password == password);
    console.log("user exists", user);
   
    console.log(parseFileData);
    console.log(req.body);

        if(!userData){

        createSession(res,{user});
        parseFileData.push(user);
        fs.writeFileSync(path.join(__dirname, '..', 'data', 'userinfo.json'), JSON.stringify(parseFileData, null, 2));
        
        // res.cookie();

        res.redirect('/dashboard');

        }
        else
        res.send("Already present");
    


})
module.exports = router;