const express = require('express');
const router = express.Router();

const usersController = require('../controllers/public/users/users-controller.js');

router.get('/', usersController.index);

module.exports = router;
