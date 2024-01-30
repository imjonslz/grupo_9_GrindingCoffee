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
       
        res.render('productDetail', {singleProduct, relatedProducts, currentPath: req.path });
    },

    destroyProduct: (req, res) => {
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        products = products.filter(product => {
			return product.id != req.params.id
		})


        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));

		res.redirect("/")
    },
    viewCreate: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('createProducts', {products, currentPath: req.path});
    },
    CreateProcces: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        const newProduct = {
            id: products[products.length - 1].id + 1,
				name: req.body.productName,
				price: parseInt(req.body.price),
				discount: req.body.discount,
				category: req.body.category,
                size: req.body.size,
				description: req.body.description,
                image: req.file ? req.file.filename : "default-image.png"
        }
        products.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "))
        res.redirect("/")
    },
    viewEdit: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        const singleProduct = products.find(function (product) {
            return product.id == req.params.id
           })
        res.render('editProducts', {singleProduct, currentPath: req.path });
    },
    ProcessEdit: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        let productEdit = products.find(product => {
			return product.id == req.params.id
		})
		productEdit = {
			id: productEdit.id,
            name: req.body.productName,
			price: parseInt(req.body.price),
			discount: req.body.discount,
			category: req.body.category,
            size: req.body.size,
			description: req.body.description,
			image: req.file != undefined ? req.file.filename : productEdit.image
		}
        let index = products.findIndex(product =>{
            return product.id == req.params.id
        })

        products[index] = productEdit;
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));

		res.redirect("/")
    }

};
    
// *************** exportamos el objeto literal *************** //
module.exports = detailController;