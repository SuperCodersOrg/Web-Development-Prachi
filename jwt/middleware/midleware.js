const jwt = require('jsonwebtoken');

const Cookie_Name = 'accessToken';
const Secret_Token = process.env.Secret_Token || "generating-secret-key-firstTime";

function verifyToken(req, res, next) {
    const token = req.cookies[Cookie_Name];

    if (!token) {

        // return res.send("Token doesn't exist");
        // return res.json({message: "Not Authenticate"});
        return res.redirect('/signin.html');

    }

    try {

        req.user = jwt.verify(token, Secret_Token);
        return next();

    }

    catch (error) {

        res.clearCookie(Cookie_Name);
        // return res.send("Cookie is deleted !");
        // return res.json({message: "Not Authenticate"});
        return res.redirect('/signin.html');
    }
}
module.exports = verifyToken;