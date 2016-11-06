//const main = require('../handlers/handlers-main.js');
const users = require('../controllers/api/users-api-controller.js');

module.exports = (app) => {

    // users
    app.post('/api/users/register', users.register);
    app.post('/api/users/login', users.login);
    app.post('/api/users/logout', users.logout);

};
