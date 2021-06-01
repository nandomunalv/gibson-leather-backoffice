const ORDER_STATUS = {
    NEW_ORDER: 'Nuevo Pedido',
    AWAITING_PAYMENT: 'Esperando Pago',
    PAYMENT_PARTIALLY: 'Pago Parcial',
    PAYMENT_RECEIVED: 'Pago Confirmado',
    ON_THE_WAY: 'En Camino',
    COMPLETED: 'Completado',
    CANCELED: 'Cancelado',
    FAILED: 'Fallido',
    EXPIRED: 'Expirado'
}

const ORDER_STATUS_ITEM = {

}

const QUERY_INSERT_ORDER = 'INSERT INTO glb_trx_orders SET ?';

const QUERY_INSERT_ORDER_ITEMS = 'INSERT INTO glb_trx_order_items (order_id, order_item_status_code, product_id, order_item_quantity, order_item_price) VALUES ?';

const QUERY_SEARCH_PRODUCT = 'SELECT * FROM glb_mst_products WHERE product_sku IN (@sku)';

module.exports = {
    ORDER_STATUS,
    ORDER_STATUS_ITEM,
    QUERY_INSERT_ORDER,
    QUERY_INSERT_ORDER_ITEMS,
    QUERY_SEARCH_PRODUCT,
}