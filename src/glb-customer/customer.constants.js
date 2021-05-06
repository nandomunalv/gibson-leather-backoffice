const SEARCH_SIMPLE_QUERY = 'SELECT * FROM glb_mst_customers WHERE enabled = 1 LIMIT 10';

const SEARCH_ONE_CLIENT_QUERY = 'SELECT * FROM glb_mst_customers WHERE document_number = ?';

const INSERT_QUERY = 'INSERT INTO glb_mst_customers SET ?';

const UPDATE_QUERY = 'UPDATE glb_mst_customers SET ? WHERE customer_id = ?';

const DISABLED_QUERY = 'UPDATE glb_mst_customers SET enabled = 0 WHERE customer_id = ?';

const SP_SEARCH_DYNAMIC_CUSTOMER = 'CALL sp_get_dynamic_customer(?)';

module.exports = {
    SEARCH_SIMPLE_QUERY,
    SEARCH_ONE_CLIENT_QUERY,
    INSERT_QUERY,
    UPDATE_QUERY,
    DISABLED_QUERY,
    SP_SEARCH_DYNAMIC_CUSTOMER
}