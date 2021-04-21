import swaggerSchemasUser from '@src/modules/swagger/schemas/user';

import swaggerSchemasLevel from '@modules/swagger/schemas/level';

import swaggerSchemasError from './schemas/error';

const swaggerSchemas = {
  common: {
    error: swaggerSchemasError,
  },

  user: swaggerSchemasUser,
  level: swaggerSchemasLevel,
};

export default swaggerSchemas;
