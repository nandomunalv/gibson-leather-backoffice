const express = require('express');
const router = express.Router();

const controller = require('./product.controller');

const {ErrorHandler} = require('./../glb-util/errror');


router.get('/all', async (request, response, next) => {
    await controller.getProducts()
        .then((data) => response.send(data))
        .catch((err) => next(new ErrorHandler(err)));    
});

router.get('/product', async (request, response, next) => {
    const {q} =  request.query;

    await controller.getDynamicProduct(q)
        .then((data) => response.send(data))
        .catch((err) => next(new ErrorHandler(err)));
});

router.post('/product', async (request, response, next) => {
    const payload = request.body;

    await controller.createProduct(payload)
        .then((product) => {
            response
                .status(201)
                .send({ok: true, product, message: 'El producto fue creado.'});
        })
        .catch((err) => next(new ErrorHandler(err)));
});

router.put('/product/:id', async (request, response, next) => {
    const {id} = request.params;
    const payload = request.body;

    await controller.editProduct(id, payload)
        .then((product) => {
            if (product) {
                response
                    .send({ok: true, product, message: 'El producto fue actualizado'});
            } else {
                response.status(204).end();
            }
        })
        .catch((err) => next(new ErrorHandler(err)));
});

router.delete('/product/disable/:id', async (request, response, next) => {
    const {id} = request.params;

    await controller.removeProduct(id)
        .then((disable) => {
            if (disable) {
                response.status(204).end();
            } else {
                response
                    .status(400)
                    .send({status: 'info', message: 'El producto ya fue desactivado.'});
            }
        })
        .catch((err) => next(new ErrorHandler(err)));
});

module.exports = router;
