const uuid = require('uuid');
const {TYPE_NEW} = require("../glb-util/constants");

module.exports.buildSKU = (type, {sku}) => {
    const skuBuilder = uuid.v4().split('-')[0].toUpperCase();
    return type === TYPE_NEW ? skuBuilder : sku;
}
