import pool from '../../config/database';

import {SEARCH_SIMPLE_QUERY, INSERT_QUERY, UPDATE_QUERY, DISABLED_QUERY} from './CustomerQuery';

export const searchOperation = async () => {
    const dbResult = await pool.query(SEARCH_SIMPLE_QUERY);
    return dbResult;
}

export const insertOperation = async (data) => {
    const dbResult = await pool.query(INSERT_QUERY, [data]);
    return dbResult;
}

export const updateOperation = async (customerId, data) => {
    const dbResult = await pool.query(UPDATE_QUERY, [data, customerId]);
    return dbResult.changedRows; 
}

export const disabledOperation = async (customerId) => {
    const dbResult = await pool.query(DISABLED_QUERY, [customerId]);
    return dbResult.changedRows;
}
