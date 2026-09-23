const express=require('express');
// const app=express();
// console.log(express);
const router=express.Router();

router.use(express.urlencoded({ extended: true }));


// const path=require('path');
console.log(__dirname);
// const publc=path.join(__dirname,'/auth.js');

router.use(express.static('pulbc'));
router.use(express.json());

// app.use(cors());

router.get('/',(req,res)=>{

// if(req.session.role!='students')
//    return res.redirect('/teacher/home');
console.log("ShtmL")
res.redirect('/studentHome.html');
})

router.get('/home',(req,res)=>{

// if(req.session.role!='students')
//    return res.redirect('/teacher/home');
console.log("ShtmL")
res.redirect('/studentHome.html');
})

router.get("/result",(req,res)=>{
    // if(req.session.role!='students')
//    return res.redirect('/teacher/home');
console.log("SRhtmL")
res.redirect('/studentResult.html');
});

module.exports=router;