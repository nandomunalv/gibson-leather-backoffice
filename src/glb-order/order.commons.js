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