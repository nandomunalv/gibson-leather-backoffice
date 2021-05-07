const express = require('express');

const controller = require('./product.contoller');

const router = express.Router();


router.get('/all', async (request, response) => {
    const data = await controller.getProducts();    
    response.send({ok: true, data});
});

router.get('/product', async (request, response) => {
    const {q} =  request.query;
    const data = await controller.getDynamicProduct(q);

    response.send({ok: true, data})
});

router.post('/product', async (request, response) => {
    const payload = request.body;
    const data = await controller.createProduct(payload);

    response
        .send({ok: true, product: data, message: `The product was created.`})
        .status(201);
});

router.put('/product/:id', async (request, response) => {
    const {id} = request.params;
    const payload = request.body;
    const data = await controller.editProduct(id, payload);

    response.send({ok: true, product: data, message: 'The product has been updated.'});
});

module.exports = router;