'use strict'

import axios from 'axios';

export default class UsersData {
    static get settings() {
        return {
            url: '/api/users'
        };
    }

    static async getUsers() {
        let {url} = this.settings;
        //try {
        let response = await axios.get(url);
        let {data:users} = response;
        return users;
        // } catch (err) {
        //     throw err;
        // }
    }

    static async deleteUser(_id) {
        let {url} = this.settings;
        url += `/${_id}`;
        let response = await axios.delete(url);
        let {data:results} = response;
        return results;
    }
}
