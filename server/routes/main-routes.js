const main = require('../controllers/public/main-controller.js');
const users = require('../controllers/public/user-controller.js');

module.exports = (app) => {
    app.use(function(req, res, next){
        res.locals.ip = app.get('ip');
        res.locals.port = app.get('port');
        next();
    });

    // main routes
    app.get('/', main.home);
    app.get('/about', main.about);

    // users routes
    app.get('/register', users.register);
    app.post('/register', users.register);

    app.get('/login', users.login);
};
