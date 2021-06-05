const service = require('./order.service');

const makeOrder = async (payload) => {
    let productOutStock = [];
    const productsInfo = await service.setOrderInformation(payload.products);

    for (const product of productsInfo.productData) {
        if (product.stock - product.quantity <= 0) {
            productOutStock.push(`La cantidad solicitada de ${product.name}, supera el stock de ${product.stock}`);
        }
    }

    if (productOutStock.length > 0) {
        return {ok: false, messages: productOutStock};
    }

    return await service.addOrder(payload, productsInfo);
}

module.exports = {
    makeOrder,
}