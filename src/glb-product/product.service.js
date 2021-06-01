const database = require('./product.dao');
const helpers = require('./product.commons');

const searchProducts = async () => {
    const result = await database.findProducts();
    return helpers.addProductsToList(result);
};

const searchProduct = async (sku) => {
    const result = await database.findOneProductBySku(sku);
    return helpers.addProductsToList(result[0]);
};

const searchDynamicProduct = async (word) => {
    const result = await database.findDynamicProduct(word);
    result.pop();
    return helpers.addProductsToList(result[0]);
};

const addProduct = async (payload) => {
    const dbResp = await database.insertProduct(payload);
    return dbResp.insertId;
};

const updateProduct = async (identifier, payload) => {
    const dbResp = await database.updateProductDataById(identifier, payload);
    return dbResp.changedRows;
};

const disableProduct = async (identifier) => {
    const dbResp = await database.updateProductStatus(identifier);
    return dbResp.changedRows;
};

module.exports = {
    searchProducts,
    searchProduct,
    searchDynamicProduct,
    addProduct,
    updateProduct,
    disableProduct
}