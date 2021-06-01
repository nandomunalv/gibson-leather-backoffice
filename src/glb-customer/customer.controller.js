const service = require('./customer.service');
const {webForDatabaseTransform} = require('./customer.commons');

const getCustomers = async () => {
    return await service.searchCustomers();
}

const getCustomer = async (documentNumber) => {
    return await service.searchCustomer(documentNumber);
}

const getDynamicCustomer = async (word) => {
    return await service.searchDynamicCustomer(word);
}

const createCustomer = async (payload) => {
    const cleanPayload = webForDatabaseTransform(payload);
    return await service.addCustomer(cleanPayload);
}

const editCustomer = async (identifier, payload) => {
    const cleanPayload = webForDatabaseTransform(payload);
    return await service.updateCustomer(identifier, cleanPayload);
}

const removeCustomer = async (identifier) => {
    return await service.disableCustomer(identifier);
}

module.exports = {
    getCustomers,
    getCustomer,
    getDynamicCustomer,
    createCustomer,
    editCustomer,
    removeCustomer,
}