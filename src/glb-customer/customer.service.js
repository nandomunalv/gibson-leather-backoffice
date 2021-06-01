const database = require('./customer.dao');
const {
    arrValidation,
    databaseForWebTransform
} = require('./customer.commons');

const searchCustomers = async () => {
    const result = await database.findCustomers();
    return arrValidation(0, result);
}

const searchCustomer = async (documentNumber) => {
    const result = await database.findOneCustomerByDocumentNumber(documentNumber);
    return databaseForWebTransform(result[0]);
}

const searchDynamicCustomer = async (word) => {
    const result = await database.findDynamicCustomer(word);
    return arrValidation(1, result);
}

const addCustomer = async (payload) => {
    const dbResp = await database.insertCustomer(payload);
    return dbResp.insertId;
}

const updateCustomer = async (identifier, payload) => {
    const dbResp = await database.updateCustomerDataById(identifier, payload);
    return dbResp.changedRows;
}

const disableCustomer = async (identifier) => {
    const dbResp = await database.updateCustomerStatus(identifier);
    return dbResp.changedRows;
}

module.exports = {
    searchCustomers,
    searchCustomer,
    searchDynamicCustomer,
    addCustomer,
    updateCustomer,
    disableCustomer
}