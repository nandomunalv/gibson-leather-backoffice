import {Router} from 'express';
import * as productService from './ProductService';

const router = Router();

router.post('/products', async (req, res) => {
    const payload = req.body;
    const result = await productService.insertNewProducto(payload);

    if (result.insertId) {
        req.flash('successMessage', result.message);
        res.redirect('/products/list?q=');
    } else {
        req.flash('errorMessage', result.message);
        res.redirect('/products/add');
    }
});

router.post('/products/:id', async (req, res) => {
    const {id} = req.params;
    const payload = req.body;
    const result = await productService.updatedProductData(id, payload);

    if (result.changedRows) {
        req.flash('successMessage', result.message);
        res.redirect('/products/list?q=');
    } else {
        req.flash('errorMessage', result.message);
        res.redirect(`/products/edit/${payload.productSku}`);
    }
});


module.exports = router;
