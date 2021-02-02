import pool from '../../config/database';

import {SEARCH_SIMPLE_QUERY, INSERT_QUERY, UPDATE_QUERY} from './ProductQuery';

export const searchOperation = async () => {
    const dbResponse = await pool.query(SEARCH_SIMPLE_QUERY);
    return dbResponse;
}

export const insertOperation = async (data) => {
    const dbResponse = await pool.query(INSERT_QUERY, [data]);
    return dbResponse.insertId;
}

export const updateOperation = async (data, productId) => {
    const dbResponse = await pool.query(UPDATE_QUERY, [data, productId]);
    return dbResponse.changedRows;
}