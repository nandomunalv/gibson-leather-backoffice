const pool = require('./../../config/server/database');
const {logger} = require('./../../config/server/logger');
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
                    logger.error({message: 'Transaction error', err})
                    reject(err);
                }
                connection.query(exec.QUERY_INSERT_ORDER, orderData, (err, result1) => {
                    if (err) {
                        return connection.rollback(() => {
                            logger.error({message: 'First rollback error', err})
                            reject(err);
                        });
                    }

                    const orderId = result1.insertId;

                    for (let i = 0; i < detailData.length; i++) {
                        detailData[i].orderId = orderId;
                        logger.info(`Order id assignment for ${detailData[i].sku}: ${JSON.stringify(detailData[i])}`)
                    }

                    const newProductsList = helpers.addProductInfoInOrderItems(detailData);
                    logger.info(`Order items information: ${JSON.stringify(newProductsList)}`);

                    connection.query(exec.QUERY_INSERT_ORDER_ITEMS, [newProductsList], (err, orderItemsResult) => {
                        if (err) {
                            return connection.rollback(() => {
                                logger.error({message: 'Second rollback', err})
                                reject(err);
                            });
                        }
                        connection.commit((err) => {
                            if (err) {
                                return connection.rollback(() => {
                                    logger.error({message: 'Commit rollback', err})
                                    reject(err);
                                });
                            }
                            resolve({
                                ok: true,
                                message: `New order (${orderId}) with ${orderItemsResult.affectedRows} products.`
                            });
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