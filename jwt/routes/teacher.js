const express=require('express');

const router=express.Router();

router.use(express.urlencoded({ extended: true }));

// const verifyToken=require('verifyToken');

router.use(express.static('pulbc'));
router.use(express.json());

router.get('/',(req,res)=>{
if(req.body.role!='teacher')
   return res.redirect('/students/home');

res.redirect('/teacherHome.html');
})

router.get('/home',(req,res)=>{
if(req.body.role!='students')

   return res.redirect('/students/home');

console.log("ThtmL");
res.redirect('/teacherHome.html');
    
});

router.get("/role",(req,res)=>{
if(req.body.role!='students')

   return res.redirect('/students/home');

console.log("TRhtmL")
res.redirect('/teacherRole.html');
});

// router.get('/logout',(req,res)=>{
//     req.session.destroy((req,res)=>{
//         res.redirect('/login.html')
//     })
// });

module.exports=router;