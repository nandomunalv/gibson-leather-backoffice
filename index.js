const express = require('express');

const middlewares = require('./config/server/middlewares');

const customerModule = require('./src/glb-customer/index');
const productModule = require('./src/glb-product/index');

const app = express();

// Public
app.use(express.static('public'));

// Middlewares
app.use(...middlewares);

// Routing
app.use('/customers/api', customerModule);
app.use('/products/api', productModule);

module.exports = app;