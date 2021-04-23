const swaggerPathsLevelDelete = {
  delete: {
    tags: ['levels'],
    summary: 'Deleta level pelo id',

    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'ID do level',
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

export default swaggerPathsLevelDelete;
