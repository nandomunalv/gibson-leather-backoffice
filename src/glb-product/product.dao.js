const { ErrorHandler } = require('../glb-util/errror');
const pool = require('./../../config/server/database');

const exec = require('./product.constants');

const findProducts = async () => {
    return await pool.query(exec.Q_SEARCH_ALL);
};

const findOneProductBySku = async (sku) => {
    return await pool.query(exec.Q_SEARCH_ONE, [sku]);
};

const findDynamicProduct = async (word) => {
    return await pool.query(exec.SP_SEARCH_DYNAMIC_PRODUCTO, [word]);
};

const insertProduct = async (data) => {
    return await pool.query(exec.Q_INSERT, [data]);
};

const updateProductDataById = async (productId, data) => {
    return await pool.query(exec.Q_UPDATE, [data, productId]);
};

const updateProductStatus = async (productId) => {
    //TODO: Build query to disable products
};


module.exports = {
    findProducts,
    findOneProductBySku,
    findDynamicProduct,
    insertProduct,
    updateProductDataById
}