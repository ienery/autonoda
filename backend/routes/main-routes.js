const express = require('express');
const router = express.Router();

//const mainController = require('../controllers/public/users/user-controller.js');

router.get('/', async (req, res) => {
    let auth = req.isAuthenticated();
    if (auth) {
        //console.log(req.user.email);
        res.locals.userEmail = req.user.email;
    }
    res.render('main/index');
});

module.exports = router;
