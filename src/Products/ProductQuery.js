export const Q_SEARCH_ALL = 'SELECT * FROM glb_mst_products WHERE enabled = 1 LIMIT 15';

export const Q_SEARCH_ONE = 'SELECT * FROM glb_mst_products WHERE product_sku = ?';

export const Q_INSERT = 'INSERT INTO glb_mst_products SET ?';

export const Q_UPDATE = 'UPDATE glb_mst_products SET ? WHERE product_id = ?';

export const Q_DISABLED = 'UPDATE glb_mst_products SET enabled = 0 WHERE product_id = ?';

export const SP_SEARCH_DYNAMIC_PRODUCTO = 'CALL';

/*
product_id
product_code
product_name
product_description
product_details
product_price
product color
product_width
product_long
product_high
product_weight
product_stock
*/
