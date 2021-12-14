const express = require('express');
const router = express.Router();

const controller = require('./category.controller');
const {ErrorHandler} = require('./../glb-util/errror');

router.get('/category/all', async (request, response, next) => {
    await controller.getCategories()
        .then((data) => response.status(200).send(data))
        .catch((err) => next(new ErrorHandler(err)));
});

router.post('/category', async (request, response, next) => {
    const payload = request.body;

    await controller.createCategory(payload)
        .then((category) => {
            response
                .status(201)
                .send({ok: true, category, message: 'La categoría fue creada.'});
        })
        .catch((err) => next(new ErrorHandler(err)));
});

router.put('/category/:id', async (request, response, next) => {
    const {id} = request.params;
    const payload = request.body;

    await controller.editCategory(id, payload)
        .then((category) => {
            if (category) {
                response
                    .status(201)
                    .send({ok: true, category, message: 'La categoría fue actualizada.'});
            } else {
                response.status(204).end();
            }
        })
        .catch((err) => next(new ErrorHandler(err)));
});

router.delete('/category/:id', async (request, response, next) => {
    const {id} = request.params;

    await controller.removeCategory(id)
        .then((category) => {
            if (!category) {
                response
                    .status(400)
                    .send({status: 'info', message: 'No existe registro de la categoría.'});
            }
            response.status(204).end();
        })
        .catch((err) => next(new ErrorHandler(err)));
});

module.exports = router;
