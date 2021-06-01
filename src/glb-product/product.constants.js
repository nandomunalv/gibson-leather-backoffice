const QUERY_SEARCH_ALL = 'SELECT * FROM glb_mst_products WHERE enabled = 1 LIMIT 15';

const QUERY_SEARCH_ONE = 'SELECT * FROM glb_mst_products WHERE product_sku = ?';

const QUERY_INSERT = 'INSERT INTO glb_mst_products SET ?';

const QUERY_UPDATE = 'UPDATE glb_mst_products SET ? WHERE product_id = ?';

const QUERY_DISABLED = 'UPDATE glb_mst_products SET enabled = 0 WHERE product_id = ?';

const SP_SEARCH_DYNAMIC = 'CALL sp_get_dynamic_product(?)';


module.exports = {
    QUERY_SEARCH_ALL,
    QUERY_SEARCH_ONE,
    QUERY_INSERT,
    QUERY_UPDATE,
    QUERY_DISABLED,
    SP_SEARCH_DYNAMIC
}