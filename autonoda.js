'use strict'

const express = require('express');
const app = express();

const config = require('./config');
const credentials = require('./config/credentials.js');

app.set('ip', config.get("ip"));
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
require('./server/middlewares/passport.js')(app);
// END TEST passport


// START logging
require('./server/middlewares/logging.js')(app);
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

// START routes
require('./server/routes/routes-main.js')(app);
// END routes

// START Api
require('./server/routes/routes-api.js')(app);
// END API

// BEGIN ws
require('./server/routes/routes-ws.js')(app);
// END ws

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
