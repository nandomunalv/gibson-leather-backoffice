const SELECT_CATEGORY = 'SELECT * FROM glb_mst_categories';
const INSERT_CATEGORY = 'INSERT INTO glb_mst_categories SET ?';
const UPDATE_CATEGORY = 'UPDATE glb_mst_categories SET ? WHERE id = ?';
const DELETE_CATEGORY = 'DELETE FROM glb_mst_categories WHERE id = ?';

module.exports = {
    SELECT_CATEGORY,
    INSERT_CATEGORY,
    UPDATE_CATEGORY,
    DELETE_CATEGORY
}
