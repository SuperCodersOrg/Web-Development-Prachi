const express=require('express');
// const app=express();
// console.log(express);
const router=express.Router();

router.use(express.urlencoded({ extended: true }));

// router.use(express.json());
// app.use(cors());

router.use(express.static('pulbc'));
router.use(express.json());

router.get('/',(req,res)=>{
// if(req.session.role!='teacher')
// {
//    return res.redirect('/students/home');
// }
res.redirect('/teacherHome.html');
})

router.get('/home',(req,res)=>{
// if(req.session.role!='students')
// {
//    return res.redirect('/students/home');
// }
console.log("ThtmL")
res.redirect('/teacherHome.html');
    
});

router.get("/role",(req,res)=>{
// if(req.session.role!='students')
// {
//    return res.redirect('/students/home');
// }
console.log("TRhtmL")
res.redirect('/teacherRole.html');
});
module.exports=router;