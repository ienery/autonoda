/**
* Загрузчик модуля аутентификации пользователя
*/

import * as React from "react";
import * as ReactDOM from "react-dom";


import AssetCssFile from '../../common/components/assets/asset-css-file';
import AssetJsFile from '../../common/components/assets/asset-js-file';


// global variable
declare const Promise:any;

export default class BlockLoader {
    private $el: JQuery;

    private configMap: {
        hrefCss: string,
        urlScript: string
    };

    constructor() {
        //console.debug('auth');
        this.$el = $('.wrap-main-index');

        this.configMap = {
            hrefCss : '/css/blockStyle.css',
            urlScript: '/js/block.js'
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
            <div className="main-index">
                <AssetCssFile
                    hrefCss = {this.configMap.hrefCss}
                />

                <div className="blocks">
                    <div className="block">
                        block 1
                    </div>

                    <div className="block">
                        block 2
                    </div>

                    <div className="block">
                        block 3
                    </div>

                    <div className="block">
                        block 4
                    </div>

                    <div className="block">
                        block 5
                    </div>

                    <div className="block">
                        block 6
                    </div>
                </div>

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
