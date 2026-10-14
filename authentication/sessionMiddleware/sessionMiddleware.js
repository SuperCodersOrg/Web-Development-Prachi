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

    res.cookie('sessionId',sessionId,
        {
            maxAge: 15 *60 * 1000,
            httpOnly: true,
            secure: true,
            sameSite: 'lax'
        }
    );
    // next();
    return sessionId;
}

module.exports = {createSession};