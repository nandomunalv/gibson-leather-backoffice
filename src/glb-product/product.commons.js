const generateSKU = (productType, productName, productColor, productGender) => {
    // const skuProductType = productType.substr(0,3).toUpperCase();
    const skuProductName = productName.substr(0,5).toUpperCase();
    const skuProductColor = productColor.substr(0,3).toUpperCase();
    const skuProductGender = productGender.substr(0,1).toUpperCase();

    return `${skuProductName}${skuProductColor}${skuProductGender}`;
}

const addProductsToList = (resultArr) => {
    let arrResponse = [];
    resultArr.pop();
    for (let i = 0; resultArr.length > i; i++) {
        arrResponse.push(resultArr[i]);
    }
    return arrResponse;
}

const dataForInsert = (payload) => {
    return {
        product_sku: generateSKU(payload.categoryId, payload.name, payload.color, payload.gender),
        category_id: payload.categoryId,
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

const dataForUpdate = (payload) => {
    return {
        category_id: payload.categoryId,
        product_name: payload.name,
        product_description: payload.description === '' ? null : payload.description,
        product_details: payload.details,
        product_price: payload.price === '' ? null : payload.price,
        product_color: payload.color === '' ? null : payload.color,
        product_gender: payload.gender === '' ? null : payload.gender,
        product_width: payload.widthCm,
        product_long: payload.longCm,
        product_high: payload.highCm,
        product_weight: payload.weightKg,
        product_stock: payload.stock === '' ? null : payload.stock,
        product_img_name: payload.imgName,
        product_img_url: payload.imgUrl,
        enabled: 1
    }
}

module.exports = {
    generateSKU,
    addProductsToList,
    dataForInsert,
    dataForUpdate
}
