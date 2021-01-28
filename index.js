import express from 'express';
import middlewares from './config/middlewares';

import customerAPI from './src/Customer/CustomerAPI';

// Initialization
const app = express();

// Middleware config
app.use(...middlewares);

// Routing
app.use(customerAPI);

// RUN
app.listen(process.env.PORT || 3000, () => {
    console.log('El servidor esta levantado.');
})


