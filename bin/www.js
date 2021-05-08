const app = require('../index');
const { handleError } = require('../src/glb-util/errror');

const SERVER_PORT = process.env.PORT || 3000;

// TODO: Hacer que funcione este capturador de errores
app.use(function(err, req, res, next) {
    if (!err.statusCode) {
        err.statusCode = 500;
    } 
    handleError(err, res);
});

process.on('unhandledRejection', (err) => {
    console.log(err.code);
});



app.listen(SERVER_PORT, () => {
    console.log('>>> The server is ready to use');
});
