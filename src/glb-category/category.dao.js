const pool = require('./../../config/server/database');
const exec = require('./category.constants');

module.exports.findCategories = async () => pool.query(exec.SELECT_CATEGORY);
module.exports.saveCategory = async (data) => pool.query(exec.INSERT_CATEGORY, [data]);
module.exports.updateCategoryById = async (id, data) => pool.query(exec.UPDATE_CATEGORY, [data, id]);
module.exports.deleteCategory = async (id) => pool.query(exec.DELETE_CATEGORY, [id]);

