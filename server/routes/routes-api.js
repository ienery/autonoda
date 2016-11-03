//const main = require('../handlers/handlers-main.js');
//const users = require('./handlers/pages/users.js');

module.exports = (app) => {
    app.get('/api*', function(req, res) {
        res.send('This is not implemented now');
    });
};
