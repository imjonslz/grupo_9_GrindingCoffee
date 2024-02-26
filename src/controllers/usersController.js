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

const db = require("../../database/models")

// *************** User Controller HERE *************** //
const userController = {

    // Show '/login'
    viewLogin: (req, res) => {

        res.render('login', {currentPath: req.path });
    },

    userLogin: async (req, res) => {
        try{

            let UserToLog = await db.Users.findOne({ where: { email: req.body.email } });
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
    }catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
        
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

    userCreate: async (req, res) => {
        try{
        const errors = validationResult(req);

        if (!errors.isEmpty()){
            return res.render('register', {
                errors : errors.mapped(),
                oldData : req.body
            })
        }

        const userInDB = await db.Users.findOne({ where: { email: req.body.email } });
        if (userInDB) {
            return res.render('register', {
                errors: {
                    email: {
                        msg: 'Este correo ya pertenece a un usuario'
                    }
                },
                oldData: req.body
            });
        
        }
        // End validation user exist//

        const newUser = await db.Users.create({
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            avatar: req.file.filename, 
            userRoll_id: 2,
            password: bcryptjs.hashSync(req.body.password, 10) 
        });

        res.redirect('/user/login/');
     }catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
     }
    },
    userEdit: async (req, res) => {
        try{
            res.render("UserEdit", {user: req.session.userLogged})

        }catch{

        }
    },
    userEditProcces: async (req, res) => {
        try{
        const user = await db.Users.findByPk(req.session.userLogged.id);
        
      await db.Users.update({
            name: req.body.name,
            lastName: req.body.lastName,
            avatar: req.file != undefined? req.file.filename : user.avatar
        }, {
            where: { id: req.session.userLogged.id }
        });

            res.redirect("/user/editProfile")

        }catch (error) {
            console.error('Error fetching data:', error);
            res.status(500).send('Internal Server Error');
            
        }
    }
}

    
// *************** Export User Controller *************** //
module.exports = userController;