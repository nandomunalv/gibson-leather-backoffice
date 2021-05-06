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
    let result = 0;
    
    await database.insertCustomer(payload)
        .then((dbResp) => {
            result = dbResp.insertId
        })
        .catch((err) => {
            console.log('>>>>>>> ', err);
            throw new Error('Algo se jodió aquí xd');
        });

    return result;
}

const updateCustomer = async (identifier, payload) => {
    let result = 0;

    await database.updateCustomerDataById(identifier, payload)
        .then((dbResp) => {
            result = dbResp.changedRows;
        })
        .catch((err) => {
            console.log('>>>>>>> ', err);
            throw new Error('Algo se jodió aquí xd');
        });
    
    return result;
}

const disableCustomer = async (identifier) => {
    let result = 0;

    await database.updateCustomerStatus(identifier)
        .then((dbResp) => {
            result = dbResp.changedRows;
        })
        .catch((err) => {
            console.log('>>>>>>> ', err);
            throw new Error('Algo se jodió aquí xd');
        })
    
    return result;
}

module.exports = {
    searchCustomers,
    searchCustomer,
    searchDynamicCustomer,
    addCustomer,
    updateCustomer,
    disableCustomer
}