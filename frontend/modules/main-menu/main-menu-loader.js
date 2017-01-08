"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var module_loader_1 = require("../../common/components/module-loader/module-loader");
var MainMenuLoader = (function (_super) {
    __extends(MainMenuLoader, _super);
    function MainMenuLoader() {
        var _this = _super.call(this) || this;
        _this.configMap = {
            elParent: $('.menu')[0],
            classEl: 'wrap-main-menu',
            classElContent: 'main-menu-root',
            hrefCss: '/css/mainMenuStyle.css',
            urlScript: '/js/mainMenu.js',
            libraryName: 'mainMenu',
            moduleName: 'MainMenuModule'
        };
        return _this;
    }
    return MainMenuLoader;
}(module_loader_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MainMenuLoader;
