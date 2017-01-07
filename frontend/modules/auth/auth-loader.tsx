/**
* Загрузчик модуля аутентификации пользователя
*/

import * as React from "react";
import * as ReactDOM from "react-dom";


import AssetCssFile from '../../common/components/assets/asset-css-file';
import AssetJsFile from '../../common/components/assets/asset-js-file';


// global variable
declare const Promise:any;

export default class AuthLoader {
    private $el: JQuery;

    private configMap: {
        hrefCss: string,
        urlScript: string
    };

    constructor() {
        //console.debug('auth');
        this.$el = $('.auth-root');

        this.configMap = {
            hrefCss : '/css/authStyle.css',
            urlScript: '/js/auth.js'
        };
    }



    getLoadPromise() {
        return new Promise((resolve, reject) => {
            // callback after loaded script module
            const onAssetJsLoaded = () => {
                resolve('success load module auth');
            };

            this.renderLoaderReact(onAssetJsLoaded);
        });
    }

    renderLoaderReact(onAssetJsLoaded) {

        ReactDOM.render(
            <div>
                <AssetCssFile
                    hrefCss = {this.configMap.hrefCss}
                />
                <div>Auth Loader 2</div>
                <AssetJsFile
                    urlScript = {this.configMap.urlScript}
                    onAssetJsLoaded = {onAssetJsLoaded}
                />
            </div>,
            this.$el[0]
        );
    }

    // onAssetJsLoaded() {
    //     spa['auth'].fnAuth();
    // }
}
