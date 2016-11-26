module.exports = (app) => {
    app.use('/', require('./main-routes'));

    app.use('/user', require('./user-routes'));

    app.use('/users', require('./users-routes'));
}
