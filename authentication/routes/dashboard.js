const express = require('express');
const router = express.Router();

const{ session } = require('../sessionMiddleware/sessionMiddleware');

const { sessionExpiration } = require('../sessionMiddleware/sessionMiddleware');

const { checkValidation } = require('../sessionMiddleware/sessionMiddleware.js');


router.get('/dashboard', checkValidation, sessionExpiration, (req, res) => {
    // console.log(req.cookies.sessionId.username);

    // const sessionId = req.cookies.sessionId;
    // const userSEssion = session[sessionId];

    // console.log(sessionId);
    // console.log("sessij",userSEssion);

    // if(sessionExpiration){
    //    return res.send("Session is expired");
    // }

    if(!req.session){
        return res.status(401).json({message: "Login first"});
    }

    res.render('dashboard',{username: req.session.username});
});


module.exports = router;