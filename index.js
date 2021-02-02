import express from 'express';
import middlewares from './config/middlewares';

import customerAPI from './src/Customer/CustomerAPI';
import productAPI from './src/Products/ProductAPI';

// Initialization
const app = express();

// Middleware config
app.use(...middlewares);

// Routing
app.use(customerAPI);
app.use(productAPI);

// RUN
app.listen(process.env.PORT || 3000, () => {
    console.log('El servidor esta levantado.');
})


