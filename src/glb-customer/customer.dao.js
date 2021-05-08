const pool = require('./../../config/server/database');
const exec = require('./customer.constants');


const findCustomers = async () => {
    return await pool.query(exec.QUERY_SEARCH_ALL);
}

const findOneCustomerByDocumentNumber = async (documentNumber) => {
    return await pool.query(exec.QUERY_SEARCH_ONE_CLIENT, [documentNumber]);
}

const findDynamicCustomer = async (word) => {
    return await pool.query(exec.SP_SEARCH_DYNAMIC, [word]);
}

const insertCustomer = async (data) => {
    return await pool.query(exec.QUERY_INSERT, [data]);
}

const updateCustomerDataById = async (customerId, data) => {
    return await pool.query(exec.QUERY_UPDATE, [data, customerId]);
}

const updateCustomerStatus = async (customerId) => {
    return await pool.query(exec.QUERY_DISABLED, [customerId]);
}


module.exports = {
    findCustomers,
    findOneCustomerByDocumentNumber,
    findDynamicCustomer,
    insertCustomer,
    updateCustomerDataById,
    updateCustomerStatus
}