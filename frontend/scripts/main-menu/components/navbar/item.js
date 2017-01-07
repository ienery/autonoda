'use strict';

import React from 'react';


export default class Item extends React.Component {
    constructor(props) {
        super(props);

        this.handlerOnMouseEnter = this.handlerOnMouseEnter.bind(this);
        this.handlerOnMouseLeave = this.handlerOnMouseLeave.bind(this);
    }

    render() {
        //console.debug(this.props.active);
        return(
            <li
                className = {this.props.active ? "active" : ""}
                onMouseEnter = {this.handlerOnMouseEnter}
                onMouseLeave = {this.handlerOnMouseLeave}
            >
                <a
                    href = {this.props.url}
                >
                    {this.props.text}
                </a>
            </li>
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

}
