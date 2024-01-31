// *************** Require Path *************** //
const path = require('path');

// *************** Require FileSync *************** //
const fs = require('fs');

// *************** Require Validations Results from Express-Validator *************** //
const { validationResult } = require('express-validator');

// *************** Config .JSON *************** //
const usersFilePath = path.join(__dirname, '../data/users.json');

// *************** User Controller HERE *************** //
const userController = {

    // Show '/login'
    viewLogin: (req, res) => {
        res.render('login', {currentPath: req.path });
    },

    userLogin: (req, res) =>{
        let userFile = fs.readFileSync(usersFilePath, {encoding : 'utf-8'})
        let users;

        if (userFile == ''){
            users = [];
        } else {
            users = JSON.parse(userFile); 
        }

        let userToLog = ' ';

        for(let i = 0; i < users.length; i++){
            if (users[i].email == req.body.email){
                if(bcrypt.compareSync(req.body.password, users[i].password)){
                    userToLog = users[i];
                    break;
                }
            }
        }
        if (userToLog == undefined){
            return res.render ('login', {errors: [
                {msg: 'El mail o la contraseña son incorrectos.'}
            ]} );
        }

        req.session.userToLog = userToLog;
        res.redirect('/')
    },

    // Show '/register'
    viewRegister: (req, res) => {
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

        let user = {
            id: users.length + 1,
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            avatar: req.body.avatar,
            password: req.body.password
        }

        users.push(user);

        let usersJSON = JSON.stringify(users);

        fs.writeFileSync(usersFilePath, usersJSON);

        res.redirect('/');
    }
};
    
// *************** Export User Controller *************** //
module.exports = userController;