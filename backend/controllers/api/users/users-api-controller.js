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

exports.delete = async (req, res, next) => {
    const { _id } = req.params;

    try {
        let { result:{ok} } = await User.remove({ _id });

        let results = null;

        if (ok === 1) {
            results = {
                results: 'success'
            };
        } else {
            results = {
                error: 'error'
            };
        }
        res.status('200').json(results);
    } catch (err){
        return next(err);
    }

    // try {
    //     let users = await User.find({});
    //
    //     users = users.map(user => {
    //         const {email, _id} = user;
    //         return {email, _id};
    //     });
    //
    //     res.status('200').json(users);
    // } catch (err) {
    //     return next(err);
    // }

};
