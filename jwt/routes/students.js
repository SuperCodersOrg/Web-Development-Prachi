const express = require('express');

const router = express.Router();

const verifyToken = require('../middleware/midleware.js');

router.use(express.urlencoded({ extended: true }));

console.log(__dirname);

router.use(express.static('pulbc'));
router.use(express.json());

router.use(verifyToken);

router.get('/', (req, res) => {

   if (req.user.role != 'students')
      return res.redirect('/teacher/home');

      console.log("ShtmL")
      res.redirect('/studentHome.html');
})

router.get('/home', (req, res) => {

   if (req.user.role != 'students')
      return res.redirect('/teacher/home');
      console.log("ShtmL")
      res.redirect('/studentHome.html');
})

router.get("/result", (req, res) => {
   if (req.user.role != 'students')
      return res.redirect('/teacher/home');
      console.log("SRhtmL")
      res.redirect('/studentResult.html');
});

module.exports = router;