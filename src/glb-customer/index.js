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

router.delete('/customer/disable/:id', async(request, response) => {
    const {id} = request.params;
    const disable = await controller.removeCustomer(id);

    if (disable) {
        response.status(204).end();
    } else {
        response
            .send({status: 'error', message: 'El cliente ya fue desactivado.'})
            .status(400);
    }
});

// router.use((error, req, res, next) => {
//     if (error) {
//         process.on('unhandledRejection', (err) => {
//             handleError(err, res);
//         });
//     } 
//     next();
// });


module.exports = router;