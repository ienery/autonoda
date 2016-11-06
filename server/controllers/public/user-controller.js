const User = require('../../models/user.js');
const passport = require('passport');

exports.register = (req, res, next) => {
    let { email, password, password2 } = req.body;

    if (email && password && password2){
        //console.log(email, password, password2);
        //res.redirect('/');

        if (password == password2){
            let user = new User({
                email,
                password
            });
            user.save();
        }

        return res.render('users/register-after');
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

        return res.render('users/register');
    }

    return res.render('users/register');
};

exports.login = (req, res, next) => {
    let { email, password } = req.body;


    if (email && password){

        // console.log(email, password);

        passport.authenticate('local', function(err, user, info) {
            if (err) { return next(err); }
            if (!user) { return res.redirect('/login'); }
            req.logIn(user, function(err) {
              if (err) { return next(err); }
              //return res.redirect('/login');
              //console.log('user', user);
              return res.render('users/login');
            });
          })(req, res, next);

        //return res.render('users/login');
    }
    else {
        return res.render('users/login');
    }
};

exports.logout = (req, res, next ) => {
    req.logout();
    res.redirect('/');
};
