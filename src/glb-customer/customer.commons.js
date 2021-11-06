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
        arrResponse.push(newArr[i]);
    }
    return arrResponse;
}

const webForDatabaseTransform = (payload) => {
    return {
        document_type: payload.documentType === '' ? null : payload.documentType,
        document_number: payload.documentNumber === '' ? null : payload.documentNumber,
        name: payload.name === '' ? null : payload.name,
        last_name: payload.lastName === '' ? null : payload.lastName,
        email: payload.email,
        phone_number: payload.phoneNumber === '' ? null : payload.phoneNumber,
        main_address: payload.mainAddress === '' ? null : payload.mainAddress,
        reference_address: payload.referenceAddress,
        reference_olva_courier: payload.referenceOlvaCourier,
        ubigeo_country: payload.ubigeoCountry,
        ubigeo_department: payload.ubigeoDepartment,
        ubigeo_province: payload.ubigeoProvince,
        ubigeo_district: payload.ubigeoDistrict,
        enabled: 1
    }
}

module.exports = {
    arrValidation,
    webForDatabaseTransform
}
