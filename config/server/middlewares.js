// import session from 'express-session';
// import MySQLStore from 'express-mysql-session';
/*
    session({
        key: 'session_cookie_name',
        secret: 'session_cookie_secret',
        resave: false,
        saveUninitialized: false,
        store: new MySQLStore(dbConfig),
        cookie: { maxAge: 180 * 60 * 1000 }
    }),
*/

const morgan = require('morgan');
const cors = require('cors');
const express = require('express');

module.exports = [
    morgan('dev'),
    cors({
        origin: true,
        methods: ['HEAD', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        allowedHeaders: ['x-now-id', 'x-now-trace', 'x-powered-by', 'Origin', 'Accept', 'Content-Type'],
        credentials: true
    }),
    express.json(),
    express.urlencoded({extended: true})
]
