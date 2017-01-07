/**
* Основной класс SPA приложения
*/

import AuthLoader from '../auth/auth-loader';

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

         const loadAuthModulePromise = this.getLoadModulePromise(new AuthLoader());

         loadAuthModulePromise.then(
            res => {
                //spa['auth'] - webpack library export
                const authModule = new spa['auth'].AuthModule;
                authModule.initModule();
            }
         );
    }

    
    getLoadModulePromise(loader) {
        return loader.getLoadPromise();
    }

}
