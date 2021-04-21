import { config } from 'dotenv';
import { existsSync } from 'fs';
import { resolve } from 'path';

const environments: { [key: string]: string } = {
  test: '.env.test',
  production: '.env',
  development: '.env',
};

const environment = environments[process.env.NODE_ENV ?? 'development'];
const path = resolve(__dirname, '..', environment);

if (!existsSync(path)) {
  throw new Error(`File ${path} doest not exists.`);
}

config({
  path,
  encoding: 'utf-8',
});
