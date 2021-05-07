const service = require('./product.service');
const {transformWebToDatabase} = require('./product.commons');

const getProducts = async () => {
    return await service.searchProducts();
}

const getProduct = async (sku) => {
    return await service.searchProduct(sku);
}

const getDynamicProduct = async (word) => {
    return await service.searchDynamicProduct(word);
}

const createProduct = async (payload) => {
    const cleanPayload = transformWebToDatabase(payload);
    return await service.addProduct(cleanPayload);
}

const editProduct = async (identifier, payload) => {
    const cleanPayload = transformWebToDatabase(payload);
    return await service.updateProduct(identifier, cleanPayload);
    
}

const removeProduct = async (identifier) => {
    // TODO: Falta implementar
}

module.exports = {
    getProducts,
    getProduct,
    getDynamicProduct,
    createProduct,
    editProduct,
}