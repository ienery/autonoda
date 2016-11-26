const User = require('../../../models/users/user.js');
const passport = require('passport');

const layout = 'api';

exports.register = async (req, res, next) => {
    let { email, password, password2 } = req.body;

    if (email && password && password2){
        //console.log(email, password, password2);
        //res.redirect('/');

        if (password == password2){
            //console.log(email, password);

            let user = new User({
                email,
                password
            });

            try {
                await user.save();
            } catch (err) {
                return next(err);
            }

            //console.dir(user);
            return res.render('users/user/register-after-success', { layout });
        } else {
            return res.render('users/user/register-after-error', { layout });
        }


    }
    else if (email && password) {
        //console.log(email, password);

        User.findOne({email}, (err, user) => {
            if (err) {
                next(err);
            };

            try {
                user.comparePasswords(password);
            }
            catch (err) {
                return next(err);
            }

        });

        return res.render('users/user/register', { layout });
    }

    return res.render('users/user/register', { layout });
};

exports.login = (req, res, next) => {
    let { email, password } = req.body;

    //console.log(email, password);

    if (email && password){

        //console.log(email, password);

        passport.authenticate('local', function(err, user, info) {
            if (err) { return next(err); }
            if (!user) { return res.redirect('/user/login'); }
            req.logIn(user, function(err) {
              if (err) { return next(err); }
              //return res.redirect('/login');
              //console.log('user', user);
              return res.render('users/user/login-after-success', { layout });
            });

          })(req, res, next);

          //return res.render('users/user/login-after-error');
        //return res.render('users/login');
    }
    else {
        return res.render('users/user/login', { layout });
    }
};

exports.logout = (req, res, next ) => {
    req.logout();
    res.redirect('/');
};
