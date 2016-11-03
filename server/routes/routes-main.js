const main = require('../handlers/handlers-main.js');
//const users = require('./handlers/pages/users.js');

module.exports = (app) => {
    app.use(function(req, res, next){
        res.locals.ip = app.get('ip');
        res.locals.port = app.get('port');
        next();
    });

    app.get('/', main.home);
    app.get('/about', main.about);

    //app.get('/users', users.main);
};
