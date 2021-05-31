const pool = require('./../../config/server/database');
const exec = require('./order.constants');
const helpers = require('./order.commons');

const findProductsBySku = async (data) => {
    const searchQuery = exec.QUERY_SEARCH_PRODUCT.replace('@sku', data);
    return pool.query(searchQuery);
}

const insertOrder = (orderData, detailData) => {
    return new Promise((resolve, reject) => {
        pool.getConnection(async (err, connection) => {
            // await connection.query('SET TRANSACTION ISOLATION LEVEL READ COMMITTED');
            // console.log('Finished setting the isolation level to read committed');
            connection.beginTransaction((err) => {
                if (err) { /*Set an error*/
                    console.err('>>> Transaction error:', err);
                }
                // TODO: Creación de Orden
                connection.query(exec.QUERY_INSERT_ORDER, orderData, (err, result1) => {
                    if (err) {
                        return connection.rollback(() => {/*Set an error*/
                            console.log('>>> Rollback 1:', err);
                        })
                    }

                    const orderId = result1.insertId;

                    for (let i = 0; i < detailData.length; i++) {
                        detailData[i].orderId = orderId;
                        console.log('>>> Order id assignment:', JSON.stringify(detailData[i]))
                    }

                    const newProductsList = helpers.addProductInfoInOrderItems(detailData);
                    console.log('>>> Order items information:', JSON.stringify(newProductsList));

                    // TODO: Creación de Detalle de Orden
                    connection.query(exec.QUERY_INSERT_ORDER_ITEMS, [newProductsList], (err, orderItemsResult) => {
                        if (err) {
                            return connection.rollback(() => {/*Set an error*/
                                connection.release();
                                console.log('>>> Rollback 2:', err);
                            });
                        }
                        connection.commit((err) => {
                            if (err) {
                                return connection.rollback(() => {/*Set an error*/
                                    console.log('>>> Rollback commit:', err);
                                });
                            }
                            console.log('>>> LETS FUCKING GO! Ordenes insertadas:', orderItemsResult.affectedRows);
                            resolve(orderItemsResult.affectedRows);
                        })
                    });
                });
            });
        });
    });
}

const dataCore = {
    "customer_id": 1,
    "order_status_code": "NEW_ORDER",
    "order_tracking_code": "5464654654",
    "total_price": 25
}

const dataDetail = [
    {
        "order_id": null,
        "order_item_quantity": "2",
        "product_id": 1,
        "order_item_status_code": "PRUEBA",
        "order_item_price": 10
    },
    {
        "order_id": null,
        "order_item_quantity": "3",
        "product_id": 2,
        "order_item_status_code": "PRUEBA",
        "order_item_price": 15
    }
];


module.exports = {
    findProductsBySku,
    insertOrder,
}