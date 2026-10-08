const express= require('express');
const router=express.Router();

const fs=require('fs');
const path= require('path');

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

    console.log(req.body);
    const username=req.body.username;
    const email=req.body.email;
    const password=req.body.password;

    let user=parsData.find((info)=> info.username == username && info.password == password);
    console.log("user exists",user);

    if(!username || !password || !email){
        return res.send("Enter the information");
    } 
    else{
    res.redirect('/home.ejs');
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
    res.redirect('/home');
})

router.get('/logout',(req,res)=>{
    res.send('logout');
})
module.exports=router;