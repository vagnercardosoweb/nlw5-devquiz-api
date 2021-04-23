const swaggerPathsAnswerDelete = {
  delete: {
    tags: ['answers'],
    summary: 'Deleta resposta pelo id',

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

export default swaggerPathsAnswerDelete;
