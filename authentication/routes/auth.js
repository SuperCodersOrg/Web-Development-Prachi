const express = require('express');
const router = express.Router();

router.get('login',(req,res)=>{
    res.render('login');
})
router.post('login',(req,res)=>{
    
})
router.get('signin',(req,res)=>{
    res.render('signin');
})
router.post('signin',(req,res)=>{
    
})
module.exports = router;