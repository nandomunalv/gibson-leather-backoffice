const database = require('./product.dao');
const helpers = require('./product.commons');

module.exports.searchProducts = async () => {
    return await database.findProducts();
};

module.exports.searchProduct = async (sku) => {
    const result = await database.findBySku(sku);
    return helpers.addProductsToList(result[0]);
};

module.exports.searchDynamicProduct = async (word) => {
    const result = await database.dynamicSearch(word);
    return helpers.addProductsToList(result[0]);
};

module.exports.addProduct = async (payload) => {
    const result = await database.save(payload);
    return result.insertId;
};

module.exports.updateProduct = async (identifier, payload) => {
    const result = await database.updateById(identifier, payload);
    return result.changedRows;
};

module.exports.disableProduct = async (identifier) => {
    const result = await database.disable(identifier);
    return result.changedRows;
};
