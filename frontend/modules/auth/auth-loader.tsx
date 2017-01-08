/**
* Загрузчик модуля аутентификации пользователя
*/

import * as React from "react";
import * as ReactDOM from "react-dom";

import ModuleLoader from '../../common/components/module-loader/module-loader';

// global variable
declare const Promise:any;

export default class AuthLoader extends ModuleLoader {

    // родитель для блока
    protected elParent: HTMLElement;

    // корневой элемент блока
    protected el: HTMLElement;

    protected configMap: {
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

        this.elParent = $('.auth-root')[0];

        this.configMap = {
            classEl: 'auth-container',
            classElContent: 'auth-content',

            hrefCss : '/css/authStyle.css',
            urlScript: '/js/auth.js',

            libraryName :   'auth',
            moduleName:     'AuthModule'
        };
    }
}
