'use strict';

import React from 'react';

import Item from './navbar/item';


export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.handlerActivateItem = this.handlerActivateItem.bind(this);
        this.handlerDeactivateItem = this.handlerDeactivateItem.bind(this);
    }

    render() {
        const items = this.createItems();

        return(
            <div className="navbar">
                <ul className="main-menu">
                    {items}
                </ul>
            </div>
        )
    }

    createItems() {
        const items = this.props.items.map((...options)=>{
            const [item, index] = options;

            let active = false;

            if ((this.props.active !== null) && (this.props.active === index)) {
                active = true;
            }

            return(
                <Item
                    key = {index}
                    index = {index}
                    active = {active}
                    {...item}
                    handlerActivateItem = {this.handlerActivateItem}
                    handlerDeactivateItem = {this.handlerDeactivateItem}
                />
            )
        });

        return items;
    }

    handlerActivateItem(index) {
        this.props.handlerActivateNavbarItem(index);
    }

    handlerDeactivateItem(index) {
        this.props.handlerDeactivateNavbarItem(index);
    }
}
