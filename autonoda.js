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

// custom page 404
app.use(function(req, res){
    res.status(404);
    res.render('404');
});

// custom page 500
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
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
