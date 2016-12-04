const User = require('../../../models/users/user.js');
const roles = require('../../../models/users/user-roles.js');
//const passport = require('passport');

exports.index = async (req, res, next) => {
    res.render('users/users', { layout: 'api' });
};

exports.editUser = async (req, res, next) => {
    let {_id} = req.params;


    //console.dir(listRoles);

    if (req.body.user) {
        let {_id, email, role} = req.body.user;
        //console.log(_id, email, role);

        try {
            await User.update({ _id }, { $set: { role }});
        } catch (err) {
            next(err);
        }
        
        res.redirect('/admin/users/');

    } else {
        try {
            let user = await User.findOne({_id});
            let userView = {};

            {
                let {_id, email, role} = user;

                if (!role) {
                    role = roles.USER;
                }

                userView = {_id, email, role};
            }

            res.locals.userView = userView;

            res.locals.listRoles = roles.UserRoles.list();
        } catch (err) {
            return next(err);
        }

        res.render('users/users-edit', {
            layout: 'api',
            helpers: {
                select: function( value, value2 ) {

                }
            }
        });
    }




};
