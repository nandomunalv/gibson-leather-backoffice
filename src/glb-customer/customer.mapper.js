const {buildSecurityAuditAttributes} = require("../glb-util/util");

module.exports.customerMapper = (type, payload) => {

    const auditAttributes = buildSecurityAuditAttributes(type);

    const mapper = {
        document_type: payload.documentType,
        document_number: payload.documentNumber,
        name: payload.name,
        last_name: payload.lastName,
        email: payload.email,
        phone_number: payload.phoneNumber,
        main_address: payload.mainAddress,
        reference_address: payload.referenceAddress,
        reference_olva_courier: payload.referenceOlvaCourier,
        ubigeo_country: payload.ubigeoCountry,
        ubigeo_department: payload.ubigeoDepartment,
        ubigeo_province: payload.ubigeoProvince,
        ubigeo_district: payload.ubigeoDistrict,
        enabled: payload.enabled,
    }

    return {
        ...mapper,
        ...auditAttributes
    }
}
