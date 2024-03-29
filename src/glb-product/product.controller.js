const service = require('./product.service');
const {dataForInsert, dataForUpdate} = require('./product.commons');

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
    const cleanPayload = dataForInsert(payload);
    return await service.addProduct(cleanPayload);
}

module.exports.editProduct = async (identifier, payload) => {
    const cleanPayload = dataForUpdate(payload);
    return await service.updateProduct(identifier, cleanPayload);
    
}

module.exports.removeProduct = async (identifier) => {
    return await service.disableProduct(identifier);
}
