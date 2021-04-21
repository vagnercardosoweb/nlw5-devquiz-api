const swaggerSchemasUser = {
  type: 'object',
  required: ['*'],
  properties: {
    id: { type: 'string', format: 'uuid' },
    name: { type: 'string', example: 'User Name' },
    email: { type: 'string', format: 'email' },
    created_at: { type: 'string', format: 'date-time' },
    updated_at: { type: 'string', format: 'date-time' },
  },
};

export default swaggerSchemasUser;
