import morgan from 'morgan';
import cors from 'cors';
import express from 'express';

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
