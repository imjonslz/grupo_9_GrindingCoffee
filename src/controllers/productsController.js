// *************** requerimos path *************** //
const path = require('path');
const fs = require("fs")

const productsFilePath = path.join(__dirname, '../data/productsCoffe.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// *************** objeto literal con los metodos a exportar *************** //
let detailController = {

    // Renderiza la vista '/detalle'
    viewDetail: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
       const singleProduct = products.find(function (product) {
        return product.id == req.params.id
       })
       const relatedProducts = products.filter(function (product) {
        return product.category === singleProduct.category && product.id !== singleProduct.id;
       })
       
        res.render('productDetail', {singleProduct, relatedProducts});
    }

};
    
// *************** exportamos el objeto literal *************** //
module.exports = detailController;