const app = require('../index');

const SERVER_PORT = process.env.PORT || 3000;

app.listen(SERVER_PORT, () => {
    console.log('>>> The server is ready to use');
});
