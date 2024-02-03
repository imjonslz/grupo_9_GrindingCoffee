//1 guardar al usuario en la DB
//2 buscar al usuario que se quiere loguear por su email
//3 buscar a un usuario por su ID
//4 editar la informacion de un usuario
//5 eliminar a un usuario de la DB
const fs = require("fs")
const path = require("path")
const User = {
    /* Cuando es ruta relativa es necesario utilizar el path, o mejor dicho cuando es una ruta muy rebuscada */
    fileName: path.join(__dirname, "../data/users.json"),
    getData: function () {
        return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
    },
    generateId: function () {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if (lastUser) {
            return lastUser.id + 1;
        }
        return 1;
    },
    findAll: function () {
        return this.getData();
    },
    findByPk: function (id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(function name(user) {
            return user.id === id
        })
        return userFound   
    },
    findByField: function (field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(function name(user) {
            /* en field, es como si fuera user.name o user.email o asi */
            return user[field] === text
        })
        return userFound   
    },
    create: function (userData) {
        let allUsers = this.findAll();
        let newUser = {
            id : this.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, " "));
        return newUser;
    },
    delete : function (id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(function (oneUser) {
            return oneUser.id !== id
        })
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, " "));
        return true;
    }
}

module.exports = User;