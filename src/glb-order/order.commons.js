const transformOrderWebToDatabase = (payload) => {
    return {
        customer_id: payload.customerId,
        order_status_code: payload.statusCode,
        order_tracking_code: payload.orderTrackingCode,
        total_price: payload.totalPrice,
        date_order_placed: payload.dateOrderPlaced,
        date_order_delivered: payload.dateOrderDelivered,
    }
}

const transformOrderDatabaseToWeb = (payload) => {
    return {
        orderId: payload.order_id,
        customerId: payload.customer_id,
        orderStatusCode: payload.order_status_code,
        orderTrackingCode: payload.order_tracking_code,
        totalPrice: payload.total_price,
        dateOrderPlaced: payload.date_order_placed,
        dateOrderDelivered: payload.date_order_delivered,
    }
}

const transformOrderProductDataToWeb = (payload) => {
    return {
        id: payload.product_id,
        sku: payload.product_sku,
        name: payload.product_name,
        price: payload.product_price,
        stock: payload.product_stock,
        quantity: 0
    }
}

const addProductsToList = (resultArr) => {
    let arrResponse = [];
    for (let i = 0; resultArr.length > i; i++) {
        const data = transformOrderProductDataToWeb(resultArr[i]);
        arrResponse.push(data);
    }
    return arrResponse;
}

const addProductInfoInOrderItems = (productInfoList) => {
    const newProductList = productInfoList.map(item => {
       return {
           order_id: item.orderId,
           order_item_status_code: 'PRUEBA',
           product_id: item.id,
           order_item_quantity: item.quantity,
           order_item_price: item.price
       }
    });
    return newProductList.map(item => [
        item.order_id,
        item.order_item_status_code,
        item.product_id,
        item.order_item_quantity,
        item.order_item_price])
}

module.exports = {
    transformOrderDatabaseToWeb,
    transformOrderWebToDatabase,
    transformOrderProductDataToWeb,
    addProductsToList,
    addProductInfoInOrderItems
}