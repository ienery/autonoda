"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var BlockModule = (function () {
    function BlockModule(configMapLoader) {
        this.configMapLoader = configMapLoader;
        this.configMap = {
            callback: null
        };
        this.handleClick = this.handleClick.bind(this);
    }
    BlockModule.prototype.initModule = function (_a) {
        var callback = _a.callback;
        this.configMap['callback'] = callback;
        this.renderReact();
    };
    BlockModule.prototype.renderReact = function () {
        var elContent = this.configMapLoader.elContent;
        ReactDOM.render(React.createElement("div", { className: "blocks" },
            React.createElement("div", { className: "block" }, "block 1"),
            React.createElement("div", { className: "block" }, "block 2"),
            React.createElement("div", { className: "block" }, "block 3"),
            React.createElement("div", { className: "block" }, "block 4"),
            React.createElement("div", { className: "block" }, "block 5"),
            React.createElement("div", { className: "block" },
                "block 6",
                React.createElement("div", { className: "btn", onClick: this.handleClick }, "BTN"))), elContent);
    };
    BlockModule.prototype.handleClick = function (event) {
        this.configMap.callback();
    };
    return BlockModule;
}());
module.exports = {
    BlockModule: BlockModule
};
