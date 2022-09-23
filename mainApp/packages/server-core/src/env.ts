import * as dotenv from "dotenv";
import * as paths from "../config/paths";
import * as pkg from "../package.json";
import {
    getOsEnv,
    getOsEnvOptional,
    getOsPath,
    getOsPaths,
    normalizePort,
    toBool,
    toNumber,
} from "./lib/env";

/**
 * Load .env file or for tests the .env.test file.
 */
const NODE_ENV = process.env.NODE_ENV;

if (!NODE_ENV) {
    throw new Error(
        "The NODE_ENV environment variable is required but was not specified."
    );
}

let customEnvPath = paths.getDotenvPath(NODE_ENV)

dotenv.config({
    path: customEnvPath,
});

/**
 * Environment variables
 */
export const env = {
    node: process.env.NODE_ENV || "dev",
    isProduction: process.env.NODE_ENV === "prod",
    isStg: process.env.NODE_ENV === "stg",
    isTest: process.env.NODE_ENV === "test",
    isDevelopment: process.env.NODE_ENV === "dev",
    app: {
        name: getOsEnv("APP_NAME"),
        version: (pkg as any).version,
        description: (pkg as any).description,
        host: getOsEnv("APP_HOST"),
        schema: getOsEnv("APP_SCHEMA"),
        routePrefix: getOsEnv("APP_ROUTE_PREFIX"),
        port: normalizePort(process.env.PORT || getOsEnv("APP_PORT")),
        banner: toBool(getOsEnv("APP_BANNER")),
        instrumentationKey: process.env.INSTRUMENTATIONKEY
            ? getOsEnv("INSTRUMENTATIONKEY")
            : "",
        dirs: {
            migrations: getOsPaths("ZGS_MIGRATIONS"),
            migrationsDir: getOsPath("ZGS_MIGRATIONS_DIR"),
            entities: getOsPaths("ZGS_ENTITIES"),
            entitiesDir: getOsPath("ZGS_ENTITIES_DIR"),
            controllers: getOsPaths("CONTROLLERS"),
            middlewares: getOsPaths("MIDDLEWARES"),
            interceptors: getOsPaths("INTERCEPTORS"),
            subscribers: getOsPaths("ZGS_SUBSCRIBERS_DIR"),
            resolvers: getOsPaths("RESOLVERS"),
        },
    },
    log: {
        level: getOsEnv("LOG_LEVEL"),
        maxSize : getOsEnv('LOG_MAX_SIZE'),
        maxFiles : getOsEnv('LOG_MAX_FILES'),
        dir: getOsEnv("LOG_DIR"),
        isZip: toBool(getOsEnv("LOG_ZIP")),
        file: getOsEnv("LOG_FILE")
    },
    db: {
        type: getOsEnv("ZGS_CONNECTION"),
        host: getOsEnvOptional("ZGS_HOST"),
        port: toNumber(getOsEnvOptional("ZGS_PORT")),
        username: getOsEnvOptional("ZGS_USERNAME"),
        password: getOsEnvOptional("ZGS_PASSWORD"),
        database: getOsEnv("ZGS_DATABASE"),
        synchronize: toBool(getOsEnvOptional("ZGS_SYNCHRONIZE")),
        logging: getOsEnv("ZGS_LOGGING"),
    },
    swagger: {
        enabled: toBool(getOsEnv("SWAGGER_ENABLED")),
        route: getOsEnv("SWAGGER_ROUTE"),
        username: getOsEnv("SWAGGER_USERNAME"),
        password: getOsEnv("SWAGGER_PASSWORD"),
    },
    monitor: {
        enabled: toBool(getOsEnv("MONITOR_ENABLED")),
        route: getOsEnv("MONITOR_ROUTE"),
        username: getOsEnv("MONITOR_USERNAME"),
        password: getOsEnv("MONITOR_PASSWORD"),
    },
};
