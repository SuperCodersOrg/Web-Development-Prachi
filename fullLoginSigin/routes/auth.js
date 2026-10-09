const express= require('express');
const router=express.Router();

const fs=require('fs');
const path= require('path');

const nodeMailer = require('nodeMailer');

const crypto = require('crypto');
const bcrypt = require('bcrypt');

router.use(express.json());

router.use(express.urlencoded({extended: true}));

router.use(express.static("public"));

// function readFile(){
    // const file=fs.readFileSync(path.join(__dirname,'..','data','userinfo.json'),'utf8');
    // const parsData=JSON.parse(file);
// }

router.get('/login',(req,res)=>{
    res.render('login');
})

router.post('/login',(req,res)=>{

    const file=fs.readFileSync(path.join(__dirname,'..','data','userinfo.json'),'utf8');
    const parsData=JSON.parse(file);

    console.log("swww");

    console.log(req.body);
    const username=req.body.username;
    const email=req.body.email;
    const password=req.body.password;

    let user=parsData.find((info)=> info.username == username && info.password == password);
    console.log("user exists",user);

    if(!username || !password || !email){
        console.log("issue in thei");
        return res.send("Enter the information");
    } 
    else{
        console.log("issue in rendering");
        // res.redirect('/home');
        res.send("Dashboard using login post");
    }
})

router.get('/signin',(req,res)=>{
    
    res.render('signin');

})
router.post('/signin',(req,res)=>{

    const file=fs.readFileSync(path.join(__dirname,'..','data','userinfo.json'),'utf8');
    const parsData=JSON.parse(file);

    const username=req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    if(!username || !password || !email){
        return res.send("Enter the information");
    } 


    const user={
        username: username,
        email: email,
        password: password
    }

    console.log(parsData);
    console.log(req.body);
    
    parsData.push(user);

    fs.writeFileSync(path.join(__dirname,'..','data','userinfo.json'),JSON.stringify(parsData, null, 2));
    res.send('dashboard');
    // res.redirect('/home');
})

router.get('/forgot',(req,res)=>{

    res.render('forgotPass');

})

router.post('/forgot',(req,res)=>{

    const file=fs.readFileSync(path.join(__dirname,'..','data','userinfo.json'),'utf8');
    const parsData=JSON.parse(file);

    const username=req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    console.log(req.body.username);
    console.log(req.body.email);

    let user=parsData.find((info)=> info.username == username && info.password == password && info.email == email);
    console.log("user exists",user);


    const serverEmail='manchandaprachi69@gmail.com';
    const serverEmailPass='eulk pyip rmzy odes'

    if(!username || !password || !email){
        console.log("Enter info to forget information");
        return res.send("redirect to sign page as user doesn't exist");
    } 

    else{
        
        const transporter= nodeMailer.createTransport({

            auth: {

                gmail: serverEmail,
                password: serverEmailPass,

            },
            service: 'gmail',
    
        })

        if(email == serverEmail || password == serverEmailPass){
            res.render('respage',{
                error: true,
                message: "Email is not configerated"
            })
        }

        if(user){

            async function hashFuncction(){

            const token = crypto.randomBytes(32).toString('hex');
            const hashToken = await bcrypt.hash(token,10);

            const baseUrl = `http://localhost:${2700}`;
            const resetUrl = `${baseUrl}/auth/reset/${token}`;

            user.token = hashToken;
            user.expiryTime = Date.now() + 60*60*1000;

            }
            hashFuncction();

            try{
            transporter.sendMail({
                from: serverEmail,
                to: email,
                subject: "Enter the new password",
                text: "Click the link to reset Password."
            })
            }
            catch(error){
                delete user.token;
                delete user.expiryTime;
                console.log(error);
            }

        }

        


    //    res.render('changePass');

    }
    //valid Email  //user already exist // 

})

router.get('/logout',(req,res)=>{
    res.send('logout');
})
module.exports=router;