const express = require('express');
const router = express.Router();

//const mainController = require('../controllers/public/users/user-controller.js');
const layout = 'api';

router.get('/', async (req, res) => {
    let auth = req.isAuthenticated();
    if (auth) {
        //console.log(req.user.email);
        res.locals.userEmail = req.user.email;
    }
    res.render('main/index', { layout });
});

router.get('/unauthorized', (req, res) => {
    //res.status(403).send('unauthorized');
    res.status(403).render('main/unauthorized', { layout });
})

module.exports = router;
