// *************** requerimos path *************** //
const path = require('path');

// *************** objeto literal con los metodos a exportar *************** //
let registerController = {

    // Renderiza la vista '/detalle'
    viewRegister: (req, res) => {
        res.render('register');
    }

};
    
// *************** exportamos el objeto literal *************** //
module.exports = registerController;