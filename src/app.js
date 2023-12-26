// *************** requerimos path *************** //
const path = require('path');

// *************** requerimos y guardamos express *************** //
const express = require('express');
const app = express();

// *************** configuramos view engine *************** //
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// *************** configuramos la carpeta public *************** //
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

// *************** requerimos los enrutadores *************** //
let mainRouter = require('./routes/mainRouter.js');
let productsRouter = require('./routes/productsRouter.js');
let usersRouter = require('./routes/usersRouter.js');
let cartRouter = require('./routes/cartRouter.js');
/* let registerRouter = require('./routes/registerRouter.js'); */

// *************** rutas *************** //
app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/user', usersRouter);
app.use('/cart', cartRouter);
/* app.use('/register', registerRouter); */

// *************** ponemos a escuchar el servidor *************** //
app.listen(3060, () => console.log('El servidor esta corriendo en: http://localhost:3060'));