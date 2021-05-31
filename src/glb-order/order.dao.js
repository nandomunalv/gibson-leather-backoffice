const pool = require('./../../config/server/database');
const exec = require('./order.constants');

const findProductsBySku = async (data) => {
    const searchQuery = exec.QUERY_SEARCH_PRODUCT.replace('@sku',data);
    return pool.query(searchQuery);
}

const insertOrder = async (products) => {
    const productList = `'${products.join("','")}'`;

    console.log(productList);

    pool.getConnection(async (err, connection) => {

        await connection.query('SET TRANSACTION ISOLATION LEVEL READ COMMITTED');
        console.log('Finished setting the isolation level to read committed');

        connection.beginTransaction((err) => {
            if (err) { /*Set an error*/
                console.err('>>> Transaction error:', err);
            }
            connection.query('INSERT INTO glb_trx_orders SET ?', dataCore, (err, result1) => {
                if (err) {
                    return connection.rollback(() => {/*Set an error*/
                        console.log('>>> Rollback 1:', err);
                    })
                }

                const orderId = result1.insertId;

                for (let i = 0; i < dataDetail.length; i++) {
                    dataDetail[i].order_id = orderId;
                    console.log('>>> Detail incoming:', JSON.stringify(dataDetail[i]))
                }

                const newDataDetail = dataDetail.map(item => [
                    item.order_id,
                    item.order_item_status_code,
                    item.product_id,
                    item.order_item_quantity,
                    item.order_item_price])

                connection.query('INSERT INTO glb_trx_order_items (order_id, order_item_status_code, product_id, order_item_quantity, order_item_price) VALUES ?', [newDataDetail], (err, result2) => {
                    if (err) {
                        return connection.rollback(() => {/*Set an error*/
                            connection.release();
                            console.log('>>> Rollback 2:', err);
                        })
                    }
                    connection.commit((err) => {
                        if (err) {
                            return connection.rollback(() => {/*Set an error*/
                                console.log('>>> Rollback commit:', err);
                            })
                        }
                        console.log('>>> LETS FUCKING GO! Filas insertadas:', result2.affectedRows);
                    })
                });
            });

        })
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