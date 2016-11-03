const handlersWs = require('../handlers/handlers-ws.js');

module.exports = (app) => {

    const expressWs = require('express-ws')(app);

    app.ws('/echo', handlersWs.echo);
};
