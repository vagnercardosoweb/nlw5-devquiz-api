import path from 'path';
import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

import sequelizeOptions from '@src/database/config';

if (process.env.DB_TYPE === 'sqlite') {
  delete (<any>sequelizeOptions).timezone;
}

if (process.env.NODE_ENV === 'test') {
  (<any>sequelizeOptions).logging = false;
}

const sequelize = new Sequelize({
  ...(sequelizeOptions as SequelizeOptions),
  dialect: process.env.DB_TYPE as SequelizeOptions['dialect'],
  models: [path.resolve(__dirname, 'models')],
  minifyAliases: true,
  define: {
    ...sequelizeOptions.define,
    paranoid: false,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
  },
});

export default sequelize;
