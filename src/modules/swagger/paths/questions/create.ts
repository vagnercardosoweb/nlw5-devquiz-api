const swaggerPathsQuestionCreate = {
  tags: ['questions'],
  summary: 'Cria nova pergunta',

  requestBody: {
    require: true,
    description: 'description',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          required: ['*'],
          properties: {
            name: { type: 'string' },
            level_id: { type: 'string', format: 'uuid' },
            icon_name: { type: 'string', required: false },
          },
        },
      },
    },
  },

  responses: {
    201: {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            allOf: [
              { $ref: '#/schemas/question' },
              {
                type: 'object',
                properties: {
                  created_at: { type: 'string', format: 'date-time' },
                  updated_at: { type: 'string', format: 'date-time' },
                  deleted_at: {
                    type: 'string',
                    format: 'date-time',
                    example: null,
                  },
                  level_id: { type: 'string', format: 'uuid' },
                },
              },
            ],
          },
        },
      },
    },
    400: { $ref: '#/components/errors/bad-request' },
    401: { $ref: '#/components/errors/unauthorized' },
    404: { $ref: '#/components/errors/not-found' },
    500: { $ref: '#/components/errors/server-error' },
  },
};

export default swaggerPathsQuestionCreate;
