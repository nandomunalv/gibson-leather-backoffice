

module.exports.orderMapper = (type, payload) => {

    const orderMapper = {
        customer_id: payload.customerId,
        order_status_code: payload.status,
        order_tracking_code: payload.trackingCode,
        total_price: payload.totalPrice,
        date_order_placed: payload.dateOrderPlaced,
        date_order_delivered: payload.dateOrderDelivered,
    }

    return {};
}
