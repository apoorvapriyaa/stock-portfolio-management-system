const express = require('express');
const { addStock, deleteStock, getAllStocks } = require('../controllers/stockController');
const router = express.Router();
const {isAuthorized} = require('../middlewares/auth')

// Define routes

router.route('/stock/add').post(isAuthorized, addStock);

router.route('/stock/remove/:id').delete(isAuthorized, deleteStock);

router.route('/stocks').get(isAuthorized, getAllStocks);

module.exports = router;