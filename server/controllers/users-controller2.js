const User = require('../models/user');
const passport = require('passport');

exports.register = (req, res, next) => {
    //let {username, password} = req.body;

    //let {username, password} = req.params;

    let username = 'ilya';
    let password = '1983';

    let user = new User({username, password});
    user.save();

    
    // req.logIn(user, function(err) {
    //         return err
    //           ? next(err)
    //           : res.status('200').json(user); //res.redirect('/');
    //       });

    //res.status('200').json(user);
}

exports.login = (req, res, next) => {
    //let {username, password} = req.body;


    passport.authenticate('local',
    function(err, user, info) {
      return err
        ? next(err)
        : user
          ? req.logIn(user, function(err) {
              return err
                ? next(err)
                : console.log(user);//res.redirect('/private');
            })
          : res.redirect('/');
    }
  )(req, res, next);

    //res.status('200').json({login: 'login'});
}

exports.logout = (req, res) => {
    let {username} = req.body;
    res.status('200').json({logout: 'logout'});
}
