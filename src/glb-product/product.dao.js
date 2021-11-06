const pool = require('./../../config/server/database');
const exec = require('./product.constants');


const findProducts = async () => {
    return pool.query(exec.QUERY_SEARCH_ALL);
};

const findBySku = async (sku) => {
    return pool.query(exec.QUERY_SEARCH_ONE, [sku]);
};

const dynamicSearch = async (word) => {
    return pool.query(exec.SP_SEARCH_DYNAMIC, [word]);
};

const save = async (data) => {
    return pool.query(exec.QUERY_INSERT, [data]);
};

const updateById = async (id, data) => {
    return pool.query(exec.QUERY_UPDATE, [data, id]);
};

const disable = async (id) => {
    return pool.query(exec.QUERY_DISABLED, [id]);
};


module.exports = {
    findProducts,
    findBySku,
    dynamicSearch,
    save,
    updateById,
    disable
}
