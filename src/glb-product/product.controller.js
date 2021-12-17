const service = require('./product.service');
const {productMapper} = require("./product.mapper");
const {TYPE_NEW, TYPE_UPDATE} = require("../glb-util/constants");

module.exports.getProducts = async () => {
    return await service.searchProducts();
}

module.exports.getProduct = async (sku) => {
    return await service.searchProduct(sku);
}

module.exports.getDynamicProduct = async (word) => {
    return await service.searchDynamicProduct(word);
}

module.exports.createProduct = async (payload) => {
    return await service.addProduct(productMapper(TYPE_NEW, payload));
}

module.exports.editProduct = async (identifier, payload) => {
    return await service.updateProduct(identifier,productMapper(TYPE_UPDATE, payload));
}

module.exports.removeProduct = async (identifier) => {
    return await service.disableProduct(identifier);
}
