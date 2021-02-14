export const dbStructureTransform = (payload) => {
    return {
        product_sku: '',
        product_type: payload.productType === '' ? null : payload.productType,
        product_name: payload.productName === '' ? null : payload.productName,
        product_description: payload.productDescription === '' ? null : payload.productDescription,
        product_details: payload.productDetails,
        product_price: payload.productPrice === '' ? null : payload.productPrice,
        product_color: payload.productColor === '' ? null : payload.productColor,
        product_gender: payload.productGender === '' ? null : payload.productGender,
        product_width: payload.productWidth,
        product_long: payload.productLong,
        product_high: payload.productHigh,
        product_weight: payload.productWeight,
        product_stock: payload.productStock === '' ? null : payload.productStock,
        enabled: 1
    }
}

export const selectTransform = (payload) => {
    return {
        productId: payload.product_id,
        productSku: payload.product_sku,
        productType: payload.product_type,
        productName: payload.product_name,
        productDescription: payload.product_description,
        productDetails: payload.product_details,
        productPrice: payload.product_price,
        productColor: payload.product_color,
        productGender: payload.product_gender,
        productWidth: payload.product_width,
        productLong: payload.product_long,
        productHigh: payload.product_high,
        productWeight: payload.product_weight,
        productStock: payload.product_stock,
    }
}
