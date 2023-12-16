// *************** requerimos path *************** //
const path = require('path');

// *************** objeto literal con los metodos a exportar *************** //
let detailController = {

    // Renderiza la vista '/detalle'
    viewDetail: (req, res) => {
        res.render('productDetail');
    }

};
    
// *************** exportamos el objeto literal *************** //
module.exports = detailController;