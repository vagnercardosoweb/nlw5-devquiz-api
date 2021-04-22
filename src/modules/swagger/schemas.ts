import swaggerSchemasUser from '@src/modules/swagger/schemas/user';

import swaggerSchemasAnswer from '@modules/swagger/schemas/answer';
import swaggerSchemasLevel from '@modules/swagger/schemas/level';
import swaggerSchemasQuestion from '@modules/swagger/schemas/question';

import swaggerSchemasError from './schemas/error';

const swaggerSchemas = {
  common: {
    error: swaggerSchemasError,
  },

  user: swaggerSchemasUser,
  level: swaggerSchemasLevel,
  question: swaggerSchemasQuestion,
  answer: swaggerSchemasAnswer,
};

export default swaggerSchemas;
