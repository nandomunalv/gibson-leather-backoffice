const service = require('./order.service');

const makeOrder = async (payload) => {
    const productsInfo = await service.searchProducts(payload.products);
    return await service.addOrder(payload, productsInfo);
}

module.exports = {
    makeOrder,
}