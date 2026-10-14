const express = require('express');
const router = express.Router();



router.get('/dashboard', (req, res) => {
    console.log(req.cookies.session);
    res.render('dashboard',{username: req.cookies.session});
});

module.exports = router;