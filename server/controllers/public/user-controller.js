const User = require('../../models/user.js');

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

exports.login = (req, res) => {
    res.render('users/login');;
};
