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

        this.elParent = $('.wrap-main-index')[0];

        this.configMap = {
            classEl: 'main-index',
            classElContent: 'blocks',

            hrefCss :       '/css/blockStyle.css',

            urlScript:      '/js/block.js',
            libraryName :   'block',
            moduleName:     'BlockModule'
        };
    }

    /*
    processLoadPromise() {
        return super['processLoadPromise']();
    }

    createElement() {
        return super['createElement']();
    }

    processAddStylesPromise() {
        return super['processAddStylesPromise']();
    }

    addStartHtml() {
        return super['addStartHtml']();
    }

    processAddScriptPromise() {
        return super['processAddScriptPromise']();
    }

    initScript() {
        console.debug('initScript');
    }
    */
}
