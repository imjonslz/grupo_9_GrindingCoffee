// *************** Require Path *************** //
const path = require('path');

// *************** Require FileSync *************** //
const fs = require('fs');

// *************** Require BCrypt *************** //
const bcryptjs = require('bcryptjs');

// *************** Require Validations Results from Express-Validator *************** //
const { validationResult } = require('express-validator');

// *************** Config .JSON *************** //
const usersFilePath = path.join(__dirname, '../data/users.json');

const User = require("../models/User")

// *************** User Controller HERE *************** //
const userController = {

    // Show '/login'
    viewLogin: (req, res) => {

        res.render('login', {currentPath: req.path });
    },

    userLogin: (req, res) => {
        let UserToLog = User.findByField("email", req.body.email);
    
        if (UserToLog) {
            let RightPassword = bcryptjs.compareSync(req.body.password, UserToLog.password);
    
            if (RightPassword) {
                // Caso de éxito: Contraseña correcta
                delete UserToLog.password
                req.session.userLogged = UserToLog
                if (req.body.remember_user) {
                    res.cookie("userEmail", req.body.email, {maxAge: (1000*60) * 60 })
                }
                res.redirect("/user/profile");
            } else {
                // Caso de error: Contraseña incorrecta
                res.render("login", {
                    errors: {
                        email: {
                            msg: "Los datos que ingresaste son incorrectos"
                        }
                    }
                });
            }
        } else {
            // Caso de error: Usuario no encontrado
            res.render("login", {
                errors: {
                    email: {
                        msg: "No se encuentra el email: " + req.body.email + " en esta base de datos"
                    }
                }
            });
        }
    },
    profile: (req,res) =>{
        console.log(req.cookies.userEmail);
    res.render("UserProfile", {user: req.session.userLogged})
    },
    logout: (req,res) =>{
        res.clearCookie("userEmail")
     req.session.destroy()
    return res.redirect("/")
    },
    

    // Show '/register'
    viewRegister: (req, res) => {
        res.cookie("testing", "Hola Mundo", {maxAge: 1000*30})
        res.render('register', {currentPath: req.path });

    },

    userCreate: (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()){
            return res.render('register', {
                errors : errors.mapped(),
                oldData : req.body
            })
        }

        let userFile = fs.readFileSync(usersFilePath, {encoding : 'utf-8'})
        let users;

        if (userFile == ''){
            users = [];
        } else {
            users = JSON.parse(userFile); 
        }

        // Validation user exist //
        let findByField = (field, text) =>{
            let allUsers = users;
            let userFound = allUsers.find(oneUser => oneUser[field] === text);
            return userFound
        }

        let userInDB = findByField('email', req.body.email);
        if (userInDB){
            return res.render('register', {
                errors : {
                    email: {
                        msg: 'Este correo ya pertenece a un usuario'
                    }
                },
                oldData : req.body
            })
        }
        // End validation user exist//

        let user = {
            id: users.length + 1,
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            avatar: req.file.filename,
            password: bcryptjs.hashSync(req.body.password, 10) 
        }

        users.push(user);

        let usersJSON = JSON.stringify(users);

        fs.writeFileSync(usersFilePath, usersJSON);

        res.redirect('/user/login/');
    }
};
    
// *************** Export User Controller *************** //
module.exports = userController;