const swaggerPathsUsersMe = {
  get: {
    tags: ['users'],
    summary: 'Recupera as informações do usuário',
    description: 'API protegida por token do login (JWT)',

    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/user',
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

export default swaggerPathsUsersMe;
