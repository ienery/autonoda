/**
* Класс для динамической загрузки CSS файлов
*/
import * as React from "react";

declare const Promise:any;
interface AssetCssProps { hrefCss: string, onAssetCSSLoaded: any };

class AssetCssFile extends React.Component<AssetCssProps, undefined> {
    // render нужен если напрямую добавлять элемент link в разметку
    render() {
        return (
            <div
                ref ="el"
            >
                {/*
                <link
                    rel="stylesheet"
                    href= {this.props.hrefCss}
                />
                */}
            </div>
        );
    }

    refs: {
        el: HTMLElement
    }

    componentDidMount() {

        const el:HTMLElement = this.refs.el;
        const {hrefCss:href} = this.props;

        this.createPromiseCSSLoad(el, href)
            .then(
                res => {
                    console.debug('success Link Load');
                    this.props.onAssetCSSLoaded();
                },
                err => {
                    console.debug(err.message);
                }

            );
    }

    createPromiseCSSLoad(el: HTMLElement, href: string) {
        // добавление элемента link в секцию head
        return new Promise((resolve, reject) => {
            const link = document.createElement("link");

            link.rel = 'stylesheet';
            //link.type = 'text/css';
            link.href = href;

            link.onload = function() {
                //alert("Style loaded and ready");
                resolve();
            };

            link.onerror = function() {
                //alert( "Link loaded error" );
                reject(new Error('Link loaded error'));
            };

            //const head = document.getElementsByTagName('head')[0];
            el.appendChild(link);
        });
    }
}

export default AssetCssFile;
