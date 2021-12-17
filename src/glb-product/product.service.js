const database = require('./product.dao');

module.exports.searchProducts = async () => await database.findProducts();

module.exports.searchProduct = async (sku) => {
    const result = await database.findBySku(sku);
    return result[0];
};

module.exports.searchDynamicProduct = async (word) => {
    const result = await database.dynamicSearch(word);
    return result[0];
};

module.exports.addProduct = async (payload) => {
    const {insertId} = await database.save(payload);
    return insertId;
};

module.exports.updateProduct = async (identifier, payload) => {
    const {changedRows} = await database.updateById(identifier, payload);
    return changedRows;
};

module.exports.disableProduct = async (identifier) => {
    const {changedRows} = await database.disable(identifier);
    return changedRows;
};
