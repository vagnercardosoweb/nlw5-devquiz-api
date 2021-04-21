import swaggerSchemasUser from '@src/modules/swagger/schemas/user';

import swaggerSchemasError from './schemas/error';

const swaggerSchemas = {
  common: {
    error: swaggerSchemasError,
  },

  user: swaggerSchemasUser,
};

export default swaggerSchemas;
