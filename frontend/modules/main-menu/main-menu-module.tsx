/**
* Модуль отображения блоков
*/

import * as React from "react";
import * as ReactDOM from "react-dom";

import MainMenuWidget from './components/main-menu-widget/main-menu-widget';

class MainMenuModule {
    private configMap: {
        callback: any
    };

    constructor(private configMapLoader) {
        //console.debug('constructor Block module', configMapLoader);
        this.configMap = {
            callback: null
        };
        // experimental !
        //this.handleClick = this.handleClick.bind(this);
    }

    initModule() {
        console.debug('init MainMenu module');
        //callback();
        //console.debug(this.configMapLoader);
        // this.configMap['callback'] = callback;
        this.renderReact();
    }

    renderReact() {
        const {elContent} = this.configMapLoader;

        // ReactDOM.render(
        //     <div>
        //         MainMenu
        //     </div>,
        //     elContent
        // );

        const mainMenuWidget = new MainMenuWidget();
        mainMenuWidget.render(elContent);
    }


}


module.exports = {
    MainMenuModule
};
