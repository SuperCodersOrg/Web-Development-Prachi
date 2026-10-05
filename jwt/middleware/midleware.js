const jwt = require('jsonwebtoken');

const Cookie_Name = 'accessToken';
const Secret_Token = process.env.Secret_Token || "generating-secret-key-firstTime";

function verifyToken(req, res, next) {
    const token = req.cookies[Cookie_Name];

    if (!token) {

        return res.send("Token doesn't exist");

    }

    try {

        req.user = jwt.verify(token, Secret_Token);
        return next();

    }
    catch (error) {

        res.clearCookies(Cookie_Name);
        return res.send("Cookie is deleted !");

    }
}
module.exports = verifyToken;