const service = require('./order.service');

const makeOrder = async (payload) => {
    const productsInfo = await service.setOrderInformation(payload.products);

    for (const product of productsInfo.productData) {
        if (product.stock - product.quantity <= 0) {
            return {ok: false, message: `Producto: ${product.name} está fuera de stock`}
        }
    }
    return await service.addOrder(payload, productsInfo);
}

module.exports = {
    makeOrder,
}