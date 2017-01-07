'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import reducer from './reducers/main-reducer';
import StoreInit from './store/store-init';

import UsersData from './data/users-data';

import Table from './components/table';


import { setUsersStatus } from './actions/users-status-actions';
import { FETCH_USERS_REQUEST } from './constants/users-statuses';

import logger from './middlewares/logger-middleware';

export default class PageApp {
    constructor() {
        this.store - null;
        this.initStore();
    }

    initStore() {
        const preloadedState = StoreInit.preloadedState();

        this.store = createStore(
            reducer,
            preloadedState,
            applyMiddleware(
                thunk,
                logger
            )
        );
    }

    render() {
        this.renderReact();
        this.afterRender();
    }

    renderReact() {
        //console.debug('renderReact');
        const domContainerNode = $('.users-table')[0];

        ReactDOM.render(
            <Provider store={this.store}>
                <Table />
            </Provider>    ,
            domContainerNode
        );
    }

    async afterRender() {
        this.store.dispatch(setUsersStatus(FETCH_USERS_REQUEST));
    }
}
