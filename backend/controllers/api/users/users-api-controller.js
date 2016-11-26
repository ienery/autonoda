const User = require('../../../models/users/user.js');
//const passport = require('passport');

exports.users = async (req, res, next) => {

    try {
        let users = await User.find({});

        users = users.map(user => {
            const {email, _id} = user;
            return {email, _id};
        });

        res.status('200').json(users);
    } catch (err) {
        return next(err);
    }

};
