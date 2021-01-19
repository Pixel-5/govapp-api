import { ConnectionOptions } from 'typeorm';
import User from '../entity/User';

const docker = {
  host: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'govApp',
};

const dev = {
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '54646673More',
  database: 'govapp',
};

const deploy = {
  url: process.env.DATABASE_URL,
  extra: { ssl: true },
};

const config = dev;

export const dbconfig: ConnectionOptions = {
  ...config,
  type: 'postgres',
  synchronize: true,
  logging: false,
  entities: [User],
  dropSchema: false,
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: '../entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
};
