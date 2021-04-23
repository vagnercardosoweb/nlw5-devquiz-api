const swaggerPathsAnswerCreate = {
  tags: ['answers'],
  summary: 'Cria nova resposta por pergunta',

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
            question_id: { type: 'string', format: 'uuid' },
            correct: { type: 'boolean' },
            points: { type: 'number' },
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
              { $ref: '#/schemas/answer' },
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

export default swaggerPathsAnswerCreate;
