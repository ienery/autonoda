/**
* Основной класс SPA приложения
*/

import MainMenuLoader from '../main-menu/main-menu-loader';
import AuthLoader from '../auth/auth-loader';
import BlockLoader from '../block/block-loader';

declare const Promise:any;
// root SPA variable
declare const spa: any;

// stub
declare const document: any;

export default class Shell  {

    private jqueryMap;

    //private loadersMap;
    private modulesMap = {};


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

        Promise.resolve('start')

            // BEGIN load MainMenuModule
            .then(res => {
                // start load AuthModule
                return this.processLoadModulePromise(new MainMenuLoader());
            })
            .then(configMapLoader => {
                // loaded AuthModule
                const {configMap:{libraryName, moduleName}} = configMapLoader;

                // libraryName = mainMenu
                const mainMenuModule = new spa[libraryName][moduleName](configMapLoader);
                this.modulesMap[libraryName] = mainMenuModule;

                mainMenuModule.initModule();
            })
            // END load MainMenuModule
            
            // BEGIN load AuthModule
            .then(res => {
                // start load AuthModule
                return this.processLoadModulePromise(new AuthLoader());
            })
            .then(configMapLoader => {
                // loaded AuthModule
                const {configMap:{libraryName, moduleName}} = configMapLoader;

                // libraryName = auth
                const authModule = new spa[libraryName][moduleName](configMapLoader);
                this.modulesMap[libraryName] = authModule;

                authModule.initModule();
            })
            // END load AuthModule

            // BEGIN load BlockModule
            .then( res => {
                // start load BlockModule
                return this.processLoadModulePromise(new BlockLoader());
            })
            .then( configMapLoader => {
                // loaded BlockModule
                const {configMap:{libraryName, moduleName}} = configMapLoader;
                // libraryName = block
                const blockModule = new spa[libraryName][moduleName](configMapLoader);
                this.modulesMap[libraryName] = blockModule;

                // добавить обработчики для взаимодействия с модулем
                const callback = () => {
                    console.debug('callback shell');
                };

                blockModule.initModule({
                    callback
                });
            })
            // END load BlockModule
            .then( res => {
                console.debug('after load all modules');
                //console.debug(this.modulesMap);
            });

        // BEGIN all modules array loader
        // results process all promises loader modules
        // let processModulesPromises: any[] = [];
        //
        // processModulesPromises.push(
        //     this.processLoadModulePromise(new AuthLoader())
        // );
        //
        // processModulesPromises.push(
        //     this.processLoadModulePromise(new BlockLoader())
        // );
        //
        // // обработка всех результатов загрузки модулей
        // Promise.all( processModulesPromises )
        //     .then(results => {
        //           for (let configMapLoader of results) {
        //               //console.debug('results', result);
        //               const {
        //                   configMap: {libraryName, moduleName},
        //                   elModule,
        //                   elContent
        //               } = configMapLoader;
        //
        //               // вызов функций инициализии внутри модулей
        //               const module = new spa[libraryName][moduleName](configMapLoader);
        //
        //               this.modulesMap[libraryName] = module;
        //
        //               //module.initModule();
        //           }
        //     })
        //     .then( res => {
        //         //console.debug('after loaded modules');
        //         //console.debug(this.modulesMap);
        //         this.afterLoadModules();
        //     });

        // END all modules array loader
    }


    processLoadModulePromise(loader) {
        // promise запускается, ждем разрешения
        // внутри модуля при вызове processLoadPromise
        return loader.processLoadPromise();
    }

    afterLoadModules() {
        //console.debug(this.modulesMap);
    }
}
