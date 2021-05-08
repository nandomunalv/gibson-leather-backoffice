const express = require('express');

const controller = require('./customer.controller');

const router = express.Router();

const {ErrorHandler} = require('./../glb-util/errror');


router.get('/all', async (request, response, next) => {
    await controller.getCustomers()
        .then((data) => {
            response.send({data});
        })
        .catch((err) => next(new ErrorHandler(500, err)));

});

router.get('/customer', async (request, response) => {
    const {q}= request.query;
    const data = await controller.getDynamicCustomer(q);

    response.send({data});
});

router.post('/customer', async (request, response) => {
    const payload = request.body;
    const customer = await controller.createCustomer(payload);

    response
        .send({ok: true, customer, message: `El cliente fue creado.`})
        .status(201);
});

router.put('/customer/:id', async (request, response) => {
    const {id} = request.params;
    const payload = request.body;
    const customer = await controller.editCustomer(id, payload);

    response
        .send({ok: true, customer, message: 'El cliente fue actualizado'});
});

router.delete('/customer/disable/:id', async(request, response, next) => {
    const {id} = request.params;
    
    await controller.removeCustomer(id)
        .then((disable) => {
            if (disable) {
                response.status(204).end();
            } else {
                response
                    .send({status: 'error', message: 'El cliente ya fue desactivado.'})
                    .status(400);
            }
        })
        .catch((err) => next(new ErrorHandler(err)));
});

module.exports = router;