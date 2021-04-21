const swaggerPathsAuthenticationSignIn = {
  post: {
    tags: ['auth'],
    summary: 'API para registrar novo usuário.',
    description: 'Essa rota pode ser chamada por **qualquer usuário**',

    requestBody: {
      require: true,
      description: 'description',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            required: ['*'],
            properties: {
              name: { type: 'string', example: 'User Name' },
              email: { type: 'string', format: 'email' },
              password: { type: 'string' },
              password_confirm: { type: 'string' },
            },
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
              type: 'object',
              properties: {
                user: { $ref: '#/schemas/user' },
                token: { type: 'string' },
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

export default swaggerPathsAuthenticationSignIn;
