//const User = require('../../../models/users/user.js');
//const passport = require('passport');

exports.index = async (req, res, next) => {
    res.render('users/users');
};
