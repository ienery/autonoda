import * as React from "react";

declare const Promise:any;

interface AssetJsProps { urlScript: string, onAssetJsLoaded: any };

class AssetJsFile extends React.Component<AssetJsProps, undefined> {
    render() {
        return (
            <div
                ref ="el"
            >
            </div>
        );
    }

    refs: {
        el: HTMLElement
    }

    componentDidMount() {

        console.debug();

        const el:HTMLElement = this.refs.el;
        const {urlScript:url} = this.props;

        this.promiseScriptLoad(el, url)
            .then(
                res => {
                    //console.debug('success Script Load');
                    this.props.onAssetJsLoaded();
                },
                err => {
                    console.debug(err.message);
                }

            )
        ;
   }

   promiseScriptLoad(el: HTMLElement, url: string) {
       //console.debug('promiseScriptLoad');

       return new Promise((resolve, reject) => {
           const script = document.createElement("script");

           script.src = url;
           script.async = true;

           script.onload = function() {
               //alert("Script loaded and ready");
               resolve();
           };

           script.onerror = function() {
               //alert( "Script loaded error" );
               reject(new Error('Script loaded error'));
           };

           el.appendChild(script);

       });
   }


}

export default AssetJsFile;
