'use strict'

const express = require('express');
const app = express();
const fs = require('fs');
const passport = require('passport');
const User = require('./server/models/user');

const config = require('./config');
const credentials = require('./config/credentials.js');

app.set('ip', config.get("ip"));
app.set('port', config.get("port"));

var https = require('https'); // обычно в начале файла
//var http2 = require('http2'); // обычно в начале файла
const spdy = require('spdy');

var options = {
key: fs.readFileSync(__dirname + '/ssl/autonoda.pem'),
cert: fs.readFileSync(__dirname + '/ssl/autonoda.crt'),
};
//let server = https.createServer(options, app);
let server = spdy.createServer(options, app);

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

// app.use(function(req, res, next){
//      req.session.test = 'test in session';
//      next();
// });

// BEGIN mongoose
const mongoose = require('mongoose');
    const opts = {
        server: {
            socketOptions: { keepAlive: 1 }
        }
    };

switch(app.get('env')){
    case 'development':
        mongoose.connect(credentials.mongo.development.connectionString, opts);
        break;
    case 'production':
        mongoose.connect(credentials.mongo.production.connectionString, opts);
        break;
        default:
    throw new Error('Неизвестная среда выполнения: ' + app.get('env'));
}

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("we're connected!");
});

// END mongoose

// BEGIN TEST Passport
require('./server/middlewares/passport.js')(app);
// END TEST passport

// START logging
//require('./server/middlewares/logging.js')(app);
// END logging

// START templates
const handlebars = require('express-handlebars');

app.engine('handlebars', handlebars({
            extname:'handlebars',
            //defaultLayout:'main.handlebars',
            defaultLayout:'realsite.handlebars',
            layoutsDir: './server/views/layouts',
            partialsDir:'./server/views/partials',
            helpers: {
                static: function(name) {
                    return require('./server/lib/static.js').map(name);
                }
            }
        }));

app.set('views','./server/views/pages');
app.set('view engine', 'handlebars');
// END templates

// START static
app.use(express.static(__dirname + '/public'));
// END static

app.disable('x-powered-by');

// START routes
require('./server/routes/main-routes.js')(app);
// END routes

// START Api
require('./server/routes/api-routes.js')(app);
// END API

// app.use(function(req, res, next){
//      const a = req.isAuthenticated();
//      console.log('auth', a);
//      next();
// });

// BEGIN ws
//require('./server/routes/routes-ws.js')(app, server);
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
    // app.listen(app.get('port'), function(){
    //     console.log( 'Express запущено в режиме ' + app.get('env') +
    //     ' на http://localhost:' + app.get('port') +
    //     '; нажмите Ctrl+C для завершения.' );
    // });



server.listen(app.get('port'), function(){
console.log('Express started in ' + app.get('env') +
' mode on port ' + app.get('port') + ' using HTTPS.');
});
}
/*
var ws = require("nodejs-websocket")

let wsConns = [];

setInterval(()=>{
    console.log('---');
    wsConns.map((conn) => {
        console.log('conn', conn.headers.host);
        conn.sendText("inServer");
    });
    console.log('---');
}, 5000);

// Scream server example: "hi" -> "HI!!!"
var server = ws.createServer(function (conn) {
    console.log("New connection");

    wsConns.push(conn);

    conn.on("text", function (str) {
        console.log("Received "+str);
        conn.sendText(str.toUpperCase()+"!!!");
    });

    conn.on("close", function (code, reason) {
        console.log("Connection closed");
    });

    conn.on("open", function (code, reason) {
        console.log("Connection open");
    });

    // setInterval(()=>{
    //         conn.sendText('Привет');
    // }, 2000);

}).listen(3001);
*/

if(require.main === module){
    startServer();
} else {
    module.exports = startServer;
}
