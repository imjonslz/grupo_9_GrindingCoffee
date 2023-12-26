// *************** requerimos express y guardamos Router *************** //
const express = require('express');
const router = express.Router();

// *************** requerimos el controlador del detalle *************** //
const loginController = require('../controllers/usersController.js')

// *************** continuamos la ruta por el controlador *************** //
router.get('/login', loginController.viewLogin)
router.get('/register', loginController.viewRegister)

// *************** exportamos la variable router *************** //
module.exports = router;