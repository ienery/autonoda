"use strict";
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
        var loadBlockModulePromise = this.getLoadModulePromise(new block_loader_1.default());
        loadBlockModulePromise.then(function (res) {
            var blockModule = new spa['block'].BlockModule;
            blockModule.initModule();
        });
    };
    Shell.prototype.getLoadModulePromise = function (loader) {
        return loader.getLoadPromise();
    };
    return Shell;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Shell;
