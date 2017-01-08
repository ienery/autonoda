/**
* Родительский класс загрузчика модулей
*/

/**
*   Процесс загрузки модуля
*   1. создать корневой элемент блока
*   this.createElement();
*
*   2. добавить css стили в начало корневого элемента
*   this.addStyles();
*
*   3. после загрузки стилей
*   добавить начальную разметку в корневой элемент
*   this.addStartHtml();
*
*   4. добавить js скрипт в конец корневого элемента
*   this.addScript();
*
*   5. после загрузки скрипта
*   вызвать инициализацию
*   this.initScript();
*
*   Для последовательной зарузки используются Promises,
*   которые в процессе разрешаются
*/
export default class ModuleLoader {
    constructor() {

    }

    processLoadPromise() {
        // последовательный процесс загрузки через promises
        return Promise.resolve(this.createElement())
            .then( res => {
                return this.processAddStylesPromise();
            })
            .then( res => {
                return this.addStartHtml();
            })
            .then( res => {
                return this.processAddScriptPromise();
            })
            .then( res => {
                const {libraryName, moduleName} = this.configMap;
                //console.debug(libraryName, moduleName);
                return {libraryName, moduleName};
            });
    }

    createElement() {
        // создать корневой элемент блока
        const el = document.createElement('div');
        el.className = this.configMap.classEl;
        //el.innerHTML  = this.configMap.classEl;

        // сохранить ссылку на элемент
        this.el = el;

        // добавить к корневому элементу
        return this.elParent.appendChild(el);
    }

    processAddStylesPromise() {
        return new Promise((resolve, reject) => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = this.configMap.hrefCss;

            link.onload = function() {
                //alert("Style loaded and ready");
                resolve("Style loaded and ready");
            };

            link.onerror = function() {
                //alert( "CSS link  loaded error" );
                reject(new Error('CSS link loaded error'));
            };

            this.el.appendChild(link);
        });
    }

    processAddScriptPromise() {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');

            script.src = this.configMap.urlScript;
            script.async = true;

            script.onload = function() {
                //alert("Script loaded and ready");
                resolve("Script loaded and ready");
            };

            script.onerror = function() {
                //alert( "Script loaded error" );
                reject(new Error('Script loaded error'));
            };

            this.el.appendChild(script);
        });
    }

    addStartHtml(tagName = 'div') {
        //console.debug('addStartHtml');
        const content = document.createElement(tagName);

        content.className = this.configMap.classElContent;
        content.innerHTML  = this.configMap.classElContent;

        return this.el.appendChild(content);
    }

    // BEGIN загрузка без Promises
    loadSimple() {
        // реализация загрузки без Promises

        // 1. создать корневой элемент блока
        this.createElement();

        // 2. добавить css стили в начало корневого элемента
        this.addStyles();

        // 3. после загрузки стилей
        // добавить начальную разметку в корневой элемент
        this.addStartHtml();

        // 4. добавить js скрипт в конец корневого элемента
        this.addScript();

        // 5. после загрузки скрипта
        // вызвать инициализацию
        this.initScript();
    }

    addStyles() {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = this.configMap.hrefCss;

        link.onload = function() {
            alert("Style loaded and ready");
            //resolve();
        };

        link.onerror = function() {
            alert( "Link loaded error" );
            //reject(new Error('Link loaded error'));
        };

        this.el.appendChild(link);
    }

    addScript() {
        const script = document.createElement('script');

        script.src = this.configMap.urlScript;
        script.async = true;

        script.onload = function() {
            alert("Script loaded and ready");
            //resolve();
        };

        script.onerror = function() {
            alert( "Script loaded error" );
            //reject(new Error('Script loaded error'));
        };

        this.el.appendChild(script);
    }

    // END загрузка без Promises
}
