const swaggerSchemasLevel = {
  type: 'object',
  required: ['*'],
  properties: {
    id: { type: 'string', format: 'uuid' },
    name: { type: 'string' },
  },
};

export default swaggerSchemasLevel;
