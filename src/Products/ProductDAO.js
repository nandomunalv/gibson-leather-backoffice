import pool from '../../config/database';

import {Q_INSERT, Q_SEARCH_ALL, Q_SEARCH_ONE, Q_UPDATE, SP_SEARCH_DYNAMIC_PRODUCTO} from './ProductQuery';

export const searchOperation = async () => {
    return await pool.query(Q_SEARCH_ALL);
}

export const searchOneOperation = async (sku) => {
    return await pool.query(Q_SEARCH_ONE, [sku])
}

export const searchDynamicOperation = async (word) => {
    return await pool.query(SP_SEARCH_DYNAMIC_PRODUCTO, [word]);
}

export const insertOperation = async (data) => {
    return await pool.query(Q_INSERT, [data]);
}

export const updateOperation = async (data, productId) => {
    return await pool.query(Q_UPDATE, [data, productId]);
}
