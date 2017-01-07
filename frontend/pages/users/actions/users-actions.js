'use strict';

import UsersData from '../data/users-data';

import { setUsersStatus } from './users-status-actions';
import { FETCH_USERS_REQUEST } from '../constants/users-statuses';

export const SET_USERS = 'SET_USERS';

export function setUsers(users) {
    return {
        type: SET_USERS,
        users
    }
}

export const DELETE_USER = 'DELETE_USER';

export function deleteUser(_id) {
    return async (dispatch) => {
        //console.debug('_id', _id);

        dispatch({
            type: DELETE_USER,
            _id
        });

        try {
            let response = await UsersData.deleteUser(_id);
            let {results} = response;
            //console.debug('results', results);
            if (results == 'success') {
                dispatch(setUsersStatus(FETCH_USERS_REQUEST));
            }
        } catch (err) {
            console.debug(err);
        }

    }

}
