const app = require('../index');
const {logger} = require('../config/server/logger');
const {handleError} = require('../src/glb-util/errror');

const SERVER_PORT = process.env.PORT || 3000;

app.use(function (err, req, res, next) {
    if (!err.statusCode) err.statusCode = 500;
    if (err.message === '') err.message = 'Ocurrió un error en el servidor.';
    handleError(err, res);
});

process.on('unhandledRejection', (err) => {
    console.error(err.name);
});

app.listen(SERVER_PORT, () => {
    logger.info('SERVER: Ready to use');
    logger.info(`PORT: ${SERVER_PORT}`);
});
