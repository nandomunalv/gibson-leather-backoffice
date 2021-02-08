export const dbStructureTransform = (payload) => {
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

export const selectTransform = (payload) => {
    return {
        customerId: payload.customer_id,
        documentType: payload.document_type,
        documentNumber: payload.document_number,
        name: payload.name,
        lastName: payload.last_name,
        email: payload.email,
        phoneNumber: payload.phone_number,
        mainAddress: payload.main_address,
        referenceAddress: payload.reference_address,
        referenceOlvaCourier: payload.reference_olva_courier,
        ubigeoCountry: payload.ubigeo_country,
        ubigeoDepartment: payload.ubigeo_department,
        ubigeoProvince: payload.ubigeo_province,
        ubigeoDistrict: payload.ubigeo_district
    }
}