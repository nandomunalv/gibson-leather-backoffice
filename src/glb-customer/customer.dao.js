const pool = require('../../../config/database');

const {
    SEARCH_SIMPLE_QUERY,
    SEARCH_ONE_CLIENT_QUERY,
    INSERT_QUERY,
    UPDATE_QUERY,
    DISABLED_QUERY,
    SP_SEARCH_DYNAMIC_CUSTOMER
} = require('./customer.constants');


const findCustomers = async () => {
    return await pool.query(SEARCH_SIMPLE_QUERY);
}

const findOneCustomerByDocumentNumber = async (documentNumber) => {
    return await pool.query(SEARCH_ONE_CLIENT_QUERY, [documentNumber]);
}

const findDynamicCustomer = async (word) => {
    return await pool.query(SP_SEARCH_DYNAMIC_CUSTOMER, [word]);
}

const insertCustomer = async (data) => {
    return await pool.query(INSERT_QUERY, [data]);
}

const updateCustomerDataById = async (customerId, data) => {
    return await pool.query(UPDATE_QUERY, [data, customerId]);
}

const updateCustomerStatus = async (customerId) => {
    return await pool.query(DISABLED_QUERY, [customerId]);
}


module.exports = {
    findCustomers,
    findOneCustomerByDocumentNumber,
    findDynamicCustomer,
    insertCustomer,
    updateCustomerDataById,
    updateCustomerStatus
}