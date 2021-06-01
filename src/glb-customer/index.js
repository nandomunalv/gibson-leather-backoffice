const express = require('express');
const router = express.Router();

const controller = require('./customer.controller');

const {ErrorHandler} = require('./../glb-util/errror');


router.get('/all', async (request, response, next) => {
    await controller.getCustomers()
        .then((data) => response.send({data}))
        .catch((err) => next(new ErrorHandler(err)));
});

router.get('/customer', async (request, response, next) => {
    const {q}= request.query;

    await controller.getDynamicCustomer(q)
        .then((data) => response.send({data}))
        .catch((err) => next(new ErrorHandler(err)));
});

router.post('/customer', async (request, response, next) => {
    const payload = request.body;

    await controller.createCustomer(payload)
        .then((customer) => {
            response
                .status(201)
                .send({ok: true, customer, message: 'El cliente fue creado.'});
        })
        .catch((err) => next(new ErrorHandler(err)));
});

router.put('/customer/:id', async (request, response, next) => {
    const {id} = request.params;
    const payload = request.body;

    await controller.editCustomer(id, payload)
        .then((customer) => {
            if (customer) {
                response
                    .send({ok: true, customer, message: 'El cliente fue actualizado'});
            } else {
                response.status(204).end();
            }
        })
        .catch((err) => next(new ErrorHandler(err)));    
});

router.delete('/customer/disable/:id', async(request, response, next) => {
    const {id} = request.params;
    
    await controller.removeCustomer(id)
        .then((disable) => {
            if (disable) {
                response.status(204).end();
            } else {
                response
                    .status(400)
                    .send({status: 'info', message: 'El cliente ya fue desactivado.'});
            }
        })
        .catch((err) => next(new ErrorHandler(err)));
});

module.exports = router;