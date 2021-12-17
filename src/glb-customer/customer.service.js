const database = require('./customer.dao');

module.exports.searchCustomers = async () => await database.findCustomers();

module.exports.searchCustomer = async (documentNumber) => {
    const result = await database.findByDocumentNumber(documentNumber);
    return result[0];
}

module.exports.searchDynamicCustomer = async (word) => {
    const result = await database.dynamicSearch(word);
    return result[0];
}

module.exports.addCustomer = async (payload) => {
    const {insertId} = await database.save(payload);
    return insertId;
}

module.exports.updateCustomer = async (identifier, payload) => {
    const {changedRows} = await database.updateById(identifier, payload);
    return changedRows;
}

module.exports.disableCustomer = async (identifier) => {
    const {changedRows} = await database.disable(identifier);
    return changedRows;
}
