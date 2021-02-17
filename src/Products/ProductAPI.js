import {Router} from 'express';
import upload from '../../config/multer';
import * as imagemin from '../../config/imagemin';
import * as productService from './ProductService';
import * as imgUtil from '../Util/image';

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

router.put('/products/upload', upload.single('formFile') ,async (req, res) => {    
    let uploadedFile = req.file.fieldname;

    await imagemin.compress(req.file.filename).then((val) => {    
        console.log(`Image compressed from "${val[0].sourcePath}" to "${val[0].destinationPath}"`);
    });

    imgUtil.removeTmpImage(req.file.filename, req.file.destination);
    imgUtil.removeCompressImage(req.file.filename);

    if (uploadedFile) {
        res.json("file uploaded successfully");
    }
});

module.exports = router;
