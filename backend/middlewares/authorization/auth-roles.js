
exports.allowRoles = (roles) => (req, res, next) => {
    const auth = req.isAuthenticated();

    if (auth && roles.includes(req.user.role)) {
        return next();
    } else {
        res.redirect(303, '/unauthorized');
    }
}
