const app = require('../index');
const { handleError } = require('../src/glb-util/errror');

const SERVER_PORT = process.env.PORT || 3000;

// TODO: Hacer que funcione este capturador de errores
app.use((err, req, res, next) => {
    handleError(err, res);
});

app.listen(SERVER_PORT, () => {
    console.log('>>> The server is ready to use');
});
