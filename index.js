import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';

import middlewares from './config/middlewares';
import helpers from './src/Util/helpers';

import customerWEB from './src/Customer/CustomerWEB';
import customerAPI from './src/Customer/CustomerAPI';
import productWEB from './src/Products/ProductWEB';
import productAPI from './src/Products/ProductAPI';

// Initialization
const app = express();

// Public
app.use(express.static('public'));

// Settings
app.set('views', path.join(__dirname, 'src/Views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers,
}));
app.set('view engine', '.hbs');

// Middleware config
app.use(...middlewares);

// Global Variables
app.use((req, res, next) => {
    app.locals.successMessage = req.flash('successMessage');
    app.locals.errorMessage = req.flash('errorMessage');
    app.locals.infoMessage = req.flash('infoMessage');
    app.locals.user = req.user;
    next();
})

// Routing
app.use('/customers', customerWEB);
app.use('/customers/api', customerAPI);
app.use('/products', productWEB);
app.use('/products/api', productAPI);

// RUN
app.listen(process.env.PORT || 3000, () => {
    console.log('El servidor esta levantado.');
})


