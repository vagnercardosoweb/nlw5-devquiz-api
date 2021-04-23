const swaggerPathsAnswerSelect = {
  post: {
    tags: ['answers'],
    summary: 'Seleciona a resposta que o usuário quer responder.',
    description: 'API protegida por token do login (JWT)',

    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'ID da resposta',
        required: true,
      },
    ],

    responses: {
      200: { description: 'OK' },
      400: { $ref: '#/components/errors/bad-request' },
      401: { $ref: '#/components/errors/unauthorized' },
      404: { $ref: '#/components/errors/not-found' },
      500: { $ref: '#/components/errors/server-error' },
    },
  },
};

export default swaggerPathsAnswerSelect;
