// *************** requerimos path *************** //
const path = require('path');

// *************** objeto literal con los metodos a exportar *************** //
let cartController = {

    // Renderiza la vista '/detalle'
    viewCart: (req, res) => {
        res.render('productCart', {currentPath: req.path} );
    }

};
    
// *************** exportamos el objeto literal *************** //
module.exports = cartController;