"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
;
var AssetCssFile = (function (_super) {
    __extends(AssetCssFile, _super);
    function AssetCssFile() {
        return _super.apply(this, arguments) || this;
    }
    AssetCssFile.prototype.render = function () {
        return (React.createElement("div", { ref: "el" }));
    };
    AssetCssFile.prototype.componentDidMount = function () {
        var _this = this;
        var el = this.refs.el;
        var href = this.props.hrefCss;
        this.createPromiseCSSLoad(el, href)
            .then(function (res) {
            console.debug('success Link Load');
            _this.props.onAssetCSSLoaded();
        }, function (err) {
            console.debug(err.message);
        });
    };
    AssetCssFile.prototype.createPromiseCSSLoad = function (el, href) {
        return new Promise(function (resolve, reject) {
            var link = document.createElement("link");
            link.rel = 'stylesheet';
            link.href = href;
            link.onload = function () {
                resolve();
            };
            link.onerror = function () {
                reject(new Error('Link loaded error'));
            };
            el.appendChild(link);
        });
    };
    return AssetCssFile;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AssetCssFile;
