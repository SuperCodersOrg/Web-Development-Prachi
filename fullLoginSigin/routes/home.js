const express=require('express');
const jwt = require('jsonwebtoken');
const router=express.Router();

const auth=require('router');

const verifyToken = require('../middleware/middleware.js');

router.use('/auth',auth);

// router.use('view engine','ejs');

router.use( verifyToken);

router.get('/',(req,res)=>{
    console.log("udu");
console.log(req.body);
    res.render('home',{username: username});
})
module.exports = router;