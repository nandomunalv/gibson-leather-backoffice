import * as productDAO from './ProductDAO';
import * as transform from '../Util/Transformers/ProductTransform';

export const searchProducts = async () => {
    const result = await productDAO.searchOperation();
    return searchResultValidator(result);
}

export const searchOneProduct = async (skuCode) => {
    const result = await productDAO.searchOneOperation(skuCode);
    return transform.selectTransform(result[0]);
}

export const searchDynamicProduct = async (word) => {
    const result = await productDAO.searchDynamicOperation(word);
    result.pop();
    return searchResultValidator(result[0]);
}

export const insertNewProducto = async (payload) => {
    const {productType, productName, productColor, productGender} = payload;
    const SKU = generateSKU(productType, productName, productColor, productGender);
    const payloadReloaded = transform.dbStructureTransform(payload);

    payloadReloaded.product_sku = SKU;

    let response = {};
    await productDAO.insertOperation(payloadReloaded)
        .then((dbResp) => {
            response = {insertId: dbResp.insertId, message: `Producto creado correctamente. SKU: ${SKU}`};
        })
        .catch(() => {
            response = {insertId: 0, message: 'Ocurrió un error. Asegúrate de tener los datos completos'};
        });
    return response;
}

export const updatedProductData = async (productId, payload) => {
    const payloadReloaded = transform.dbStructureTransform(payload);
    let response = {};
    await productDAO.updateOperation(payloadReloaded, productId)
        .then((dbResp) => {
            response = {changedRows: dbResp.changedRows, message: 'Producto actualizado correctamente'};
        })
        .catch(() => {
            response = {changedRows: 0, message: 'Ocurrió un error. Asegúrate de tener los datos completos'};
        });
    return response;
}

const generateSKU = (productType, productName, productColor, productGender) => {
    const skuProductType = productType.substr(0,3).toUpperCase();
    const skuProductName = productName.substr(0,3).toUpperCase();
    const skuProductColor = productColor.substr(0,3).toUpperCase();
    const skuProductGender = productGender.substr(0,1).toUpperCase();

    return `${skuProductType}${skuProductName}${skuProductColor}${skuProductGender}`;
}

const searchResultValidator = (resultArr) => {
    let arrResponse = [];
    for (let i = 0; resultArr.length > i; i++) {
        const data = transform.selectTransform(resultArr[i]);
        arrResponse.push(data);
    }
    return arrResponse;
}
