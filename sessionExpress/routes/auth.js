const express=require('express');

const router=express.Router();

router.use(express.json());
router.use(express.static("public"));


const authentication=(req,res,next)=>{
    if(req.session && req.session.user){
        return next();
    }
    return res.redirect("/login.html");
}
console.log(authentication);

router.get('/signin',(req,res)=>{
res.redirect('/signin.html');
})
router.post('/signin',(req,res)=>{
    if(res.r){}
})

// if(!name|| password || !removeEventListener){
//     return res.send("fil al th edetails");
// }
// if(useranme[name]){

// }

// if(role === '/student'){
//     res.redirect('')
// }
