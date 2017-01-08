"use strict";
var main_menu_widget_1 = require("./components/main-menu-widget/main-menu-widget");
var MainMenuModule = (function () {
    function MainMenuModule(configMapLoader) {
        this.configMapLoader = configMapLoader;
        this.configMap = {
            callback: null
        };
    }
    MainMenuModule.prototype.initModule = function () {
        console.debug('init MainMenu module');
        this.renderReact();
    };
    MainMenuModule.prototype.renderReact = function () {
        var elContent = this.configMapLoader.elContent;
        var mainMenuWidget = new main_menu_widget_1.default();
        mainMenuWidget.render(elContent);
    };
    return MainMenuModule;
}());
module.exports = {
    MainMenuModule: MainMenuModule
};
