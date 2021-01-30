import * as customerTransform from '../Util/Transformers/CustomerTransform';
import * as customerDAO from './CustomerDAO';

export const searchCustomer = async () => {
    const result = await customerDAO.searchOperation();
    let arrResult = [];

    for(let i = 0; result.length > i; i++) {
        const transform = customerTransform.selectTransform(result[i]);
        arrResult.push(transform);
    }

    return arrResult;
}

export const insertNewCustomer = async (payload) => {
    const payloadReloaded = customerTransform.dbStructureTransform(payload);
    return await customerDAO.insertOperation(payloadReloaded);
}

export const updatedCustomerData = async (customerId, payload) => {
    const payloadReloaded = customerTransform.dbStructureTransform(payload);
    return await customerDAO.updateOperation(customerId, payloadReloaded);
}

export const disabledCustomer = async (customerId) => {
    return await customerDAO.disabledOperation(customerId);
}
