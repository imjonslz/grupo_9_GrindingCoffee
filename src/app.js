const path = require('path');

const express = require('express');
const app = express();

const publicPath = app.join(__dirname, 'public');
app.use(express.static('public'));

app.listen(3060, () => console.log('El servidor esta corriendo en: http://localhost:3060'));