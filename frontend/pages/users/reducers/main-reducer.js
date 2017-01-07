'use strict';

import { combineReducers } from 'redux'

import usersReducer from './users-reducer'
import usersStatusReducer from './users-status-reducer'

export default combineReducers({
    users: usersReducer,
    usersStatus: usersStatusReducer
});
