const swaggerSchemasAnswerCreate = {
  type: 'object',
  required: ['*'],
  properties: {
    name: { type: 'string' },
    question_id: { type: 'string', format: 'uuid' },
    correct: { type: 'boolean' },
    points: { type: 'number' },
  },
};

export default swaggerSchemasAnswerCreate;
