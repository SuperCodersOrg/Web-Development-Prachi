const express=require('express');

const router=express.Router();

router.use(express.json());
router.use(express.static("public"));


const authentication=(req,res,next)=>{
    if(req.session && req.session.user){
        return next();
    }
    return res.redirect("/login.html");
}
const users={
    student: { password: "787" ,  role: "student" },
    teacher: { password: "5678", role: "teacher" },
};

console.log(authentication);

router.get('/signin',(req,res)=>{
res.redirect('/signin.html');
})
router.post('/signin',(req,res)=>{
    // const {username , password, role}=req.body;
    const username=req.body.username;
    const password=req.body.password;
    const role=req.body.role;

    if(!username || !password || !role){
        return res.send("Fill all the details");
    } 
    if(users[username]){
        res.send("User already exist");
    }
    users[username]={
        password,
        role,
    }
    req.session.user={ username, role};
    if(role=='student'){
        res.redirect('./student/home');
    }
    else{
        res.redirect('./teacher/home');
    }
})
router.get('/login',(req,res,next)=>{
    res.redirect('/login.html');
})

router.post('/login',(req,res)=>{
const useranme=req.body.useranme;
const password=req.body.password;
const role=req.body.role;
const user=users[useranme];
if(user && user.password== password){
    req.session.user={
        useranme,
        role
    }

if(role=="student"){
    req.redirect('./student/home');
}
else{
    req.redirect('./teacher/home');
}
}
else{
    req.redirect('/login.html');
}
})

module.exports={
     router ,authentication,
}