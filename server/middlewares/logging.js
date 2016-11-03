
module.exports = (app) => {

    switch(app.get('env')){
        case 'development':
            // сжатое многоцветное журналирование для
            // разработки
            app.use(require('morgan')('dev'));
            break;
        case 'production':
            // модуль 'express-logger' поддерживает ежедневное
            // чередование файлов журналов
            app.use(require('express-logger')({
                path: __dirname + '/log/requests.log'
            }));
            break;
    }
};
