const swaggerSchemasDates = {
  type: 'object',
  required: ['*'],
  properties: {
    created_at: { type: 'string', format: 'date-time' },
    updated_at: { type: 'string', format: 'date-time' },
    deleted_at: {
      type: 'string',
      format: 'date-time',
      example: null,
    },
  },
};

export default swaggerSchemasDates;
