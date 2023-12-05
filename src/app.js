const path = require('path');
const express = require('express');
const app = express();

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

app.listen(3060, () => console.log('El servidor esta corriendo en: http://localhost:3060'));

app.get("/",function (req,res) {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
});

app.get("/detalle",function (req,res) {
    res.sendFile(path.resolve(__dirname, "./views/productDetail.html"))
})
app.get("/productCart", function (req,res) {
    res.sendFile(path.resolve(__dirname, "./views/productCart.html"))
});

