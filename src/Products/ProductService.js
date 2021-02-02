import * as productDAO from './ProductDAO';
import * as transform from '../Util/Transformers/ProductTransform';

export const searchProducts = async () => {
    const result = await productDAO.searchOperation();
    let arrResult = [];

    for(let i = 0; result.length > i; i++) {
        const data = transform.selectTransform(result[i]);
        arrResult.push(data);
    }

    return arrResult;
}

export const insertNewProducto = async (payload) => {
    const {productType, productName, productColor, productGender} = payload;
    const SKU = generateSKU(productType, productName, productColor, productGender);
    const payloadReloaded = transform.dbStructureTransform(payload);
    
    payloadReloaded.product_sku = SKU;

    return await productDAO.insertOperation(payloadReloaded);
}

export const updatedProductData = async (productId, payload) => {
    const payloadReloaded = transform.dbStructureTransform(payload);
    return await productDAO.updateOperation(payloadReloaded, productId);
}

const generateSKU = (productType, productName, productColor, productGender) => {
    const skuProductType = productType.substr(0,3).toUpperCase();
    const skuProductName = productName.substr(0,3).toUpperCase();
    const skuProductColor = productColor.substr(0,3).toUpperCase();
    const skuProductGender = productGender.substr(0,1).toUpperCase();

    return `${skuProductType}${skuProductName}${skuProductColor}${skuProductGender}`;
}