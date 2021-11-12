const QUERY_SEARCH_ONE = 'SELECT * FROM glb_mst_products WHERE product_sku = ?';

const QUERY_INSERT = 'INSERT INTO glb_mst_products SET ?';

const QUERY_UPDATE = 'UPDATE glb_mst_products SET ? WHERE product_id = ?';

const QUERY_DISABLED = 'UPDATE glb_mst_products SET enabled = 0 WHERE product_id = ?';

const SP_SEARCH_DYNAMIC = 'CALL sp_get_dynamic_product(?)';

const QUERY_SEARCH_ALL = 'SELECT\n' +
    '\tgmp.product_id AS productId,\n' +
    '\tgmp.category_id AS categoryId,\n' +
    '\tgmp.product_sku AS sku,\n' +
    '\tgmp.product_name AS name,\n' +
    '\tgmp.product_description AS description,\n' +
    '\tgmp.product_details AS details,\n' +
    '\tgmp.product_price AS price,\n' +
    '\tgmp.product_color AS color,\n' +
    '\tgmp.product_gender AS gender,\n' +
    '\tgmp.product_width AS widthCm,\n' +
    '\tgmp.product_long AS longCm,\n' +
    '\tgmp.product_high AS highCm,\n' +
    '\tgmp.product_weight AS weightKg,\n' +
    '\tgmp.product_stock AS stock,\n' +
    '\tgmp.product_img_name AS imgName,\n' +
    '\tgmp.product_img_url AS imgUrl,\n' +
    '\tgmp.enabled AS enabled \n' +
    'FROM glb_mst_products gmp WHERE enabled = 1 LIMIT 10;'


module.exports = {
    QUERY_SEARCH_ALL,
    QUERY_SEARCH_ONE,
    QUERY_INSERT,
    QUERY_UPDATE,
    QUERY_DISABLED,
    SP_SEARCH_DYNAMIC
}
