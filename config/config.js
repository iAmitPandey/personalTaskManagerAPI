/* eslint-disable no-undef */
import dotenv from 'dotenv';

const envFile = process.env.NODE_ENV === 'postgres' ? '.env.postgres' : '.env';

dotenv.config({ path: envFile });

const dialect = process.env.NODE_ENV === 'postgres' ? 'postgres' : 'mysql';

export const config = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: dialect, 
  dbPort: process.env.DB_PORT,
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
};
