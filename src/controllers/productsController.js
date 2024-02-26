// *************** requerimos path *************** //
const path = require('path');
const fs = require("fs")

const productsFilePath = path.join(__dirname, '../data/productsCoffe.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require("../../database/models")


// *************** objeto literal con los metodos a exportar *************** //
let detailController = {
    // Renderiza la vista '/detalle'
    viewDetail: async (req, res) => {
        try{
            const products = await db.Products.findAll({
                include: [{ association: "categories" }, { association: "sizes" }]
            });
            
            const singleProduct = await db.Products.findByPk(req.params.id,{
                include: [{ association: "categories" }, { association: "sizes" }]
            });
            
            const relatedProducts = products.filter(function (product) {
                return product.categories.category === singleProduct.categories.category && product.id !== singleProduct.id;
               }) 

             

            res.render('productDetail', {singleProduct, relatedProducts, currentPath: req.path });
        }catch (error) {
            // Handle errors
            console.error('Error fetching data:', error);
            res.status(500).send('Internal Server Error');
        }
     
     
       
    },

    destroyProduct: (req, res) => {
      /*   let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        products = products.filter(product => {
			return product.id != req.params.id
		})


        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " ")); */
        db.Products.destroy({
            where: {
                id: req.params.id
            }
        })

		res.redirect("/")
    },
    viewCreate: async (req, res) => {
        try{
            const categories = await db.Categories.findAll();
            const sizes = await db.Sizes.findAll();
            res.render('createProducts', {categories, sizes, currentPath: req.path});

        }catch (error) {
            // Handle errors
            console.error('Error fetching data:', error);
            res.status(500).send('Internal Server Error');
        }
    },
    CreateProcces: async(req, res) => {
        try{

            await db.Products.create({
                productName: req.body.productName,
                description: req.body.description,
                /* acordarse que tanto en category como en size, estan recibiendo un numero, un id, y en la tabla principal de productos no tienen el nombre que tenian en el JSON */
                category_id: req.body.category,
                size_id: req.body.size,
                price: parseInt(req.body.price),
                productImage: req.file ? req.file.filename : "default-image.png"
                
            })
        }catch (error) {
            // Handle errors
            console.error('Error fetching data:', error);
            res.status(500).send('Internal Server Error');
        }
        res.redirect("/")
    },
    viewEdit: async(req, res) => {
        try{
            const singleProduct = await db.Products.findByPk(req.params.id);
            const categories = await db.Categories.findAll();
            const sizes = await db.Sizes.findAll();
            res.render('editProducts', {singleProduct,categories,sizes, currentPath: req.path });
        }catch (error) {
            // Handle errors
            console.error('Error fetching data:', error);
            res.status(500).send('Internal Server Error');
        }
  /*       const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        const singleProduct = products.find(function (product) {
            return product.id == req.params.id
           }) */
    },
    ProcessEdit: async (req, res) => {
        try {
            const productEdit = await db.Products.findByPk(req.params.id)
            await db.Products.update({
                productName: req.body.productName,
                price: parseInt(req.body.price),
                discount: req.body.discount,
                category_id: req.body.category,
                size_id: req.body.size,
                description: req.body.description,
                productImage: req.file != undefined ? req.file.filename : productEdit.productImage
            },
             {
                where: { id: req.params.id } // Seleccionar el producto basado en su ID
            });

            /* let productDataToUpdate = {
                productName: req.body.productName,
                price: parseInt(req.body.price),
                discount: req.body.discount,
                category_id: req.body.category,
                size_id: req.body.size,
                description: req.body.description,
                productImage: req.file != undefined ? req.file.filename : productEdit.productImage
            };
        
            // Verificar si se seleccionó una nueva imagen
            if (req.file) {
                productDataToUpdate.productImage = req.file.filename;
            }
        
            await db.Products.update(productDataToUpdate, {
                where: { id: req.params.id } // Seleccionar el producto basado en su ID
            }); */
        
            res.redirect("/");
        }catch(error) {
            // Handle errors
            console.error('Error fetching data:', error);
            res.status(500).send('Internal Server Error');
        }

   

    }

};
    
// *************** exportamos el objeto literal *************** //
module.exports = detailController;


/* const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const singleProduct = products.find(function (product) {
 return product.id == req.params.id
})
const relatedProducts = products.filter(function (product) {
 return product.category === singleProduct.category && product.id !== singleProduct.id;
}) */

/* const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('createProducts', {products, currentPath: req.path}); */

            /*  const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        let productEdit = products.find(product => {
			return product.id == req.params.id
		})
		productEdit = {
			id: productEdit.id,
            productName: req.body.productName,
			price: parseInt(req.body.price),
			discount: req.body.discount,
			category: req.body.category,
            size: req.body.size,
			description: req.body.description,
			productImage: req.file != undefined ? req.file.filename : productEdit.productImage
            
		},
        
        let index = products.findIndex(product =>{
            return product.id == req.params.id
        })

        products[index] = productEdit;
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " ")); */