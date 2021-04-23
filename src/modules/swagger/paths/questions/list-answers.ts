const swaggerPathsQuestionListAnswer = {
  get: {
    tags: ['questions'],
    summary: 'Recupera as resposta por pergunta',

    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'ID da pergunta',
        required: true,
      },
    ],

    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                $ref: '#/schemas/answers/find',
              },
            },
          },
        },
      },
      400: { $ref: '#/components/errors/bad-request' },
      401: { $ref: '#/components/errors/unauthorized' },
      404: { $ref: '#/components/errors/not-found' },
      500: { $ref: '#/components/errors/server-error' },
    },
  },
};

export default swaggerPathsQuestionListAnswer;
