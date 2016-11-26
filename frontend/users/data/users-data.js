'use strict'

import axios from 'axios';

export default class UsersData {
    static get settings() {
        return {
            url: '/api/users'
        };
    }

    static async getUsers() {
        const {url} = this.settings;
        //try {
        let response = await axios.get(url);
        let {data:users} = response;
        return users;
        // } catch (err) {
        //     throw err;
        // }
    }
}
