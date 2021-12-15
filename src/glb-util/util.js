module.exports.buildSecurityAuditAttributes = (type) => {
    switch (type) {
        case 'NEW':
            return {
                creation_user: null,
                creation_date: new Date(),
                creation_ip: null,
            }
        case 'UPDATE':
            return {
                update_user: null,
                update_date: new Date(),
                update_ip: null,
            }
    }
}
