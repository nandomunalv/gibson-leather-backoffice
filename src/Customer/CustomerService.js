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
    const payloadReloaded = customerTransform.createTransform(payload);
    const result = await customerDAO.insertOperation(payloadReloaded);
    return result;
}

export const disabledCustomer = async (customerId) => {
    const result = await customerDAO.disabledOperation(customerId);
    return result;
}
