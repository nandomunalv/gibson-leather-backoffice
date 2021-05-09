const generateSKU = (productType, productName, productColor, productGender) => {
    const skuProductType = productType.substr(0,3).toUpperCase();
    const skuProductName = productName.substr(0,3).toUpperCase();
    const skuProductColor = productColor.substr(0,3).toUpperCase();
    const skuProductGender = productGender.substr(0,1).toUpperCase();

    return `${skuProductType}${skuProductName}${skuProductColor}${skuProductGender}`;
}

const addProductsToList = (resultArr) => {
    let arrResponse = [];
    for (let i = 0; resultArr.length > i; i++) {
        const data = transformDatabaseToWeb(resultArr[i]);
        arrResponse.push(data);
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

const transformDatabaseToWeb = (payload) => {
    return {
        id: payload.product_id,
        sku: payload.product_sku,
        type: payload.product_type,
        name: payload.product_name,
        description: payload.product_description,
        details: payload.product_details,
        price: payload.product_price,
        color: payload.product_color,
        gender: payload.product_gender,
        widthcm: payload.product_width,
        longcm: payload.product_long,
        highcm: payload.product_high,
        weightkg: payload.product_weight,
        stock: payload.product_stock,
        imgName: payload.product_img_name,
        imgUrl: payload.product_img_url,
    }
}

module.exports = {
    generateSKU,
    addProductsToList,
    transformWebToDatabase,
    transformDatabaseToWeb
}