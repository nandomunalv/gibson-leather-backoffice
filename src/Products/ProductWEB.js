import {Router} from 'express';
import * as productService from './ProductService';

const router = Router();

router.get('/list', async (req, res) => {
    let result;

    console.log(req.sessionID);
    console.log(req.session.id);
    console.log(req.session.cookie.expires);

    const {q} = req.query;
    if(!!q || q !== '') {
        result = await productService.searchDynamicProduct(q);
    } else {
        result = await productService.searchProducts();
    }
    res.render('products/list', {result, helpers: {
        hello: () => {console.log('hello')}
    }});
});

router.get('/add', (req, res) => {
    res.render('products/add');
});

router.get('/edit/:productSku', async (req, res) => {
    const {productSku} = req.params;
    const result = await productService.searchOneProduct(productSku);

    res.render('products/edit', {product: result});
});

module.exports = router;
