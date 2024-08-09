import winston from "winston";

const logger = winston.createLogger({
  level: "debug",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
  ],
});

logger.info("Hello World");
logger.warn("Hello World");
logger.error("Hello World");