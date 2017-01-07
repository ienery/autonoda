var AuthModule = (function () {
    function AuthModule() {
        console.debug('constructor Auth module');
    }
    AuthModule.prototype.initModule = function () {
        console.debug('init Auth module');
    };
    return AuthModule;
}());
module.exports = {
    AuthModule: AuthModule
};
