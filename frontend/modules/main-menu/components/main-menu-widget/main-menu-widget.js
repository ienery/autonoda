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
                text: 'Первая 1',
                //dropdown: []
            }, {
                url: '#',
                text: 'Вторая 2'
            }, {
                url: '#',
                text: 'Третья 3',
                //dropdown: []
            }
        ];

        // активный пункт
        this.active = null;
    }

    render(el) {
        this.renderReact(el);
    }

    renderReact(el) {
        ReactDOM.render(
            <Menu
                items = {this.items}
                active = {this.active}
            />,
            el
        );
    }
}
