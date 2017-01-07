'use strict';

import { SET_USERS } from '../actions/users-actions';

export default function usersReducer(state = [], action) {
    
    if (action.type == SET_USERS) {
        const {users} = action;
        return users;
    }

    return state;
}
