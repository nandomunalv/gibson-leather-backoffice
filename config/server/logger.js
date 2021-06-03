const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf, prettyPrint  } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}][${level}]: ${message instanceof String ? message : JSON.stringify(message)}`;
});

const logger = createLogger({
    format: combine(
        label({ label: 'logger' }),
        timestamp(),
        myFormat,
    ),
    transports: [new transports.Console()]
});

module.exports = {
    logger,
}