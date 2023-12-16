// *************** requerimos express y guardamos Router *************** //
const express = require('express');
const router = express.Router();

// *************** requerimos el controlador del detalle *************** //
const mainController = require('../controllers/mainController.js')

// *************** continuamos la ruta por el controlador *************** //
router.get('/', mainController.viewHome)

// *************** exportamos la variable router *************** //
module.exports = router;