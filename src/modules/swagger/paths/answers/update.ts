const swaggerPathsAnswerUpdate = {
  tags: ['answers'],
  summary: 'Atualiza resposta por id',

  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'ID da resposta',
      required: true,
    },
  ],

  requestBody: {
    require: true,
    description: 'description',
    content: {
      'application/json': {
        schema: {
          $ref: '#/schemas/answers/create',
        },
      },
    },
  },

  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            allOf: [
              { $ref: '#/schemas/answers/find' },
              { $ref: '#/schemas/common/dates' },
              {
                type: 'object',
                properties: {
                  correct: { type: 'boolean' },
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

export default swaggerPathsAnswerUpdate;
