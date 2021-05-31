const database = require('./order.dao');
const helpers = require('./order.commons');
const { v4: uuidv4 } = require('uuid');

const addOrder = async (payload, productsInfo) => {
    let orderData = {
        customerId: payload.customerId,
        statusCode: payload.statusCode,
        orderTrackingCode: productsInfo.trackingCode,
        totalPrice: productsInfo.totalPrice,
        dateOrderPlaced: productsInfo.dateOrderPlaced,
        dateOrderDelivered: null,
    }
    orderData = helpers.transformOrderWebToDatabase(orderData);

    return database.insertOrder(orderData, productsInfo.productData)
        .then((result) => {
            console.log('>>> Service result:', result);
            return result;
        })
        .catch((err) => {
            console.log(err)
        });
}

// TODO: Change the function name to "setOrderInformation" or other
const searchProducts = async (products) => {

    const sku = products.map(item => item.sku);
    const trackingCode = uuidv4().split('-')[0];
    const productList = `'${sku.join("','")}'`;

    const dbResult = await database.findProductsBySku(productList);
    const productData = helpers.addProductsToList(dbResult);

    let moreInfo = {totalPrice: 0, trackingCode, dateOrderPlaced: new Date(), productData}

    // console.log(JSON.stringify(productData));

    for (const product of productData) {
        const obj = products.find(item => item.sku === product.sku);
        moreInfo.totalPrice += product.price * obj.quantity;
        product.quantity = obj.quantity;
    }
    // console.log('>>> More info:', moreInfo);

    return moreInfo;
}

module.exports = {
    addOrder,
    searchProducts
}