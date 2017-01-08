/**
* Основной класс SPA приложения
*/

import AuthLoader from '../auth/auth-loader';
import BlockLoader from '../block/block-loader';

declare const Promise:any;
// root SPA variable
declare const spa: any;

// stub
declare const document: any;

export default class Shell  {
    private jqueryMap;
    private modulesMap;

    constructor() {
        //this.configModule();
    }

    configModule(): void {
        //console.debug('configModule');
    }

    initModule(): void {
        $(document).ready(() => {
            this.loadModules();
        });
    }

    loadModules() {
        // Promise разрешаются внутри функции processLoadModulePromise
        // запускаются в конструкторах загрузчиков модулей (new AuthLoader())

        // BEGIN Process Auth Module
        // const processAuthModulePromise = this.processLoadModulePromise(new AuthLoader());
        //
        // processAuthModulePromise.then(
        //     res => {
        //         const {libraryName, moduleName} = res;
        //         //spa['auth'] - webpack library export
        //         // const authModule = new spa['auth'].AuthModule;
        //         // authModule.initModule();
        //         const module = new spa[libraryName][moduleName];
        //         module.initModule();
        //     }
        // );
        // END Process Auth Module

        // BEGIN Process Block Module
        // const processBlockModulePromise = this.processLoadModulePromise(new BlockLoader());
        //
        // processBlockModulePromise.then(
        //     res => {
        //         const {libraryName, moduleName} = res;
        //         //spa['block'] - webpack library export
        //         //const blockModule = new spa['block']['BlockModule'];
        //         //blockModule.initModule();
        //
        //         const module = new spa[libraryName][moduleName];
        //         module.initModule();
        //     }
        // );
        // END Process Block Module

        // results process all promises loader modules
        let processModulesPromises: any[] = [];

        processModulesPromises.push(
            this.processLoadModulePromise(new AuthLoader())
        );

        processModulesPromises.push(
            this.processLoadModulePromise(new BlockLoader())
        );


        // обработка всех результатов загрузки модулей
        Promise.all( processModulesPromises )
          .then(results => {
              for (let result of results) {
                  //console.debug('results', result);
                  const {libraryName, moduleName} = result;

                  // вызов функций инициализии внутри модулей
                  const module = new spa[libraryName][moduleName];
                  module.initModule();
              }

              this.testCss();
          });
    }


    processLoadModulePromise(loader) {
        // promise уже запускается и разрешается
        // внутри модуля при вызове getLoadPromise
        return loader.processLoadPromise();
    }

    testCss() {
        // проверка возможностей css
        //console.debug(document);
    }

}
