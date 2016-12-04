'use strict'

import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/menu';

export default class MainMenuWidget {
    constructor() {
        // пункты меню
        this.items = [
            {
                url: '#',
                text: 'Первая'
            }, {
                url: '#',
                text: 'Вторая'
            }, {
                url: '#',
                text: 'Третья'
            }
        ];

        // активный пункт
        this.active = null;
    }

    render() {
        this.renderReact();
    }

    renderReact() {
        ReactDOM.render(
            <Menu
                items = {this.items}
                active = {this.active}
            />,
            $('.menu')[0]
        );
    }
}
