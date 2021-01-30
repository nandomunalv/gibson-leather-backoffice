import {Router} from 'express'
import * as customerService from './CustomerService';

const router = Router();

router.get('/customers', async (req, res) => {
    const result = await customerService.searchCustomer();
    res.status(200).send(result);
});

router.post('/customers', async (req, res) => {
    const {payload} = req.body;
    const result = await customerService.insertNewCustomer(payload);
    
    res.send({customerId: result, message: 'Cliente creado correctamente'}).status(201);
});

router.put('/customers/:id', async (req, res) => {
    const {id} = req.params;
    const {payload} = req.body;
    const result = await customerService.updatedCustomerData(id, payload);

    result ? res.status(200).send({message: 'Información del cliente actualizada'}) : res.status(204).send();
});

router.delete('/customers/:id', async (req, res) => {
    const {id} = req.params;
    const result = await customerService.disabledCustomer(id);

    result ? res.status(204).send() : res.status(400).send({message: 'El usuario se encuentra deshabilitado'});
});

module.exports = router;
