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

        res.redirect('/users');

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

            // add selected
            let listRoles = roles.UserRoles.list();

            listRoles = listRoles.map((listRole) => {
                let selected = false;
                if (listRole.value == userView.role) {
                    selected = true;
                }

                return Object.assign(listRole, {selected});
            });

            res.locals.listRoles = listRoles;
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
