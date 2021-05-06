import morgan from 'morgan';
import cors from 'cors';
import express from 'express';
import flash from 'connect-flash';
import session from 'express-session';
import MySQLStore from 'express-mysql-session';

import * as config from '../config/enviroment/local.env.json';

const dbConfig = config.global.dbConfig;

module.exports = [
    session({
        key: 'session_cookie_name',
        secret: 'session_cookie_secret',
        resave: false,
        saveUninitialized: false,
        store: new MySQLStore(dbConfig),
        cookie: { maxAge: 180 * 60 * 1000 }
    }),
    morgan('dev'),
    flash(),
    cors({
        origin: true,
        methods: ['HEAD', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        allowedHeaders: ['x-now-id', 'x-now-trace', 'x-powered-by', 'Origin', 'Accept', 'Content-Type'],
        credentials: true
    }),
    express.json(),
    express.urlencoded({extended: true})
]
