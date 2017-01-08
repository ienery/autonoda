"use strict";
var main_menu_loader_1 = require("../main-menu/main-menu-loader");
var auth_loader_1 = require("../auth/auth-loader");
var block_loader_1 = require("../block/block-loader");
var Shell = (function () {
    function Shell() {
        this.modulesMap = {};
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
        var _this = this;
        Promise.resolve('start')
            .then(function (res) {
            return _this.processLoadModulePromise(new main_menu_loader_1.default());
        })
            .then(function (configMapLoader) {
            var _a = configMapLoader.configMap, libraryName = _a.libraryName, moduleName = _a.moduleName;
            var mainMenuModule = new spa[libraryName][moduleName](configMapLoader);
            _this.modulesMap[libraryName] = mainMenuModule;
            mainMenuModule.initModule();
        })
            .then(function (res) {
            return _this.processLoadModulePromise(new auth_loader_1.default());
        })
            .then(function (configMapLoader) {
            var _a = configMapLoader.configMap, libraryName = _a.libraryName, moduleName = _a.moduleName;
            var authModule = new spa[libraryName][moduleName](configMapLoader);
            _this.modulesMap[libraryName] = authModule;
            authModule.initModule();
        })
            .then(function (res) {
            return _this.processLoadModulePromise(new block_loader_1.default());
        })
            .then(function (configMapLoader) {
            var _a = configMapLoader.configMap, libraryName = _a.libraryName, moduleName = _a.moduleName;
            var blockModule = new spa[libraryName][moduleName](configMapLoader);
            _this.modulesMap[libraryName] = blockModule;
            var callback = function () {
                console.debug('callback shell');
            };
            blockModule.initModule({
                callback: callback
            });
        })
            .then(function (res) {
            console.debug('after load all modules');
        });
    };
    Shell.prototype.processLoadModulePromise = function (loader) {
        return loader.processLoadPromise();
    };
    Shell.prototype.afterLoadModules = function () {
    };
    return Shell;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Shell;
