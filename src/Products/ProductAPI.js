import {Router} from 'express';
import * as productService from './ProductService';

const router = Router();

router.get('/products', async (req, res) => {
    const result = await productService.searchProducts();
    res.status(200).send(result);
});

router.post('/products', async (req, res) => {
    const {payload} = req.body;
    const result = await productService.insertNewProducto(payload);

    res.status(201).send({productId: result, message: 'Producto registrado.'});
});

router.put('/products/:id', async (req, res) => {
    const {id} = req.params;
    const {payload} = req.body;
    const result = await productService.updatedProductData(id, payload);

    result ? res.status(200).send({message: 'Información del producto actualizada.'}) : res.status(204).send();
});

router.delete('/products/:id', async (req, res) => {

});


module.exports = router;