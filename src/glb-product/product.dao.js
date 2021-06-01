const pool = require('./../../config/server/database');
const exec = require('./product.constants');


const findProducts = async () => {
    return pool.query(exec.QUERY_SEARCH_ALL);
};

const findOneProductBySku = async (sku) => {
    return pool.query(exec.QUERY_SEARCH_ONE, [sku]);
};

const findDynamicProduct = async (word) => {
    return pool.query(exec.SP_SEARCH_DYNAMIC, [word]);
};

const insertProduct = async (data) => {
    return pool.query(exec.QUERY_INSERT, [data]);
};

const updateProductDataById = async (productId, data) => {
    return pool.query(exec.QUERY_UPDATE, [data, productId]);
};

const updateProductStatus = async (productId) => {
    return pool.query(exec.QUERY_DISABLED, [productId]);
};


module.exports = {
    findProducts,
    findOneProductBySku,
    findDynamicProduct,
    insertProduct,
    updateProductDataById,
    updateProductStatus
}