'use strict';

import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_FAILURE,
    FETCH_USERS_SUCCESS
} from '../constants/users-statuses';

import UsersData from '../data/users-data';

import { setUsers } from './users-actions';


export const SET_USERS_STATUS = 'SET_USERS_STATUS';

export function setUsersStatus(status) {
    return async (dispatch, getState) => {
        // const state = getState();
        // console.debug('state', state);

        dispatch({
            type: SET_USERS_STATUS,
            status
        });

        if (status == FETCH_USERS_REQUEST) {

            try {
                let users = await UsersData.getUsers();
                dispatch(setUsers(users));

                dispatch({
                    type: SET_USERS_STATUS,
                    status: FETCH_USERS_SUCCESS
                });

            } catch (err){
                console.debug(err);

                dispatch({
                    type: SET_USERS_STATUS,
                    status: FETCH_USERS_FAILURE
                })
            }


        }
    }

    // return {
    //     type: SET_USERS_STATUS,
    //     status
    // }
}
