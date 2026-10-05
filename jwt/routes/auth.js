const express=require('express');

const router=express.Router();

const cookie=require('cookie-parser');
app.use(cookie());
router.use(express.json());
router.use(express.static("public"));
app.use('/auth', authoRoutes);

const users={
    student: { password: "787" ,  role: "student" },
    teacher: { password: "5678", role: "teacher" },
};

const Cookie_Name='accessToken';
const Secret_Token=process.env.Secret_Token || "generating-secret-key-firstTime";


router.get('/signin',(req,res)=>{
res.redirect('/signin.html');
})
router.post('/signin',(req,res)=>{

    const username=req.body.username;
    const password=req.body.password;
    const role=req.body.role;

    if(!username || !password || !role){
        return res.send("Fill all the details");
    } 
    if(users[username]){
        res.send("User already exist");
    }
    users[username] = {
        password,
        role,
    }

    // const payload = {
    //     username: username,
    //     role: role,
    // }

   const jwtToken = jwt.sign(Secret_Token);

   res.cookie(Cookie_Name,jwtToken);

    // req.session.user={ username, role};
    // if(role=='student'){
    //     res.redirect('/students/home');
    // }
    // else{
    //     res.redirect('/teacher/home');
    // }
})

router.get('/login',(req,res,next)=>{
    res.redirect('/login.html');
})

router.post('/login',(req,res)=>{
const useranme=req.body.useranme;
const password=req.body.password;
const role=req.body.role;
const user=users[username];
// if(user && user.password== password){
//     req.session.user={
//         useranme,
//         role
//     }

// if(role=="student"){
//     res.redirect('/students/home');
// }
// else{
//     res.redirect('/teacher/home');
// }
// console.log(req.body);
// // console.log(user);
// }
// else{

    const jwtToken = jwt.sign(Secret_Token);

   res.cookie(Cookie_Name,jwtToken);

    res.redirect('/login.html');
// }
})

module.exports=router;