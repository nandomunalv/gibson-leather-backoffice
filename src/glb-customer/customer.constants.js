const QUERY_SEARCH_ALL = 'SELECT * FROM glb_mst_customers WHERE enabled = 1 LIMIT 10';

const QUERY_SEARCH_ONE_CLIENT = 'SELECT * FROM glb_mst_customers WHERE document_number = ?';

const QUERY_INSERT = 'INSERT INTO glb_mst_customers SET ?';

const QUERY_UPDATE = 'UPDATE glb_mst_customers SET ? WHERE customer_id = ?';

const QUERY_DISABLED = 'UPDATE glb_mst_customers SET enabled = 0 WHERE customer_id = ?';

const SP_SEARCH_DYNAMIC = 'CALL sp_get_dynamic_customer(?)';

module.exports = {
    QUERY_SEARCH_ALL,
    QUERY_SEARCH_ONE_CLIENT,
    QUERY_INSERT,
    QUERY_UPDATE,
    QUERY_DISABLED,
    SP_SEARCH_DYNAMIC
}