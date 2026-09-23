const express=require('express');
const router=express.router();
router.get('/',(req,res)=>{
    res.send("Teachers Portal");
})
router.get('/info',(req,res)=>{
    res.send("Info teacger Portal");
})
router.get('/timrTablr',(req,res)=>{
    res.send("Timne tbablr Portal");
})
router.get('/notification',(req,res)=>{
    res.send("Notify Portal");
})

module.exports=router;