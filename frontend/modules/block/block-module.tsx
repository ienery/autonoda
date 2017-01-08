/**
* Модуль отображения блоков
*/

import * as React from "react";
import * as ReactDOM from "react-dom";

class BlockModule {
    private configMap: {
        callback: any
    };

    constructor(private configMapLoader) {
        //console.debug('constructor Block module', configMapLoader);
        this.configMap = {
            callback: null
        };
        // experimental !
        this.handleClick = this.handleClick.bind(this);
    }

    initModule({callback}) {
        //console.debug('init Block module');
        //callback();
        //console.debug(this.configMapLoader);
        this.configMap['callback'] = callback;
        this.renderReact();
    }

    renderReact() {
        const {elContent} = this.configMapLoader;

        ReactDOM.render(
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
                    <div
                        className="btn"
                        onClick = {this.handleClick}
                    >
                        BTN
                    </div>
                </div>
            </div>,
            elContent
        );
    }

    handleClick(event) {
        this.configMap.callback();
    }
}


module.exports = {
    BlockModule
};
