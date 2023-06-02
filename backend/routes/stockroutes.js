const express = require('express');
const { loginUser, registerUser } = require('../controllers/userController');
const router = express.Router();

// Define routes
router.get('/:id/add', (req, res) => {
    const productId = req.params.id;
    res.send(productId);
});

router.route('/login').post(loginUser);

router.route('/register').post(registerUser);

module.exports = router;