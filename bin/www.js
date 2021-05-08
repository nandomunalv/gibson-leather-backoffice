const app = require('../index');
const { handleError } = require('../src/glb-util/errror');

const SERVER_PORT = process.env.PORT || 3000;

app.use(function(err, req, res, next) {
    if (!err.statusCode) err.statusCode = 500; 
    if (err.message === '') err.message = 'Ocurrio un error en el servidor.';
    handleError(err, res);
});

process.on('unhandledRejection', (err) => {
    console.error(err.name);
});

app.listen(SERVER_PORT, () => {
    console.log('>>> The server is ready to use');
});
