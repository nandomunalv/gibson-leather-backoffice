const express = require('express');

const controller = require('./customer.controller');

const router = express.Router();

router.post('/customer', async (request, response) => {
    const payload = req.body;
    const data = await controller.createCustomer(payload);

    console.log(data);

    response
        .send({ok: true, message: 'Success execution.'})
        .status(201);
});

router.put('/customer/:id', async (request, response) => {
    const {id} = request.params;
    const payload = request.body;
    const data = await controller.editCustomer(id, payload);

    console.log(data);

    response
        .send({ok: true, message: 'Success execution.'});
});

router.delete('/customer/disable/:id', async(request, response) => {
    const {id} = request.params;
    const data = await controller.removeCustomer(id);

    console.log(data);

    response.status(204);
})