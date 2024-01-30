const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productsCoffe.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


let allProductsController = {
    allProducts: (req, res) => {
        
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        const EnGrano = products.filter(function (product) {
            return product.category == "Cafe en grano"
        })
        const molido = products.filter(function (product) {
            return product.category == "Cafe molido"
        })
        res.render('allProductsPage', {products, EnGrano, molido });
    }

};

module.exports = allProductsController;