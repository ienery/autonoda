/**
autonoda app - future features create 26.11.2016
*/

const fs = require('fs');

const express = require('express');
const app = express();


const config = require('./config');
const credentials = require('./config/credentials.js');

app.set('ip', config.get("ip"));
app.set('port', config.get("port"));


const https = require('https');
const spdy = require('spdy');

let options = {
    key: fs.readFileSync(__dirname + '/ssl/autonoda.pem'),
    cert: fs.readFileSync(__dirname + '/ssl/autonoda.crt'),
};

const server = spdy.createServer(options, app);

app.use(require('body-parser').json());

// BEGIN cookie - session
app.use(require('body-parser').urlencoded({ extended: true }));

const MongoSessionStore = require('session-mongoose')(require('connect'));
const sessionStore = new MongoSessionStore({ url:
    credentials.mongo[app.get('env')].connectionString });

app.use(require('cookie-parser')(credentials.cookieSecret));

app.use(require('express-session')({
    resave: true,
    saveUninitialized: false,
    secret: credentials.cookieSecret,
    store: sessionStore,
    //cookie: { maxAge: 60000 },
    rolling: true
}));

// END cookie - session

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

mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("mongo connected !");
});

// END mongoose

// START templates
const handlebars = require('express-handlebars');

const handlebarsNoExpress = require('handlebars');
const helpers = require('handlebars-helpers')({
    handlebars: handlebarsNoExpress
});


app.engine('handlebars', handlebars({
            extname:'handlebars',
            //defaultLayout:'main.handlebars',
            defaultLayout:'main.handlebars',
            layoutsDir: './backend/views/layouts',
            partialsDir:'./backend/views/partials',
            helpers
        }));

app.set('views','./backend/views/pages');
app.set('view engine', 'handlebars');
// END templates

// static
app.use(express.static(__dirname + '/public'));

app.disable('x-powered-by');

// BEGIN TEST Passport
require('./backend/middlewares/passport.js')(app);
// END TEST passport

// BEGIN routers
require('./backend/routes/routes')(app);
// END routers

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
    server.listen(app.get('port'), function(){
        console.log('Express started in ' + app.get('env') +
        ' mode on port ' + app.get('port') + ' using HTTPS.');
    });
}

if(require.main === module){
    startServer();
} else {
    module.exports = startServer;
}
