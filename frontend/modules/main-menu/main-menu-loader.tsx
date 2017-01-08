/**
* Загрузчик модуля аутентификации пользователя
*/

import * as React from "react";
import * as ReactDOM from "react-dom";

import ModuleLoader from '../../common/components/module-loader/module-loader';

// global variable
declare const Promise:any;

export default class MainMenuLoader extends ModuleLoader {

    // корневой элемент блока
    protected el: HTMLElement;

    // элемент контента блока
    protected elContent: HTMLElement;

    protected configMap: {
        // родитель для блока
        elParent: HTMLElement,

        // общий класс элемента
        classEl: string,

        // класс элемента с "полезной" разметкой
        classElContent: string,

        // файл стилей блока
        hrefCss: string,

        // файл скрипта блока
        urlScript: string,
        // библиотека/модуль внктри скрипта блока
        libraryName: string,
        moduleName: string
    };

    constructor() {
        super();


        this.configMap = {
            elParent: $('.menu')[0],

            classEl: 'wrap-main-menu',
            classElContent: 'main-menu-root',

            hrefCss :       '/css/mainMenuStyle.css',

            urlScript:      '/js/mainMenu.js',
            libraryName :   'mainMenu',
            moduleName:     'MainMenuModule'
        };
    }
}
