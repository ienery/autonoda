const User = require('../models/users/user');

const passport       = require('passport');
const LocalStrategy  = require('passport-local').Strategy;

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, function(email, password, done){
      User.findOne({ email : email},function(err,user){
          return err
            ? done(err)
            : user
                //? password === user.password
                ? user.comparePasswords(password)
                    ? done(null, user)
                    : done(null, false, { message: 'Incorrect password.' })
                : done(null, false, { message: 'Incorrect username.' });
      });
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

module.exports = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());
};
