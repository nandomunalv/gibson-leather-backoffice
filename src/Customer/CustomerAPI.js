import {Router} from 'express'
import * as customerService from './CustomerService';

const router = Router();

router.get('/customers', (req, res) => {
    res.send({message: 'Ok'})
});

router.post('/customers', (req, res) => {
    const {payload} = req.body;

    console.log(payload)

    customerService.insertNewCustomer(payload);

});

router.put('/customers/:id', (req, res) => {

});

router.delete('/customers/:id', (req, res) => {

});

module.exports = router;
