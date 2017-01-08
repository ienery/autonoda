'use strict';

import React from 'react';


export default class Item extends React.Component {
    constructor(props) {
        super(props);

        this.handlerOnMouseEnter = this.handlerOnMouseEnter.bind(this);
        this.handlerOnMouseLeave = this.handlerOnMouseLeave.bind(this);
        this.handlerClose = this.handlerClose.bind(this);
    }

    render() {
        // <div
        //     className="close"
        //     onClick = {this.handlerClose}
        // >
        // </div>
        return(
            <div
                className = {this.props.active ? "item active" : "item"}
                onMouseEnter = {this.handlerOnMouseEnter}
                onMouseLeave = {this.handlerOnMouseLeave}
            >
                <div className="item-inner">
                    <div className="columns">
                        item-columns
                    </div>
                </div>
            </div>
        );
    }

    handlerOnMouseEnter() {
        const {index} = this.props;
        this.props.handlerActivateItem(index);
    }

    handlerOnMouseLeave() {
        const {index} = this.props;
        this.props.handlerDeactivateItem(index);
    }

    handlerClose() {
        const {index} = this.props;
        this.props.handlerDeactivateItem(index);
    }


}
