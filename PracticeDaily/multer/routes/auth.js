const express=require('express');
const multer=require('multer');
const router= express.Router();
const upload=multer({dest: 'uploads/'});

router.get('/login',(req,res)=>{
    res.render('login');
})
// router.post('/login',upload.single('avatar'),(req,res)=>{

// console.log(req.file);
// res.render('display',{filename: '84167088db67ad9e69e3e3e67f5a7fad'} );
// });

router.post('/login',upload.array('avatar',12),(req,res)=>{
    console.log(req.files);
    res.render('display',{files:req.files});
})



module.exports=router;