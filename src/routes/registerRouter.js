// *************** requerimos express y guardamos Router *************** //
const express = require('express');
const router = express.Router();

// *************** requerimos el controlador del detalle *************** //
const registerController = require('../controllers/registerController.js')

// *************** continuamos la ruta por el controlador *************** //
router.get('/registro', registerController.viewRegister)

// *************** exportamos la variable router *************** //
module.exports = router;