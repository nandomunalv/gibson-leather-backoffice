const {promisify} = require('util');
const mysql = require('mysql');
const config = require('config');

const db = config.get('global.database');
const pool = mysql.createPool(db);

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('DATABASE HASTO MANY CONNECTIONS');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
    }

    if (connection) connection.release();

    console.log('>>> The database is ready');
});

// Promisify Pool Query's
pool.query = promisify(pool.query);

module.exports = pool;




