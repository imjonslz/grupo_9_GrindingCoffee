// *************** requerimos path *************** //
const path = require('path');
// *************** requerimos y guardamos express *************** //
const methodOverride = require('method-override');
const express = require('express');
const app = express();
const publicPath = path.resolve(__dirname, '../public');

// ************ Middlewares - (don't touch) ************
app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: false })); // Para requerir del body
app.use(express.json()); 
app.use(methodOverride('_method'));

// *************** configuramos view engine *************** //
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// *************** configuramos la carpeta public *************** //

// *************** requerimos los enrutadores *************** //
let mainRouter = require('./routes/mainRouter.js');
let productsRouter = require('./routes/productsRouter.js');
let usersRouter = require('./routes/usersRouter.js');
let cartRouter = require('./routes/cartRouter.js');
let allProducts = require('./routes/allProductsRouter.js');
/* let registerRouter = require('./routes/registerRouter.js'); */

// *************** rutas *************** //
app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/user', usersRouter);
app.use('/cart', cartRouter);
app.use('/allProducts', allProducts);
/* app.use('/register', registerRouter); */

// *************** ponemos a escuchar el servidor *************** //
app.listen(3060, () => console.log('El servidor esta corriendo en: http://localhost:3060'));