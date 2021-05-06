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
    const result = await service.addCustomer(cleanPayload);
    console.log(result);
}

const editCustomer = async (identifier, payload) => {
    const cleanPayload = webForDatabaseTransform(payload);
    const result = await service.updateCustomer(identifier, cleanPayload);
    console.log(result);
}

const removeCustomer = async (identifier) => {
    const result = await service.disableCustomer(identifier);
    console.log(result);
}

module.exports = {
    getCustomers,
    getCustomer,
    getDynamicCustomer,
    createCustomer,
    editCustomer,
    removeCustomer,
}