const crypto = require('crypto'); 
const session = {};

function createSession(req){
    const sessionId = crypto.randomBytes(32).toString('hex');

    sessions[sessionId] = {
        username: userData.username,
        email: userData.email,
        createdAt: Date.now()
    };

    res.cookies('sessionId',sessionId);
}

module.exports = createSession;