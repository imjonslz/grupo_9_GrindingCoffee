// *************** requerimos path *************** //
const path = require('path');

// *************** objeto literal con los metodos a exportar *************** //
let loginController = {

    // Renderiza la vista '/detalle'
    viewLogin: (req, res) => {
        res.render('login', {currentPath: req.path });
    },
    viewRegister: (req, res) => {
        res.render('register');
    }

};
    
// *************** exportamos el objeto literal *************** //
module.exports = loginController;