// *************** requerimos express y guardamos Router *************** //
const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path")
const { body } = require('express-validator');

// *************** requerimos el controlador del detalle *************** //
const productsController = require('../controllers/productsController.js')


const validations = [
    body('productName')
        .notEmpty().withMessage('Tienes que ingresar un nombre al producto').bail()
         .isLength({ min: 5 }).withMessage('El campo debe tener al menos 5 caracteres'),
    body('description')
        .notEmpty().withMessage('Tienes que ingresar una descripcion').bail()
        .isLength({ min: 20 }).withMessage('El campo debe tener al menos 20 caracteres'),
    body('category')
        .notEmpty().withMessage('Debes seleccionar una categoria'),    
    body('size')
        .notEmpty().withMessage('Debes seleccionar un tamaño'),
    body('price')
        .notEmpty().withMessage('Debes agregar un precio'),
    body('productImage')
        .custom((value, { req }) => {
            let acceptedExtensions = ['.jpeg', '.jpg', '.png', '.gif'];
            
            let file = req.file;
              /* AQUI SOLO ES NECESARIO REALMENTE LA PRIMERA VALIDACION YA QUE LA VALIDACION DE LA IMAGEN SE ENCARGA MULTER */
            if(file){
                let fileExtensions = path.extname(file.originalname).toLowerCase();
                if (!acceptedExtensions.includes(fileExtensions))
                    throw new Error(`Los tipo de imagenes permitidas son ${acceptedExtensions.join(', ')}`);
            } 
                
            

           
            return true;
        })
]



const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        /* hay que pensar como si etuvieramos en la raiz */
        cb(null, "public/img/products")
    },
    filename: function (req,file,cb) {
        /* Que nombre tendran los archivos */
        cb(null, file.fieldname + "-"+ Date.now() + path.extname(file.originalname).toLowerCase())
    }
});
const upload = multer({storage:storage})

const adminMiddleware = require("../middlewares/adminMiddleware.js")

// *************** continuamos la ruta por el controlador *************** //
router.get('/detail/:id', productsController.viewDetail)
router.delete('/delete/:id',adminMiddleware, productsController.destroyProduct)
router.get('/create', adminMiddleware, productsController.viewCreate)
/* para que las validaciones funcionen sin problema, deben ir justo antes del metodo en este caso CreateProcces, de lo contrario no servira, porque esta multer, esta los middleware todo se debe cargar primero */
router.post('/create',adminMiddleware, upload.single("productImage"),validations, productsController.CreateProcces)
router.get('/edit/:id', adminMiddleware, productsController.viewEdit)
router.put('/edit/:id',adminMiddleware, upload.single("productImage"),validations, productsController.ProcessEdit)

// *************** exportamos la variable router *************** //
module.exports = router;