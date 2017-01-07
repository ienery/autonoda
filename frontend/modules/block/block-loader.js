"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var asset_css_file_1 = require("../../common/components/assets/asset-css-file");
var asset_js_file_1 = require("../../common/components/assets/asset-js-file");
var BlockLoader = (function () {
    function BlockLoader() {
        this.$el = $('.wrap-main-index');
        this.configMap = {
            hrefCss: '/css/blockStyle.css',
            urlScript: '/js/block.js',
            libraryName: 'block',
            moduleName: 'BlockModule'
        };
    }
    BlockLoader.prototype.processLoadPromise = function () {
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
    BlockLoader.prototype.renderLoaderReact = function (onAssetJsLoaded) {
        ReactDOM.render(React.createElement("div", { className: "main-index" },
            React.createElement(asset_css_file_1.default, { hrefCss: this.configMap.hrefCss }),
            React.createElement("div", { className: "blocks" },
                React.createElement("div", { className: "block" }, "block 1"),
                React.createElement("div", { className: "block" }, "block 2"),
                React.createElement("div", { className: "block" }, "block 3"),
                React.createElement("div", { className: "block" }, "block 4"),
                React.createElement("div", { className: "block" }, "block 5"),
                React.createElement("div", { className: "block" }, "block 6")),
            React.createElement(asset_js_file_1.default, { urlScript: this.configMap.urlScript, onAssetJsLoaded: onAssetJsLoaded })), this.$el[0]);
    };
    return BlockLoader;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BlockLoader;
