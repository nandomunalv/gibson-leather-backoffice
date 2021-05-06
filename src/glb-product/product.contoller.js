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
    const result = await service.addProduct(cleanPayload);
    console.log(result);
}

const editProduct = async (identifier, payload) => {
    const cleanPayload = transformWebToDatabase(payload);
    const result = await service.updateCustomer(identifier, cleanPayload);
    console.log(result);
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