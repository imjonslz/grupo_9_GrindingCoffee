//const User = require("../models/User")
const db = require("../../database/models")

async function userLoggedMiddleware(req,res,next) {
    /* locals son variables que puedo compartir independientemente del controlador */
    res.locals.isLogged = false
    let emailInCookie = req.cookies.userEmail;
    if (emailInCookie) {
        let userFromCookie = await db.Users.findOne({ where: { email: emailInCookie } });

        if (userFromCookie) {
            req.session.userLogged = userFromCookie;
        }
    }
    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true
        /* porque hay que especificar el locals.userRoll_id? porque en EJS no se puede acceder a propiedades, hay que acceder a ellas en javascript de alguna manera antes de mandarlas a la vista */
        res.locals.userRoll_id = req.session.userLogged.userRoll_id;
        res.locals.userLogged = req.session.userLogged;
    }

    next();
        
    }

module.exports = userLoggedMiddleware;