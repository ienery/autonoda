
const USER = 'USER'
exports.USER = USER;

const ADMIN = 'ADMIN';
exports.ADMIN = ADMIN;

class UserRoles {
    static list() {
        return [ {
                    value: ADMIN,
                    text: 'Администратор'
                },
                {
                    value: USER,
                    text: 'Пользователь'
                }];
    }
}

exports.UserRoles = UserRoles;
