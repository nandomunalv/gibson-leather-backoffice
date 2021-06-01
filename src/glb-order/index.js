const express = require('express');
const router = express.Router();
const controller = require('./order.controller');

const {ErrorHandler} = require('./../glb-util/errror');

router.post('/order', async (request, response,next) => {
    const payload = request.body;

    controller.makeOrder(payload)
        .then((result) => {
            if (result.ok) {
                response.status(201).send(result);
            } else {
                response.status(400).send(result);
            }
        })
        .catch((err) => next(new ErrorHandler(err)));
});

module.exports = router;