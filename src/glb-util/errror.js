class ErrorHandler extends Error {
    constructor(error, message = '', statusCode = 0) {
        super();
        this.error = error;
        this.message = message;
        this.statusCode = statusCode;
    }
}

const handleError = (err, res) => {
    const {statusCode, message, error} = err;

    return res.status(statusCode).json({
        status: 'error',
        message,
        detail: error
    })
}

module.exports = {
    ErrorHandler,
    handleError,
}