/**
* Модуль аутентификации пользователя
*/
class AuthModule {
    constructor() {
        console.debug('constructor Auth module');
    }

    initModule() {
        console.debug('init Auth module');
    }
}

declare let module: any;

module.exports = {
    AuthModule
};
