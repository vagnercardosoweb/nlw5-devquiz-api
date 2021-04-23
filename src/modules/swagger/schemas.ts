import swaggerSchemasUser from '@src/modules/swagger/schemas/user';

import swaggerSchemasAnswer from '@modules/swagger/schemas/answer';
import swaggerSchemasDates from '@modules/swagger/schemas/dates';
import swaggerSchemasLevel from '@modules/swagger/schemas/level';
import swaggerSchemasLevelCreate from '@modules/swagger/schemas/level-create';
import swaggerSchemasQuestion from '@modules/swagger/schemas/question';

import swaggerSchemasError from './schemas/error';

const swaggerSchemas = {
  common: {
    error: swaggerSchemasError,
    dates: swaggerSchemasDates,
  },

  levels: {
    find: swaggerSchemasLevel,
    create: swaggerSchemasLevelCreate,
  },

  user: swaggerSchemasUser,
  question: swaggerSchemasQuestion,
  answer: swaggerSchemasAnswer,
};

export default swaggerSchemas;
