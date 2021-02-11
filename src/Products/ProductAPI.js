import {Router} from 'express';
import * as productService from './ProductService';

const router = Router();

// TODO:
//  * Considerar la validación para el "errorMessage" al momento de crear o actualizar
//  * Tomar como guía CustomerAPI.js

router.post('/products', async (req, res) => {
    const {payload} = req.body;
    const result = await productService.insertNewProducto(payload);

    res.status(201).send({productId: result, message: 'Producto registrado.'});
});

router.post('/products/:id', async (req, res) => {
    const {id} = req.params;
    const {payload} = req.body;
    const result = await productService.updatedProductData(id, payload);

    result ? res.status(200).send({message: 'Información del producto actualizada.'}) : res.status(204).send();
});

router.get('/products/disable/:id', async (req, res) => {

});


module.exports = router;
