const express = require('express');
const router = express.Router();

const pool = require('./../../config/server/database');

const {ErrorHandler} = require('./../glb-util/errror');

router.post('/order', (request, response,next) => {
    const payload = request.body;

    pool.getConnection((err, connection) => {
        connection.beginTransaction((err) => {
            if (err) {
                connection.rollback(() => connection.release());
                next(new ErrorHandler(err));
            } else {
                connection.query('INSERT INTO glb_trx_orders SET ?', [payload], (err, results) => {
                    if (err) {
                        connection.rollback(() => connection.release());
                        next(new ErrorHandler(err));
                    } else {
                        connection.commit((err) => {
                            if (err) {
                                connection.rollback(() => connection.release());
                                next(new ErrorHandler(err));
                            } else {
                                console.log('>>>', results);
                                connection.release();
                                response.status(201).send({ok: true, message: 'Orden creada'});
                            }
                        });
                    }
                });
            }
        });
    });
});

module.exports = router;