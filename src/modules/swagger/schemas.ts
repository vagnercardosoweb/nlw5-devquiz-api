import swaggerSchemasUser from '@src/modules/swagger/schemas/user';

import swaggerSchemasDates from '@modules/swagger/schemas/dates';
import swaggerSchemasLevel from '@modules/swagger/schemas/level';
import swaggerSchemasLevelCreate from '@modules/swagger/schemas/level-create';
import swaggerSchemasQuestion from '@modules/swagger/schemas/question';
import swaggerSchemasQuestionCreate from '@modules/swagger/schemas/question-create';

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

  questions: {
    find: swaggerSchemasQuestion,
    create: swaggerSchemasQuestionCreate,
  },

  user: swaggerSchemasUser,
};

export default swaggerSchemas;
