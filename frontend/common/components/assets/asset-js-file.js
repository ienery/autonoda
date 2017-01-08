"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
;
var AssetJsFile = (function (_super) {
    __extends(AssetJsFile, _super);
    function AssetJsFile() {
        return _super.apply(this, arguments) || this;
    }
    AssetJsFile.prototype.render = function () {
        return (React.createElement("div", { ref: "el" }));
    };
    AssetJsFile.prototype.componentDidMount = function () {
        var _this = this;
        var el = this.refs.el;
        var url = this.props.urlScript;
        this.createPromiseScriptLoad(el, url)
            .then(function (res) {
            _this.props.onAssetJsLoaded();
        }, function (err) {
            console.debug(err.message);
        });
    };
    AssetJsFile.prototype.createPromiseScriptLoad = function (el, url) {
        return new Promise(function (resolve, reject) {
            var script = document.createElement("script");
            script.src = url;
            script.async = true;
            script.onload = function () {
                resolve();
            };
            script.onerror = function () {
                reject(new Error('Script loaded error'));
            };
            el.appendChild(script);
        });
    };
    return AssetJsFile;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AssetJsFile;
