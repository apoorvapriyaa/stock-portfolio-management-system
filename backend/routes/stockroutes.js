const express = require('express');
const { loginUser, registerUser, logOut } = require('../controllers/userController');
const router = express.Router();

// Define routes
router.get('/:id/add', (req, res) => {
    const productId = req.params.id;
    res.send(productId);
});

router.route('/login').post(loginUser);

router.route('/register').post(registerUser);

router.route('/logout').post(logOut);

module.exports = router;