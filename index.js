import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';

import middlewares from './config/middlewares';

import customerAPI from './src/Customer/CustomerAPI';
import productAPI from './src/Products/ProductAPI';

// Initialization
const app = express();

// Settings
app.set('views', path.join(__dirname, 'src/Views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir:path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
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
app.use('/customers',customerAPI);
app.use(productAPI);

// RUN
app.listen(process.env.PORT || 3000, () => {
    console.log('El servidor esta levantado.');
})


