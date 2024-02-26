const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productsCoffe.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require("../../database/models")


let allProductsController = {
    allProducts: async (req, res) => {
        try{
            const products = await db.Products.findAll({
                include: [{ association: "categories" }, { association: "sizes" }]
            });
        
            // Filter products by category 'Cafe en grano'
            const EnGrano = products.filter(product => {
                return product.categories.category === 'Cafe en grano';
            });
        
            // Filter products by category 'Cafe molido'
            const molido = products.filter(product => {
                return product.categories.category === 'Cafe molido';
            });
           
            res.render('allProductsPage', {products, EnGrano, molido });
        }catch (error) {
            // Handle errors
            console.error('Error fetching data:', error);
            res.status(500).send('Internal Server Error');
        }
        
 /*        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        const EnGrano = products.filter(function (product) {
            return product.category == "Cafe en grano"
        })
        const molido = products.filter(function (product) {
            return product.category == "Cafe molido"
        })
    } */
    }
}


module.exports = allProductsController;