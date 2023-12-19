// *************** requerimos express y guardamos Router *************** //
const express = require('express');
const router = express.Router();

// *************** requerimos el controlador del detalle *************** //
const loginController = require('../controllers/loginController.js')

// *************** continuamos la ruta por el controlador *************** //
router.get('/', loginController.viewLogin)

// *************** exportamos la variable router *************** //
module.exports = router;