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
        urlScript: string,

        libraryName: string,
        moduleName: string
    };

    constructor() {
        //console.debug('auth');
        this.$el = $('.wrap-main-index');

        this.configMap = {
            hrefCss :       '/css/blockStyle.css',
            urlScript:      '/js/block.js',

            libraryName :   'block',
            moduleName:     'BlockModule'
        };
    }

    processLoadPromise1() {
        return new Promise((resolve, reject) => {
            const {libraryName, moduleName} = this.configMap;
            resolve({
                libraryName,
                moduleName
            });
        });
    }

    processLoadPromise() {
        return new Promise((resolve, reject) => {

            // callback after loaded script module
            const onAssetCSSLoaded = () => {
                //const {libraryName, moduleName} = this.configMap;
                //console.debug('onAssetCSSLoaded');
                //resolve();
            };

            // callback after loaded script module
            const onAssetJsLoaded = () => {
                $('.btn').click(() => {
                    this.onClickButton();
                });
                const {libraryName, moduleName} = this.configMap;
                resolve({
                    libraryName,
                    moduleName
                });
            };

            this.renderLoaderReact(onAssetCSSLoaded, onAssetJsLoaded);
        });
    }

    renderLoaderReact(onAssetCSSLoaded, onAssetJsLoaded) {
        //onAssetCSSLoaded = {onAssetCSSLoaded}
        ReactDOM.render(
            <div className="main-index">
                <AssetCssFile
                    hrefCss = {this.configMap.hrefCss}
                    onAssetCSSLoaded = {onAssetCSSLoaded}
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
                        <div className="btn">BTN</div>
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

    onClickButton() {
        // test css unload
        const {hrefCss} = this.configMap;
        console.debug('hrefCss', hrefCss);

        let styleSheets = document.styleSheets;

        console.debug('styleSheets', styleSheets);

        $('link[rel=stylesheet][href~="'+hrefCss+'"]').remove();
        console.debug('styleSheets', styleSheets);

    }

    // onAssetJsLoaded() {
    //     spa['auth'].fnAuth();
    // }
}
