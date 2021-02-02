export const INSERT_QUERY = 'INSERT INTO glb_mst_products SET ?';

export const SEARCH_SIMPLE_QUERY = 'SELECT * FROM glb_mst_products';

export const UPDATE_QUERY = 'UPDATE glb_mst_products SET ? WHERE product_id = ?';

// TODO: Pensar si neceista la desactivación del producto o se desactive cuando no haya stock
export const DISABLED_QUERY = 'UPDATE glb_mst_products SET enabled = 0 WHERE product_id = ?';

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