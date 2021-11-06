const database = require('./customer.dao');
const {arrValidation} = require('./customer.commons');

module.exports.searchCustomers = async () => {
    return await database.findCustomers();
}

module.exports.searchCustomer = async (documentNumber) => {
    const result = await database.findByDocumentNumber(documentNumber);
    return arrValidation(1, result);
}

module.exports.searchDynamicCustomer = async (word) => {
    const result = await database.dynamicSearch(word);
    return arrValidation(1, result);
}

module.exports.addCustomer = async (payload) => {
    const result = await database.save(payload);
    return result.insertId;
}

module.exports.updateCustomer = async (identifier, payload) => {
    const result = await database.updateById(identifier, payload);
    return result.changedRows;
}

module.exports.disableCustomer = async (identifier) => {
    const result = await database.disable(identifier);
    return result.changedRows;
}
