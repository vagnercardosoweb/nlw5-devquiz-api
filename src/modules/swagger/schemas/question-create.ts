const swaggerSchemasQuestionCreate = {
  type: 'object',
  required: ['*'],
  properties: {
    name: { type: 'string' },
    level_id: { type: 'string', format: 'uuid' },
    icon_name: { type: 'string', required: false },
  },
};

export default swaggerSchemasQuestionCreate;
