const service = require('./customer.service');
const {webForDatabaseTransform} = require('./customer.commons');

module.exports.getCustomers = async () => {
    return await service.searchCustomers();
}

module.exports.getCustomer = async (documentNumber) => {
    return await service.searchCustomer(documentNumber);
}

module.exports.getDynamicCustomer = async (word) => {
    return await service.searchDynamicCustomer(word);
}

module.exports.createCustomer = async (payload) => {
    const cleanPayload = webForDatabaseTransform(payload);
    return await service.addCustomer(cleanPayload);
}

module.exports.editCustomer = async (identifier, payload) => {
    const cleanPayload = webForDatabaseTransform(payload);
    return await service.updateCustomer(identifier, cleanPayload);
}

module.exports.removeCustomer = async (identifier) => {
    return await service.disableCustomer(identifier);
}
