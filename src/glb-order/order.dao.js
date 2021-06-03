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
            connection.beginTransaction((err) => {
                if (err) {
                    console.err('>>> Transaction error:', err);
                    reject(err);
                }
                connection.query(exec.QUERY_INSERT_ORDER, orderData, (err, result1) => {
                    if (err) {
                        return connection.rollback(() => {
                            console.log('>>> Rollback 1:', err);
                            reject(err);
                        });
                    }

                    const orderId = result1.insertId;

                    for (let i = 0; i < detailData.length; i++) {
                        detailData[i].orderId = orderId;
                        console.log(`>>> Order id assignment for ${detailData[i].sku}:`, JSON.stringify(detailData[i]))
                    }

                    const newProductsList = helpers.addProductInfoInOrderItems(detailData);
                    console.log('>>> Order items information:', JSON.stringify(newProductsList));

                    connection.query(exec.QUERY_INSERT_ORDER_ITEMS, [newProductsList], (err, orderItemsResult) => {
                        if (err) {
                            return connection.rollback(() => {
                                console.log('>>> Rollback 2:', err);
                                reject(err);
                            });
                        }
                        connection.commit((err) => {
                            if (err) {
                                return connection.rollback(() => {
                                    console.log('>>> Rollback commit:', err);
                                    reject(err);
                                });
                            }
                            resolve({ok: true, message: `New order (${orderId}) with ${orderItemsResult.affectedRows} products.`});
                        });
                    });
                });
            });
        });
    });
}

module.exports = {
    findProductsBySku,
    insertOrder,
}