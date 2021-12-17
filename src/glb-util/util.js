const {TYPE_NEW, TYPE_UPDATE} = require("./constants");

module.exports.buildSecurityAuditAttributes = (type) => {
    switch (type) {
        case TYPE_NEW:
            return {
                creation_user: null,
                creation_date: new Date(),
                creation_ip: null,
            }
        case TYPE_UPDATE:
            return {
                update_user: null,
                update_date: new Date(),
                update_ip: null,
            }
    }
}
