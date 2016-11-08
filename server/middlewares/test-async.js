const User = require('../models/user.js');

module.exports = async (res, req, next) => {
    console.log('test async');
    try {
        let user = await User.findOne({email: '1@1.ru'});
        console.log(user);
     }
     catch(err){
         return next(err);
     }

    //console.log(user);
    next();
}
