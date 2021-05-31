const express = require('express');
const router = express.Router();
const database = require('./order.dao');

const pool = require('./../../config/server/database');

const {ErrorHandler} = require('./../glb-util/errror');

router.post('/order', async (request, response,next) => {
    const payload = request.body;

    console.log(payload);
    
    await database.insertOrder(['SKUTEST123', 'ASDASDASD']);

    response.status(201).send({ok: true, message: 'Orden creada'});
});

module.exports = router;