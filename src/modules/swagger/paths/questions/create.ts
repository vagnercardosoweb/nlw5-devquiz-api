const swaggerPathsQuestionCreate = {
  tags: ['questions'],
  summary: 'Cria nova pergunta',

  requestBody: {
    require: true,
    description: 'description',
    content: {
      'application/json': {
        schema: {
          $ref: '#/schemas/questions/create',
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
              { $ref: '#/schemas/questions/find' },
              { $ref: '#/schemas/common/dates' },
              {
                type: 'object',
                properties: {
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
