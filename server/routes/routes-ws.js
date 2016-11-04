const handlersWs = require('../handlers/handlers-ws.js');

module.exports = (app, server) => {

let expressWs = require('express-ws');
    expressWs = expressWs(app, server);

    app.ws('/echo', handlersWs.echo);
};
