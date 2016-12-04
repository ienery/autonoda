module.exports = (app) => {
    app.use('/', require('./main-routes'));

    app.use('/user', require('./user-routes'));

    app.use('/admin', require('./main-admin-routes'));
    app.use('/admin/users', require('./users-routes'));
    app.use('/api/users', require('./users-api-routes'));
}
