const swaggerSchemasQuestion = {
  type: 'object',
  required: ['*'],
  properties: {
    id: {
      type: 'string',
      format: 'uuid',
    },
    name: {
      type: 'string',
    },
    icon_name: {
      type: 'string',
      required: false,
      default: null,
    },
  },
};

export default swaggerSchemasQuestion;
