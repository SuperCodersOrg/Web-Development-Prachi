const express=require('express');
const multer=require('multer');
const router= express.Router();
// const upload=multer({dest: 'uploads/'});
const path=require('path');

const storage=multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'uploads/')
    },
    filename: function(req,file,cb){
        
        cb(null,file.originalname);
    }
})
const upload=multer({
    storage: storage,
    limits:{fileSize: 4*1024*1024},
    fileFilter:(req,file,cb)=>{
        const extension= path.extname(file.originalname).toLowerCase();
        const allowedTypes=[".jpeg",".jpg",".png"];
        const allowedMimeTypes=["image/jpeg","image/png"];
        if(allowedTypes.includes(extension) && allowedMimeTypes.includes(file.mimetype)){
            cb(null,true);
        }
        else{
            cb(new Error("only JPG, JPEG, PNG images are allowed"));
        }
    }
})
router.get('/login',(req,res)=>{
    res.render('login');
})
// router.post('/login',upload.single('avatar'),(req,res)=>{

// console.log(req.file);
// res.render('display',{filename: '84167088db67ad9e69e3e3e67f5a7fad'});
// });

// router.post('/login',upload.array('avatar',12),(req,res)=>{
//     console.log(req.files);
//     res.render('display',{files:req.files});
// })

// router.post('/login',upload.fields([{name:'avatar',maxCount:2},{name: 'profile', maxCount: 8}]),(req,res)=>{
//     console.log(req.files);
//     // res.render('display',{avatar: req.files.avatar[0].filename});
//     res.render('display',{files:req.files});
// });

router.post('/login',upload.single('avatar'),(req,res)=>{

console.log(req.file);
res.render('display',{file: req.file});
});

module.exports=router;