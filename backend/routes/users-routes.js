const express = require('express');
const router = express.Router();

const usersController = require('../controllers/public/users/users-controller.js');

const allowRoles = require('../middlewares/authorization/auth-roles.js').allowRoles;
const roles = require('../models/users/user-roles.js');

// router.get('/secret', allowRoles([roles.ADMIN]), (req, res) => {
//     res.send('secret');
// });

router.get('/', allowRoles([roles.ADMIN]), usersController.index);
router.get('/:_id', allowRoles([roles.ADMIN]), usersController.editUser);
router.post('/:_id', allowRoles([roles.ADMIN]), usersController.editUser);



module.exports = router;
