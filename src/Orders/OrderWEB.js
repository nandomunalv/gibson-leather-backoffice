import {Router} from 'express';

const router = Router();


router.get('/add', (req, res) => {
    res.render('orders/add');
});

module.exports = router;