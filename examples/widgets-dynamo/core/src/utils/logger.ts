import { Logger } from "@aws-lambda-powertools/logger";

// Environment variable POWERTOOLS_SERVICE_NAME will determine service name of logger
export const logger = new Logger();
