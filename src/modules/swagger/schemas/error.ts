const swaggerSchemasCommonError = {
  type: 'object',
  required: ['*'],
  properties: {
    name: { type: 'string' },
    code: { type: 'string' },
    message: { type: 'string' },
    statusCode: { type: 'number' },
    stack: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
  },
};

export default swaggerSchemasCommonError;
