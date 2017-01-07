/**
* Основной класс SPA приложения
*/

import AuthLoader from '../auth/auth-loader';
import BlockLoader from '../block/block-loader';

declare const Promise:any;
declare const spa: any;

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

        // BEGIN Load Auth Module
        // const loadAuthModulePromise = this.getLoadModulePromise(new AuthLoader());
        //
        // loadAuthModulePromise.then(
        //     res => {
        //         //spa['auth'] - webpack library export
        //         const authModule = new spa['auth'].AuthModule;
        //         authModule.initModule();
        //     }
        // );
        // END Load Auth Module

        // BEGIN Load Block Module
        const loadBlockModulePromise = this.getLoadModulePromise(new BlockLoader());

        loadBlockModulePromise.then(
            res => {
                //spa['block'] - webpack library export
                const blockModule = new spa['block'].BlockModule;
                blockModule.initModule();
            }
        );
        // END Load Block Module

    }


    getLoadModulePromise(loader) {
        return loader.getLoadPromise();
    }

}
