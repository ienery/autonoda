"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var module_loader_1 = require("../../common/components/module-loader/module-loader");
var AuthLoader = (function (_super) {
    __extends(AuthLoader, _super);
    function AuthLoader() {
        var _this = _super.call(this) || this;
        _this.configMap = {
            elParent: $('.wrap-main-index')[0],
            classEl: 'main-index',
            classElContent: 'block-root',
            hrefCss: '/css/blockStyle.css',
            urlScript: '/js/block.js',
            libraryName: 'block',
            moduleName: 'BlockModule'
        };
        return _this;
    }
    return AuthLoader;
}(module_loader_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AuthLoader;
