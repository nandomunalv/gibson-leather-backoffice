const generateSKU = (productType, productName, productColor, productGender) => {
    const skuProductType = productType.substr(0,3).toUpperCase();
    const skuProductName = productName.substr(0,3).toUpperCase();
    const skuProductColor = productColor.substr(0,3).toUpperCase();
    const skuProductGender = productGender.substr(0,1).toUpperCase();

    return `${skuProductType}${skuProductName}${skuProductColor}${skuProductGender}`;
}

const addProductsToList = (resultArr) => {
    let arrResponse = [];
    resultArr.pop();
    for (let i = 0; resultArr.length > i; i++) {
        arrResponse.push(resultArr[i]);
    }
    return arrResponse;
}

const transformWebToDatabase = (payload) => {
    return {
        product_sku: generateSKU(payload.type, payload.name, payload.color, payload.gender),
        product_type: payload.type === '' ? null : payload.type,
        product_name: payload.name,
        product_description: payload.description === '' ? null : payload.description,
        product_details: payload.details,
        product_price: payload.price === '' ? null : payload.price,
        product_color: payload.color === '' ? null : payload.color,
        product_gender: payload.gender === '' ? null : payload.gender,
        product_width: payload.widthcm,
        product_long: payload.longcm,
        product_high: payload.highcm,
        product_weight: payload.weightkg,
        product_stock: payload.stock === '' ? null : payload.stock,
        product_img_name: payload.imgName,
        product_img_url: payload.imgUrl,
        enabled: 1
    }
}

module.exports = {
    generateSKU,
    addProductsToList,
    transformWebToDatabase
}
