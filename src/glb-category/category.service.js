const database = require('./category.dao');

module.exports.searchCategories = async () => await database.findCategories();

module.exports.addCategory = async (payload) => {
    const {insertId} = await database.saveCategory(payload);
    return insertId;
}

module.exports.updateCategory = async (identifier, payload) => {
    const {changedRows} = await database.updateCategoryById(identifier, payload);
    return changedRows;
}

module.exports.deleteCategory = async (identifier) => {
    const {affectedRows} = await database.deleteCategory(identifier);
    return affectedRows;
}
