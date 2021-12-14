const QUERY_SEARCH_ONE_CLIENT = 'SELECT * FROM glb_mst_customers WHERE document_number = ?';

const QUERY_INSERT = 'INSERT INTO glb_mst_customers SET ?';

const QUERY_UPDATE = 'UPDATE glb_mst_customers SET ? WHERE customer_id = ?';

const QUERY_DISABLED = 'UPDATE glb_mst_customers SET enabled = 0 WHERE customer_id = ?';

const SP_SEARCH_DYNAMIC = 'CALL sp_get_dynamic_customer(?)';

const QUERY_SEARCH_ALL = 'SELECT\n' +
    '\tgmc.customer_id AS customerId,\n' +
    '\tgmc.document_type AS documentType,\n' +
    '\tgmc.document_number AS documentNumber,\n' +
    '\tgmc.name AS name,\n' +
    '\tgmc.last_name AS lastName,\n' +
    '\tgmc.email AS email,\n' +
    '\tgmc.phone_number AS phoneNumber,\n' +
    '\tgmc.main_address AS mainAddress,\n' +
    '\tgmc.reference_address AS referenceAddress,\n' +
    '\tgmc.reference_olva_courier AS referenceOlvaCourier,\n' +
    '\tgmc.ubigeo_country AS ubigeoCountry,\n' +
    '\tgmc.ubigeo_department AS ubigeoDepartment,\n' +
    '\tgmc.ubigeo_province AS ubigeoProvince,\n' +
    '\tgmc.ubigeo_district AS ubigeoDistrict,\n' +
    '\tgmc.enabled AS enabled\n' +
    'FROM glb_mst_customers gmc WHERE enabled = 1 LIMIT 10 ;\n';

module.exports = {
    QUERY_SEARCH_ALL,
    QUERY_SEARCH_ONE_CLIENT,
    QUERY_INSERT,
    QUERY_UPDATE,
    QUERY_DISABLED,
    SP_SEARCH_DYNAMIC
}
