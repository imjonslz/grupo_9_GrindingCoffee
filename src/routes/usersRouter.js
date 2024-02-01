// *************** Require Express and safe Router *************** //
const express = require('express');
const router = express.Router();

// *************** Require Path *************** //
const path = require('path');

// *************** Require Multer *************** //
const multer = require('multer');

// *************** Require Body from Express-Validator *************** //
const { body } = require('express-validator');

// *************** Validations Config *************** //
const validations = [
    body('name')
        .notEmpty().withMessage('Tienes que ingresar tu nombre'),
    body('lastName')
        .notEmpty().withMessage('Tienes que ingresar tu apellido'),
    body('email')
        .notEmpty().withMessage('Tienes que ingresar un correo electrónico').bail()
        .isEmail().withMessage('Debes escribir un correo valido'),
    body('password')
        .notEmpty().withMessage('Tienes que ingresar una contraseña'),
    body('avatar')
        .custom((value, { req }) => {
            let acceptedExtensions = ['.jpeg', '.jpg', '.png', '.gif'];
            
            let file = req.file;

            if(!file){
                throw new Error('Tienes que subir una imagen');
            } else {
                
                let fileExtensions = path.extname(file.originalname)
                if (!acceptedExtensions.includes(fileExtensions))
                    throw new Error(`Los tipo de imagenes permitidas son ${acceptedExtensions.join(', ')}`);
            }

           
            return true;
        })
]

// *************** Multer Config *************** //
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb (null, './public/img/avatars')
    },

    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb (null, fileName);
    }
})

const uploadFile = multer ({ storage });

// *************** Require User Controller *************** //
const userController = require('../controllers/usersController.js')

// *************** User Routes *************** //
router.get('/login', userController.viewLogin)
router.post('/login', userController.userLogin)
router.get('/register', userController.viewRegister)
router.post('/register', uploadFile.single('avatar'), validations, userController.userCreate)

// *************** Export Router *************** //
module.exports = router;