const express=require('express');
const cors=require('cors');

const router=express.router();
app.use(cors());
app.use(express.json());

router.get('/',(req,res)=>{
    res.send("Student Portal");
})
router.get('/info',(req,res)=>{
    res.send("Student infiPortal");
})
router.get('/result',(req,res)=>{
    res.send("Student Portal");
})
router.get('/notification',(req,res)=>{
    res.send("Student Portal");
})

module.exports=router;