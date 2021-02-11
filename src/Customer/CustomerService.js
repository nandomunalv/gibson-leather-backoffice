import * as customerDAO from './CustomerDAO';
import * as transform from '../Util/Transformers/CustomerTransform';

export const searchCustomer = async () => {
    const result = await customerDAO.searchOperation();
    let arrResult = [];

    for (let i = 0; result.length > i; i++) {
        const data = transform.selectTransform(result[i]);
        arrResult.push(data);
    }

    return arrResult;
}

export const searchOneCustomer = async (documentNumber) => {
    const result = await customerDAO.searchOneOperation(documentNumber);
    return transform.selectTransform(result[0]);;
}

export const insertNewCustomer = async (payload) => {
    const payloadReloaded = transform.dbStructureTransform(payload);
    let response = {}
    await customerDAO.insertOperation(payloadReloaded)
        .then((resp) => {
            response = { insertId: resp.insertId, message: 'Cliente creado correctamente.' };
        })
        .catch((err) => {
            response = { insertId: 0, message: 'Ocurrió un error. Asegurate de tener los datos completos.' };
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
            response = { changedRows: 0, message: 'Ocurrió un error. Asegurate de tener los datos completos.' }
        });
    return response;
}

export const disabledCustomer = async (customerId) => {
    let response = {};
    await customerDAO.disabledOperation(customerId)
        .then((resp) => {
            response = { changedRows: resp.changedRows, message: 'Clienete deshabilitado correctamente.' };
        })
        .catch((err) => {
            response = { changedRows: 0, message: 'El cliente ya se encuentra deshabilitado.' }
        })
    return response;
}
