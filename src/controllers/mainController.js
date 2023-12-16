// *************** requerimos path *************** //
const path = require('path');

// *************** objeto literal con los metodos a exportar *************** //
let mainController = {

    // Renderiza la vista '/detalle'
    viewHome: (req, res) => {
        res.render('index');
    }

};
    
// *************** exportamos el objeto literal *************** //
module.exports = mainController;