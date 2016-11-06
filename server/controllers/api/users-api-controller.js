const User = require('../../models/user');

exports.register = (req, res, next) => {
    res.status('200').json({register: 'register'});
}

exports.login = (req, res, next) => {
    res.status('200').json({login: 'login'});
}

exports.logout = (req, res, next) => {
    res.status('200').json({logout: 'logout'});
}
