const express=require('express');
const multer=require('multer');
const router= express.Router();
const upload=multer({dest: 'uploads/'});

router.get('/login',(req,res)=>{
    res.render('login');
})
router.post('/login',upload.single('avatar'),(req,res)=>{

console.log(req.file);
res.render('/login');
});
module.exports=router;