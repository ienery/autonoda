/**
* Загрузчик модуля аутентификации пользователя
*/

import * as React from "react";
import * as ReactDOM from "react-dom";

import ModuleLoader from '../../common/components/module-loader/module-loader';

// global variable
declare const Promise:any;

export default class AuthLoader extends ModuleLoader {

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

        //this.elParent = ;

        this.configMap = {
            elParent: $('.auth-root')[0],

            classEl: 'auth-container',
            classElContent: 'auth-content',

            hrefCss : '/css/authStyle.css',
            urlScript: '/js/auth.js',

            libraryName :   'auth',
            moduleName:     'AuthModule'
        };
    }
}
