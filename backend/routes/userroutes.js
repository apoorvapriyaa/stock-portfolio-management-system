const express = require('express');
const { loginUser, registerUser, logOut } = require('../controllers/userController');
const router = express.Router();

// Define routes

router.route('/login').post(loginUser);

router.route('/register').post(registerUser);

router.route('/logout').post(logOut);

module.exports = router;