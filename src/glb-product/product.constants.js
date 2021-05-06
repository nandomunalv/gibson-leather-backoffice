const Q_SEARCH_ALL = 'SELECT * FROM glb_mst_products WHERE enabled = 1 LIMIT 15';

const Q_SEARCH_ONE = 'SELECT * FROM glb_mst_products WHERE product_sku = ?';

const Q_INSERT = 'INSERT INTO glb_mst_products SET ?';

const Q_UPDATE = 'UPDATE glb_mst_products SET ? WHERE product_id = ?';

const Q_DISABLED = 'UPDATE glb_mst_products SET enabled = 0 WHERE product_id = ?';

const SP_SEARCH_DYNAMIC_PRODUCTO = 'CALL sp_get_dynamic_product(?)';


module.exports = {
    Q_SEARCH_ALL,
    Q_SEARCH_ONE,
    Q_INSERT,
    Q_UPDATE,
    Q_DISABLED,
    SP_SEARCH_DYNAMIC_PRODUCTO
}