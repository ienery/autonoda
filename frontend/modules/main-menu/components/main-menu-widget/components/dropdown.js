'use strict';

import React from 'react';

import Item from './dropdown/item';

export default class Dropdown extends React.Component {
    constructor(props) {
        super(props);

        this.handlerActivateItem = this.handlerActivateItem.bind(this);
        this.handlerDeactivateItem = this.handlerDeactivateItem.bind(this);
    }

    render() {
        const items = this.createItems();
        return(
            <div className="navbar-dropdown">
                {items}
            </div>
        );
    }

    createItems() {
        const items = this.props.items.map((...options) => {
            const [item, index] = options;
            //console.debug(item);

            let active = false;

            if ((this.props.active !== null) && (this.props.active === index)) {
                active = true;
            }

                // handlerActivateItem = {this.handlerActivateItem}
                // handlerDeactivateItem = {this.handlerDeactivateItem}

            if (item.dropdown !== undefined) {
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
            }


        });

        return items;
    }

    handlerActivateItem(index) {
        this.props.handlerActivateDropdownItem(index);
    }

    handlerDeactivateItem(index) {
        this.props.handlerDeactivateDropdownItem(index);
    }
}
