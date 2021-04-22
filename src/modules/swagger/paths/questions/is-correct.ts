const swaggerPathsQuestionIsCorrect = {
  post: {
    tags: ['questions'],
    summary: 'Verifica se a resposta está correta',

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
              type: 'object',
              properties: {
                correct: {
                  type: 'boolean',
                  example: 'true|false',
                  format: 'uuid',
                },
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

export default swaggerPathsQuestionIsCorrect;
