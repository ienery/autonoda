'use strict'

import React from 'react';

import Navbar from './navbar';
import Dropdown from './dropdown';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);

        let active = this.props.active
            ? this.props.active
            : null;

        this.state = {
            active
        }

        this.handlerActivateNavbarItem = this.handlerActivateNavbarItem.bind(this);
        this.handlerDeactivateNavbarItem = this.handlerDeactivateNavbarItem.bind(this);

        this.handlerActivateDropdownItem = this.handlerActivateDropdownItem.bind(this);
        this.handlerDeactivateDropdownItem = this.handlerDeactivateDropdownItem.bind(this);
    }

    render() {
        return(
            <div>
                <Navbar
                     items = {this.props.items}
                     active = {this.state.active}
                     handlerActivateNavbarItem = {this.handlerActivateNavbarItem}
                     handlerDeactivateNavbarItem = {this.handlerDeactivateNavbarItem}
                 />

                 <Dropdown
                    items = {this.props.items}
                    active = {this.state.active}
                    handlerActivateDropdownItem = {this.handlerActivateDropdownItem}
                    handlerDeactivateDropdownItem = {this.handlerDeactivateDropdownItem}
                 />
            </div>
        )
    }

    handlerActivateNavbarItem(index) {
        //console.debug('active', index);
        this.setState({
            active: index
        });
    }

    handlerDeactivateNavbarItem(index) {
        this.setState({
            active: null
        });
    }

    handlerActivateDropdownItem(index) {
        //console.debug('active', index);
        this.setState({
            active: index
        });
    }

    handlerDeactivateDropdownItem(index) {
        this.setState({
            active: null
        });
    }
}
