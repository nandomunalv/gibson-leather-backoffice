import { Router } from 'express'
import * as customerService from './CustomerService';

const router = Router();

router.get('/add', (req, res) => {
    res.render('customer/add');
});

router.get('/list', (req, res) => {
    res.render('customer/list');
});

router.get('/edit', (req, res) => {
    res.render('customer/edit');
});

router.get('/api/customers', async (req, res) => {
    const result = await customerService.searchCustomer();
    res.status(200).send(result);
});

router.post('/api/customers', async (req, res) => {
    const payload = req.body;
    const result = await customerService.insertNewCustomer(payload);

    result.insertId ? req.flash('successMessage', result.message) : req.flash('errorMessage', result.message);
    res.redirect('/customers/add');
});

router.put('/api/customers/:id', async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    const result = await customerService.updatedCustomerData(id, payload);

    result ? res.status(200).send({ message: 'Información del cliente actualizada' }) : res.status(204).send();
});

router.delete('/api/customers/:id', async (req, res) => {
    const { id } = req.params;
    const result = await customerService.disabledCustomer(id);

    result ? res.status(204).send() : res.status(400).send({ message: 'El usuario se encuentra deshabilitado' });
});

module.exports = router;
