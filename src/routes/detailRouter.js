// *************** requerimos express y guardamos Router *************** //
const express = require('express');
const router = express.Router();

// *************** requerimos el controlador del detalle *************** //
const detailController = require('../controllers/detailController.js')

// *************** continuamos la ruta por el controlador *************** //
router.get('/detalle', detailController.viewDetail)

// *************** exportamos la variable router *************** //
module.exports = router;