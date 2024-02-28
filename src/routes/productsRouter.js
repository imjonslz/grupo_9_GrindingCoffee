// *************** requerimos express y guardamos Router *************** //
const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path")

// *************** requerimos el controlador del detalle *************** //
const productsController = require('../controllers/productsController.js')

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
router.post('/create',adminMiddleware, upload.single("productImage"), productsController.CreateProcces)
router.get('/edit/:id', adminMiddleware, productsController.viewEdit)
router.put('/edit/:id',adminMiddleware, upload.single("productImage"), productsController.ProcessEdit)

// *************** exportamos la variable router *************** //
module.exports = router;