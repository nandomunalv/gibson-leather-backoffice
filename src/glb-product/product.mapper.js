const {buildSecurityAuditAttributes} = require("../glb-util/util");
const {buildSKU} = require("./product.commons");

module.exports.productMapper = (type, payload) => {

    const sku = buildSKU(type, payload);
    const auditAttributes = buildSecurityAuditAttributes(type, payload);

    const productMapper = {
        product_sku: sku,
        category_id: payload.categoryId,
        product_name: payload.name,
        product_description: payload.description,
        product_details: payload.details,
        product_price: payload.price,
        product_color: payload.color,
        product_gender: payload.gender,
        product_width: payload.widthcm,
        product_long: payload.longcm,
        product_high: payload.highcm,
        product_weight: payload.weightkg,
        product_stock: payload.stock,
        product_img_name: payload.imgName,
        product_img_url: payload.imgUrl,
        enabled: payload.enabled,
    }

    return {
        ...productMapper,
        ...auditAttributes
    }
}
