const winston = require('winston');

const logger = winston.createLogger({
    level: 'debug',
    transports: [
        new winston.transports.File({ filename: 'logs.log', level: 'debug'})
    ],
    format: winston.format.simple()
});

module.exports = {
    logger
};