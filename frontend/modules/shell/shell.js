"use strict";
var auth_loader_1 = require("../auth/auth-loader");
var Shell = (function () {
    function Shell() {
    }
    Shell.prototype.configModule = function () {
    };
    Shell.prototype.initModule = function () {
        var _this = this;
        $(document).ready(function () {
            _this.loadModules();
        });
    };
    Shell.prototype.loadModules = function () {
        var loadAuthModulePromise = this.getLoadModulePromise(new auth_loader_1.default());
        loadAuthModulePromise.then(function (res) {
            var authModule = new spa['auth'].AuthModule;
            authModule.initModule();
        });
    };
    Shell.prototype.getLoadModulePromise = function (loader) {
        return loader.getLoadPromise();
    };
    return Shell;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Shell;
