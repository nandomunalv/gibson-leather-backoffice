const pool = require('./../../config/server/database');
const exec = require('./customer.constants');


const findCustomers = async () => {
    return pool.query(exec.QUERY_SEARCH_ALL);
}

const findByDocumentNumber = async (documentNumber) => {
    return pool.query(exec.QUERY_SEARCH_ONE_CLIENT, [documentNumber]);
}

const dynamicSearch = async (word) => {
    return pool.query(exec.SP_SEARCH_DYNAMIC, [word]);
}

const save = async (data) => {
    return pool.query(exec.QUERY_INSERT, [data]);
}

const updateById = async (id, data) => {
    return pool.query(exec.QUERY_UPDATE, [data, id]);
}

const disable = async (id) => {
    return pool.query(exec.QUERY_DISABLED, [id]);
}


module.exports = {
    findCustomers,
    findByDocumentNumber,
    dynamicSearch,
    save,
    updateById,
    disable
}
