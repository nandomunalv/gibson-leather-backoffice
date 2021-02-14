import {Router} from 'express';
import * as customerService from './CustomerService';

const router = Router();

router.get('/list', async (req, res) => {
    const {searchValue} = req.query;

    let result;

    if (!!searchValue || searchValue !== '') {
        result = await customerService.searchDynamicCustomer(searchValue);
    } else {
        result = await customerService.searchCustomer();
    }
    res.render('customer/list', {result});
});

router.get('/add', (req, res) => {
    res.render('customer/add');
});

router.get('/edit/:documentNumber', async (req, res) => {
    const {documentNumber} = req.params;
    const result = await customerService.searchOneCustomer(documentNumber);
    res.render('customer/edit', {customer: result});
});

module.exports = router;
