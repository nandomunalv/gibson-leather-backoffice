import {Router} from 'express';
import upload from '../../config/multer';
import * as productService from './ProductService';
import * as imgUtil from '../Util/image';

const router = Router();

router.post('/products', upload.single('sampleFile'), async (req, res) => {
    const payload = req.body;

    payload.productImgName = req.file.filename;
    payload.productImgUrl = `/img/components/products/${req.file.filename}`;

    const result = await productService.insertNewProducto(payload);

    if (result.insertId) {
        await imgUtil.transferImage(req.file.filename, req.file.destination);

        req.flash('successMessage', result.message);
        res.redirect('/products/list?q=');
    } else {
        req.flash('errorMessage', result.message);
        res.redirect('/products/add');
    }
});

router.post('/products/:id', upload.single('sampleFile'), async (req, res) => {
    const {id} = req.params;
    const payload = req.body;

    payload.productImgName = req.file.filename;
    payload.productImgUrl = `/img/components/products/${req.file.filename}`;

    const result = await productService.updatedProductData(id, payload);

    if (result.changedRows) {
        await imgUtil.transferImage(req.file.filename, req.file.destination);

        req.flash('successMessage', result.message);
        res.redirect('/products/list?q=');
    } else {
        req.flash('errorMessage', result.message);
        res.redirect(`/products/edit/${payload.productSku}`);
    }
});

router.put('/products/upload', upload.single('formFile') ,async (req, res) => {
    let uploadedFile = req.file.fieldname;

    console.log('>> FILE:', req.file);

    await imgUtil.transferImage(req.file.filename, req.file.destination);

    if (uploadedFile) {
        res.json("File uploaded successfully");
    }
});

module.exports = router;
