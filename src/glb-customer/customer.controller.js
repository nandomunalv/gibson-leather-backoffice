const service = require('./customer.service');
const {customerMapper} = require("./customer.mapper");
const {TYPE_NEW, TYPE_UPDATE} = require("../glb-util/constants");

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
    return await service.addCustomer(customerMapper(TYPE_NEW, payload));
}

module.exports.editCustomer = async (identifier, payload) => {
    return await service.updateCustomer(identifier, customerMapper(TYPE_UPDATE, payload));
}

module.exports.removeCustomer = async (identifier) => {
    return await service.disableCustomer(identifier);
}
