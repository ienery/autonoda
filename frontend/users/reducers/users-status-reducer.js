'use strict';

import { SET_USERS_STATUS } from '../actions/users-status-actions';

export default function usersStatusReducer(state = '', action) {

    if (action.type == SET_USERS_STATUS) {
        const {status} = action;
        return status;
    }

    return state;
}
