// *************** requerimos path *************** //
const fs = require('fs');
const path = require('path');
/* En la constante "products" ya tienen los productos que están 
guardados en la carpeta Data como Json (un array de objetos literales) */
const productsFilePath = path.join(__dirname, '../data/productsCoffe.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


// *************** objeto literal con los metodos a exportar *************** //
let mainController = {
    // Renderiza la vista '/detalle'
    viewHome: (req, res) => {
        
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        const Primaryproducts = products.filter(function (product) {
            return product.category == "primary"
        })
        const Secondaryproducts = products.filter(function (product) {
            return product.category == "secondary"
        })
        res.render('index', {products, Primaryproducts, Secondaryproducts });
    }

};
    
// *************** exportamos el objeto literal *************** //
module.exports = mainController;