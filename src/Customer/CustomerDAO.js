import pool from '../../config/database';

import {
    DISABLED_QUERY,
    INSERT_QUERY,
    SEARCH_ONE_CLIENT_QUERY,
    SEARCH_SIMPLE_QUERY,
    UPDATE_QUERY,
    SP_SEARCH_DYNAMIC_CUSTOMER
} from './CustomerQuery';

export const searchOperation = async () => {
    return await pool.query(SEARCH_SIMPLE_QUERY);
}

export const searchOneOperation = async (documentNumber) => {
    return await pool.query(SEARCH_ONE_CLIENT_QUERY, [documentNumber]);
}

export const searchDynamicOperation = async (word) => {
    return await pool.query(SP_SEARCH_DYNAMIC_CUSTOMER, [word]);
}

export const insertOperation = async (data) => {
    return await pool.query(INSERT_QUERY, [data]);
}

export const updateOperation = async (customerId, data) => {
    return await pool.query(UPDATE_QUERY, [data, customerId]);
}

export const disableOperation = async (customerId) => {
    return await pool.query(DISABLED_QUERY, [customerId]);
}
