const express=require('express');

const router=express.Router();

router.use(express.urlencoded({ extended: true }));

const verifyToken=require('../middleware/midleware.js');

// router.use(verifyToken);
router.use(express.static('pulbc'));
router.use(express.json());

router.use(verifyToken);

router.get('/',verifyToken,(req,res)=>{

if(req.user.role!='teacher'){

   return res.redirect('/students/home');

}
res.redirect('/teacherHome.html');
})

router.get('/home',verifyToken,(req,res)=>{

if(req.user.role!='students')
{
   return res.redirect('/students/home');
}

console.log("ThtmL");
res.redirect('/teacherHome.html');
    
});

router.get("/role",verifyToken,(req,res)=>{
if(req.user.role!='students')
   return res.redirect('/students/home');

console.log("TRhtmL")
res.redirect('/teacherRole.html');
});

router.get('/logout',verifyToken,(req,res)=>{
    req.session.destroy((req,res)=>{
        res.redirect('/login.html');
    })
});

module.exports=router;