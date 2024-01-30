const express = require('express');
const router = express.Router();
const mainController = require('../controllers/allProductsController')

router.get('/', mainController.allProducts)

module.exports = router;