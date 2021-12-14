const service = require('./category.service');

module.exports.getCategories = async () => await service.searchCategories();
module.exports.createCategory = async (payload) => await service.addCategory(payload);
module.exports.editCategory = async (identifier, payload) => await service.updateCategory(identifier, payload);
module.exports.removeCategory = async (identifier) => await service.deleteCategory(identifier);
