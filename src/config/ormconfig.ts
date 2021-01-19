import { ConnectionOptions } from 'typeorm';
import Chat from '../entity/Chat';
import Message from '../entity/Message';
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
  password: 'postgres',
  database: 'govApp',
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
  entities: [Chat, User, Message],
  dropSchema: false,
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: '../entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
};
