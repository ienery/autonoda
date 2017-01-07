"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var asset_css_file_1 = require("../../common/components/assets/asset-css-file");
var asset_js_file_1 = require("../../common/components/assets/asset-js-file");
var AuthLoader = (function () {
    function AuthLoader() {
        this.$el = $('.auth-root');
        this.configMap = {
            hrefCss: '/css/authStyle.css',
            urlScript: '/js/auth.js',
            libraryName: 'auth',
            moduleName: 'AuthModule'
        };
    }
    AuthLoader.prototype.processLoadPromise = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var onAssetJsLoaded = function () {
                var _a = _this.configMap, libraryName = _a.libraryName, moduleName = _a.moduleName;
                resolve({
                    libraryName: libraryName,
                    moduleName: moduleName
                });
            };
            _this.renderLoaderReact(onAssetJsLoaded);
        });
    };
    AuthLoader.prototype.renderLoaderReact = function (onAssetJsLoaded) {
        ReactDOM.render(React.createElement("div", null,
            React.createElement(asset_css_file_1.default, { hrefCss: this.configMap.hrefCss }),
            React.createElement("div", null, "Auth Loader 2"),
            React.createElement(asset_js_file_1.default, { urlScript: this.configMap.urlScript, onAssetJsLoaded: onAssetJsLoaded })), this.$el[0]);
    };
    return AuthLoader;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AuthLoader;
