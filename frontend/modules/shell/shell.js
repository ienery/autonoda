"use strict";
var auth_loader_1 = require("../auth/auth-loader");
var block_loader_1 = require("../block/block-loader");
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
        var processModulesPromises = [];
        processModulesPromises.push(this.processLoadModulePromise(new auth_loader_1.default()));
        processModulesPromises.push(this.processLoadModulePromise(new block_loader_1.default()));
        Promise.all(processModulesPromises)
            .then(function (results) {
            for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
                var result = results_1[_i];
                var libraryName = result.libraryName, moduleName = result.moduleName;
                var module_1 = new spa[libraryName][moduleName];
                module_1.initModule();
            }
        });
    };
    Shell.prototype.processLoadModulePromise = function (loader) {
        return loader.processLoadPromise();
    };
    return Shell;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Shell;
