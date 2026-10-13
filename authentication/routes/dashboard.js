// const express = require('express');
// const router = express.Router();
// const auth=require('./auth');

// router.use(express.static('pulbc'));
// // router.use('/auth',auth);


// router.get('/dashboard',(req,res)=>{
//     res.render('dashboard',{username: "prachi"});
// })

// module.exports = router;

const express = require('express');
const router = express.Router();

// Mounted at '/' in server.js, so the full path is written here
router.get('/dashboard', (req, res) => {
    res.render('dashboard',{username: "jjj"});
});

module.exports = router;