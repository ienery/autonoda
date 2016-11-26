const express = require('express');
const router = express.Router();

const usersApiController = require('../controllers/api/users/users-api-controller.js');

router.get('/', usersApiController.users);

module.exports = router;
