const crypto = require('crypto'); 
const session = {};

function createSession(res, userData){
    const sessionId = crypto.randomBytes(32).toString('hex');
    console.log("kjkj",userData);

    session[sessionId] = {
        username: userData.username,
        email: userData.email,
        createdAt: Date.now()
    };
    
console.log(session[sessionId]);
    res.cookie('sessionId',sessionId,
        {
            maxAge: 5 *60 * 1000,
            httpOnly: true,
            secure: false,
            sameSite: 'lax'
        }
    );
    
    return sessionId;
}

function checkValidation(req,res,next){

    const sessionId = req.cookies.sessionId;
    const Usersession = session[sessionId];

    if(!Usersession){
        req.session = null;
        // return res.redirect('/auth/login')
    }
    else{
    req.session = Usersession; 
    }
    next();

}

function sessionExpiration(req,res,next){

    const sessionId = req.cookies.sessionId;
    const userSEssion = session[sessionId];


        // const sessionId = req.cookies.sessionId;


        if(!userSEssion){
       return res.status(401).send('Session expired');
        }

    const timeElasped = Date.now() - userSEssion.createdAt;
    const expirationTime = 5 * 60 * 1000;
        
    console.log(timeElasped);
    
    if(timeElasped >= expirationTime){

        delete session[sessionId];

        res.clearCookie('sessionId',{
        httpOnly: true,
        secure: false,
        sameSite: 'lax'
        })
        return res.status(401).send('session Expired');
    }
    
    next();

}

module.exports = {createSession , session, checkValidation, sessionExpiration};