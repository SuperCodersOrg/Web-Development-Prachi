const jwt = require('jsonwebtoken');

const Cookie_Name = 'accessToken';
const Secret_Token = "generating-secret-key-firstTime";

function verifyToken(req, res, next) {
    const token = req.cookies[Cookie_Name];

    console.log(token);
    if (!token) {

        // return res.send("Token doesn't exist");
        // return res.json({message: "Not Authenticate"});
        console.log("checkk");
        return res.redirect('/login.html');

    }

    try {
        console.log("try started");
        const decode = jwt.verify(token, Secret_Token);
        req.user=decode;
        console.log("kkk");
        return next();

    }

    catch (error) {
        console.log(error);
        res.clearCookie(Cookie_Name);
        // return res.send("Cookie is deleted !");
        // return res.json({message: "Not Authenticate"});
        return res.redirect('/login.html');
    }
}
module.exports = verifyToken;