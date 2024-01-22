// *************** requerimos express y guardamos Router *************** //
const express = require('express');
const router = express.Router();

// *************** requerimos el controlador del detalle *************** //
const cartController = require('../controllers/cartController.js')

// *************** continuamos la ruta por el controlador *************** //
router.get('/checkout', cartController.viewCart)

// *************** exportamos la variable router *************** //
module.exports = router;