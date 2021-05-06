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
    let result = 0;

    await database.insertProduct(payload)
        .then((dbResp) => {
            result = dbResp.insertId;
        })
        .catch((err) => {
            console.log('>>>>>>> ', err);
            throw new Error('Algo se jodió aquí xd');
        });

    return result;
};

const updateProduct = async (identifier, payload) => {
    let result = 0;

    await database.updateProductDataById(identifier, payload)
        .then((dbResp) => {
            result = dbResp.insertId;
        })
        .catch((err) => {
            console.log('>>>>>>> ', err);
            throw new Error('Algo se jodió aquí xd');
        });

    return result;
};

const disableProduct = async (identifier) => {
    // TODO: Falta implementar
};

module.exports = {
    searchProducts,
    searchProduct,
    searchDynamicProduct,
    addProduct,
    updateProduct,
    disableProduct
}