

module.exports.orderMapper = (type, payload) => {

    const orderMapper = {
        customer_id: payload.customerId,
        order_status_code: payload.status,
        order_code: payload.order,
        subtotal: payload.subtotal,
        discount: payload.discount,
        discount_amount: payload.discountAmount,
        tax: payload.tax,
        tax_amount: payload.taxAmount,
        total_price: payload.totalPrice,
        date_order_placed: payload.dateOrderPlaced,
        date_order_delivered: payload.dateOrderDelivered,
    }

    return {};
}
