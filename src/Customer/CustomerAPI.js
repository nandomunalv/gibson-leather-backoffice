import { Router } from 'express'
import * as customerService from './CustomerService';

const router = Router();

// TODO: Crear un archivo encargado de las rutas de la WEB.

// WEB
router.get('/add', (req, res) => {
    res.render('customer/add');
});

router.get('/edit/:documentNumber', async (req, res) => {
    const {documentNumber} = req.params;
    const result = await customerService.searchOneCustomer(documentNumber);

    res.render('customer/edit', {customer: result});
});

// API

router.get('/list', async (req, res) => {
    const result = await customerService.searchCustomer();
    res.render('customer/list', {result});
});

router.post('/api/customers', async (req, res) => {
    const payload = req.body;
    const result = await customerService.insertNewCustomer(payload);

    result.insertId ? req.flash('successMessage', result.message) : req.flash('errorMessage', result.message);
    res.redirect('/customers/list');
});

router.post('/api/customers-edit/:id', async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    const result = await customerService.updatedCustomerData(id, payload);

    result.changedRows ? req.flash('successMessage', result.message) : req.flash('errorMessage', result.message);
    res.redirect('/customers/list');
});

router.get('/api/customers-del/:id', async (req, res) => {
    const { id } = req.params;
    const result = await customerService.disabledCustomer(id);

    result.changedRows ? req.flash('successMessage', result.message) : req.flash('errorMessage', result.message);
    res.redirect('/customers/list');
});

module.exports = router;
