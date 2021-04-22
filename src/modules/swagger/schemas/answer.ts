const swaggerSchemasAnswer = {
  type: 'object',
  required: ['*'],
  properties: {
    id: { type: 'string', format: 'uuid' },
    name: { type: 'string' },
    points: { type: 'number' },
  },
};

export default swaggerSchemasAnswer;
