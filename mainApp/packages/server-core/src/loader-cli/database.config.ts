import {
  getOsPaths
} from "../lib/env";

// const nodeEnv = process.env.NODE_ENV;


export const dbConfigConnections = [];
dbConfigConnections.push({
  name: process.env.ZGS_CONNECTION_NAME,
  type: process.env.ZGS_CONNECTION,
  host: process.env.ZGS_HOST,
  username: process.env.ZGS_USERNAME,
  password: process.env.ZGS_PASSWORD,
  database: process.env.ZGS_DATABASE,
  port: Number.parseInt(process.env.ZGS_PORT, 10),
  entities: getOsPaths('ZGS_ENTITIES'),
  migrations: getOsPaths('ZGS_MIGRATIONS'),
  migrationsRun: process.env.ZGS_MIGRATIONS_RUN === 'true',
  seeds: [process.env.ZGS_SEEDING_SEEDS],
  factories: [process.env.ZGS_SEEDING_FACTORIES],
  subscribers: getOsPaths('ZGS_SUBSCRIBERS'),
  cli: {
    migrationsDir: process.env.ZGS_MIGRATIONS_DIR,
    entitiesDir: process.env.ZGS_ENTITIES_DIR,
    subscribersDir: process.env.ZGS_SUBSCRIBERS_DIR
  },
  pool: {
    max: Number(process.env.TYPEORM_MAX_POOL)
  }
})

