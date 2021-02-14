export const SEARCH_SIMPLE_QUERY = 'SELECT * FROM glb_mst_customers WHERE enabled = 1 LIMIT 10';

export const SEARCH_ONE_CLIENT_QUERY = 'SELECT * FROM glb_mst_customers WHERE document_number = ?';

export const INSERT_QUERY = 'INSERT INTO glb_mst_customers SET ?';

export const UPDATE_QUERY = 'UPDATE glb_mst_customers SET ? WHERE customer_id = ?';

export const DISABLED_QUERY = 'UPDATE glb_mst_customers SET enabled = 0 WHERE customer_id = ?';

export const SP_SEARCH_DYNAMIC_CUSTOMER = 'CALL sp_get_dynamic_customer(?)';

/*
document_type
document_number
name
last_name
email
phone_number
main_address
reference_address
reference_olva_courier
ubigeo_country
ubigeo_department
ubigeo_province
ubigeo_district
*/
