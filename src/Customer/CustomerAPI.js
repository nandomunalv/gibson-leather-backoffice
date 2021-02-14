import {Router} from 'express'
import * as customerService from './CustomerService';

const router = Router();

router.post('/customers', async (req, res) => {
    const payload = req.body;
    const result = await customerService.insertNewCustomer(payload);

    if (result.insertId) {
        req.flash('successMessage', result.message);
        res.redirect('/customers/list?searchValue=');
    } else {
        req.flash('errorMessage', result.message);
        res.redirect('/customers/add');
    }
});

router.post('/customers/:id', async (req, res) => {
    const {id} = req.params;
    const payload = req.body;
    const result = await customerService.updatedCustomerData(id, payload);

    if (result.changedRows) {
        req.flash('successMessage', result.message);
        res.redirect('/customers/list?searchValue=');
    } else {
        req.flash('errorMessage', result.message);
        res.redirect(`/customers/edit/${payload.documentNumber}`);
    }
});

router.get('/customers/disable/:id', async (req, res) => {
    const {id} = req.params;
    const result = await customerService.disableCustomer(id);

    result.changedRows ? req.flash('successMessage', result.message) : req.flash('errorMessage', result.message);
    res.redirect('/customers/list?searchValue=');
});

module.exports = router;
