const User = require('../models/user');
const passport = require('passport');

exports.register = (req, res, next) => {
    //let {username, password} = req.body;

    //let {username, password} = req.params;

    let user = 'ilya';
    let password = '1983';

    let user1 = new User({user, password});
    user1.save();
    //res.status('200').json(user);

    // req.logIn(user, function(err) {
    //   if (err) { return next(err); }
    //     //return res.redirect('/users/' + user.username);
    //     console.log(user);
    //     passport.authenticate('local', function(err, user, info) {
    //       console.log(err, user, info);
    //       if (err) { return next(err); }
    //       if (!user) { return res.send('no user'); }
    //       console.log(user);
    //       // req.logIn(user, function(err) {
    //       //   if (err) { return next(err); }
    //       //     //return res.redirect('/users/' + user.username);
    //       // });
    //     })(req, res, next);
    //
    // });
}

exports.login = (req, res, next) => {
    console.log(req, res, next);
    passport.authenticate('local', function(err, user, info) {
          console.log(err, user, info);
          if (err) { return next(err); }
          if (!user) { return res.send('no user'); }
          console.log('user', user);
          return res.send('success user');
        //   req.logIn(user, function(err) {
        //     if (err) { return next(err); }
        //       //return res.redirect('/users/' + user.username);
        //       return res.send('success login');
        //   });
        })(req, res, next);

    // let user = 'ilya';
    //
    // let user = User.findOne({username}, (err, user) => {
    //     res.status('200').json(user);
    // });

}

exports.logout = (req, res) => {
    //let {username} = req.body;

    passport.authenticate('local', function(err, user, info) {
          console.log(err, user, info);
          if (err) { return next(err); }
          if (!user) { return res.send('no user'); }
          console.log('user', user);
          //return res.send('success user');
        //   req.logIn(user, function(err) {
        //     if (err) { return next(err); }
        //       //return res.redirect('/users/' + user.username);
        //       //return next();
        //   });
        })(req, res, next);

    res.status('200').json({logout: 'logout'});
}
