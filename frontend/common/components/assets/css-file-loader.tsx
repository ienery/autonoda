/**
* Класс для динамической загрузки CSS файлов
*/
import * as React from "react";

declare const Promise:any;
//interface AssetCssProps { hrefCss: string, onAssetCSSLoaded: any };

class CssFileLoader {
    constructor(private elParent: any) {
        console.debug(elParent);
    }
}


export default CssFileLoader;
