import {Router} from 'express'
import * as customerService from './CustomerService';

const router = Router();

router.get('/customers', (req, res) => {
    res.send({message: 'Ok'})
});

router.post('/customers', async (req, res) => {
    const {payload} = req.body;
    const result = await customerService.insertNewCustomer(payload);
    
    res.status(201).send({customerId: result, message: 'Cliente creado correctamente'});
});

router.put('/customers/:id', (req, res) => {

});

router.delete('/customers/:id', (req, res) => {

});

module.exports = router;
