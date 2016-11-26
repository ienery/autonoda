'use strict';

export default class StoreInit {

    static preloadedState() {
        const preloadedState = {
            users: [],
            usersStatus: 'FETCH_USERS_SUCCESS'
        }

        return preloadedState;
    }
}
