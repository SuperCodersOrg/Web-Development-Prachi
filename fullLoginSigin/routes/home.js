const express=require('express');
const router=express.Router();

const auth=require('router');

router.use('/auth',auth);

router.use('view engine','ejs');

router.get('/',(req,res)=>{
    console.log("udu");
    res.render('home',{
        username: req.body.username,
    })
})