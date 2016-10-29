'use strict'

const express = require('express');
const app = express();

const config = require('./config');
const credentials = require('./config/credentials.js');

app.set('port', config.get("port"));


// BEGIN cookie - session
app.use(require('body-parser').urlencoded({ extended: true }));

const MongoSessionStore = require('session-mongoose')(require('connect'));
const sessionStore = new MongoSessionStore({ url:
    credentials.mongo[app.get('env')].connectionString });

app.use(require('cookie-parser')(credentials.cookieSecret));

app.use(require('express-session')({
    resave: false,
    saveUninitialized: false,
    secret: credentials.cookieSecret,
    store: sessionStore,
}));
// END cookie - session


// BEGIN TEST Passport

const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
});

const User = mongoose.model('user', UserSchema);

const passport       = require('passport');
const LocalStrategy  = require('passport-local').Strategy;

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function(username, password,done){
  User.findOne({ username : username},function(err,user){
    return err
      ? done(err)
      : user
        ? password === user.password
          ? done(null, user)
          : done(null, false, { message: 'Incorrect password.' })
        : done(null, false, { message: 'Incorrect username.' });
  });
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});


passport.deserializeUser(function(id, done) {
  User.findById(id, function(err,user){
    err
      ? done(err)
      : done(null,user);
  });
});

app.use(passport.initialize());
app.use(passport.session());


app.use(function(req, res, next){
     const a = req.isAuthenticated();
     console.log(a);
     next();
});

// END TEST passport

// START logging
switch(app.get('env')){
    case 'development':
        // сжатое многоцветное журналирование для
        // разработки
        app.use(require('morgan')('dev'));
        break;
    case 'production':
        // модуль 'express-logger' поддерживает ежедневное
        // чередование файлов журналов
        app.use(require('express-logger')({
            path: __dirname + '/log/requests.log'
        }));
        break;
}
// END logging

// START templates
const handlebars = require('express-handlebars');

app.engine('handlebars', handlebars({
            extname:'handlebars',
            defaultLayout:'main.handlebars',
            layoutsDir: './server/views/layouts',
            partialsDir:'./server/views/partials'
        }));

app.set('views','./server/views/pages');
app.set('view engine', 'handlebars');
// END templates

// START static
app.use(express.static(__dirname + '/public'));
// END static

app.disable('x-powered-by');

// custom page 500
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

// custom page 404
app.use(function(req, res){
    res.status(404);
    res.render('404');
});

function startServer() {
    app.listen(app.get('port'), function(){
        console.log( 'Express запущено в режиме ' + app.get('env') +
        ' на http://localhost:' + app.get('port') +
        '; нажмите Ctrl+C для завершения.' );
    });
}

if(require.main === module){
    startServer();
} else {
    module.exports = startServer;
}
