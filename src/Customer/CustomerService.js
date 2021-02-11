import * as customerDAO from './CustomerDAO';
import * as transform from '../Util/Transformers/CustomerTransform';

export const searchCustomer = async () => {
    const result = await customerDAO.searchOperation();
    return arrValidation(0, result);
}

export const searchOneCustomer = async (documentNumber) => {
    const result = await customerDAO.searchOneOperation(documentNumber);
    return transform.selectTransform(result[0]);
}

export const searchDynamicCustomer = async (word) => {
    const result = await customerDAO.searchDynamicOperation(word);
    return arrValidation(1, result);
}

export const insertNewCustomer = async (payload) => {
    const payloadReloaded = transform.dbStructureTransform(payload);
    let response = {}
    await customerDAO.insertOperation(payloadReloaded)
        .then((resp) => {
            response = { insertId: resp.insertId, message: 'Cliente creado correctamente.' };
        })
        .catch((err) => {
            response = { insertId: 0, message: 'Ocurrió un error. Asegúrate de tener los datos completos.' };
        });
    return response;

}

export const updatedCustomerData = async (customerId, payload) => {
    const payloadReloaded = transform.dbStructureTransform(payload);
    let response = {};
    await customerDAO.updateOperation(customerId, payloadReloaded)
        .then((resp) => {
            response = { changedRows: resp.changedRows, message: 'Cliente actualizado correctamente.' };
        })
        .catch((err) => {
            response = { changedRows: 0, message: 'Ocurrió un error. Asegúrate de tener los datos completos.' }
        });
    return response;
}

export const disableCustomer = async (customerId) => {
    let response = {};
    await customerDAO.disableOperation(customerId)
        .then((resp) => {
            response = { changedRows: resp.changedRows, message: 'Cliente deshabilitado correctamente.' };
        })
        .catch((err) => {
            response = { changedRows: 0, message: 'El cliente ya se encuentra deshabilitado.' }
        })
    return response;
}

const arrValidation = (type, arr) => {
    let newArr;
    if (type) {
        arr.pop()
        newArr = arr[0];
    } else {
        newArr = arr;
    }
    let arrResponse = [];
    for (let i = 0; newArr.length > i; i++) {
        const data = transform.selectTransform(newArr[i]);
        arrResponse.push(data);
    }
    return arrResponse;
}
