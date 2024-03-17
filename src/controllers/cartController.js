// *************** requerimos path *************** //
const fs = require('fs');
const path = require('path');
/* En la constante "products" ya tienen los productos que están 
guardados en la carpeta Data como Json (un array de objetos literales) */
const productsFilePath = path.join(__dirname, '../data/productsCoffe.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require("../../database/models")

// *************** objeto literal con los metodos a exportar *************** //
let cartController = {

    // Renderiza la vista '/detalle'
    //viewCart: (req, res) => {
    //    res.render('productCart', {currentPath: req.path} );
   // }//
    viewCart: async (req, res) => {
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

            res.render('productCart', {products:products, EnGrano:EnGrano, molido:molido });
            
        }catch (error) {
            // Handle errors
            console.error('Error fetching data:', error);
            res.status(500).send('Internal Server Error');
        }
     
    }

};
    
// *************** exportamos el objeto literal *************** //
module.exports = cartController;