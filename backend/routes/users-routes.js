const express = require('express');
const router = express.Router();

const usersController = require('../controllers/public/users/users-controller.js');

router.get('/', usersController.index);
router.get('/:_id', usersController.editUser);
router.post('/:_id', usersController.editUser);

module.exports = router;
