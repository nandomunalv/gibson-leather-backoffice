const express = require('express');
const router = express.Router();
const database = require('./order.dao');
const service = require('./order.service');
const controller = require('./order.controller');

const pool = require('./../../config/server/database');

const {ErrorHandler} = require('./../glb-util/errror');

router.post('/order', async (request, response,next) => {
    const payload = request.body;

    // await database.insertOrder(['SKUTEST123', 'ASDASDASD']);
    // await service.searchProducts(payload.products);
    controller.makeOrder(payload)
        .then((result) => {
            response.status(201).send({ok: true, message: `Orden creada ${result}`});
        })
        .catch((err) => {
            console.log('ERR::', err);
        });
});

module.exports = router;