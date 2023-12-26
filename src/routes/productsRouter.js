// *************** requerimos express y guardamos Router *************** //
const express = require('express');
const router = express.Router();

// *************** requerimos el controlador del detalle *************** //
const productsController = require('../controllers/productsController.js')

// *************** continuamos la ruta por el controlador *************** //
router.get('/detail/:id', productsController.viewDetail)

// *************** exportamos la variable router *************** //
module.exports = router;