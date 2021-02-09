import {Router} from 'express'
import * as customerService from './CustomerService';

const router = Router();

router.post('/customers', async (req, res) => {
    const payload = req.body;
    const result = await customerService.insertNewCustomer(payload);

    result.insertId ? req.flash('successMessage', result.message) : req.flash('errorMessage', result.message);
    res.redirect('/customers/list');
});

router.post('/customers/:id', async (req, res) => {
    const {id} = req.params;
    const payload = req.body;
    const result = await customerService.updatedCustomerData(id, payload);

    result.changedRows ? req.flash('successMessage', result.message) : req.flash('errorMessage', result.message);
    res.redirect('/customers/list');
});

router.get('/customers/disable/:id', async (req, res) => {
    const {id} = req.params;
    const result = await customerService.disableCustomer(id);

    result.changedRows ? req.flash('successMessage', result.message) : req.flash('errorMessage', result.message);
    res.redirect('/customers/list');
});

module.exports = router;
