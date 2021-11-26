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
    console.log(payload);
    const cleanPayload = dataForInsert(payload);
    console.log(cleanPayload);
    return await service.addProduct(cleanPayload);
}

module.exports.editProduct = async (identifier, payload) => {
    const cleanPayload = dataForUpdate(payload);
    return await service.updateProduct(identifier, cleanPayload);
    
}

module.exports.removeProduct = async (identifier) => {
    return await service.disableProduct(identifier);
}

module.exports.getCategories = async () => await service.searchCategories();
module.exports.createCategory = async (payload) => await service.addCategory(payload);
module.exports.editCategory = async (identifier, payload) => await service.updateCategory(identifier, payload);
module.exports.removeCategory = async (identifier) => await service.deleteCategory(identifier);
