const swaggerPathsUsersAnswered = {
  get: {
    tags: ['users'],
    summary: 'Recupera as perguntas respodidas',
    description: 'API protegida por token do login (JWT)',

    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: {
              properties: {
                percentage: { type: 'number', format: 'float' },
                answered: {
                  type: 'array',
                  items: {
                    properties: {
                      id: { type: 'string', format: 'uuid' },
                      correct: { type: 'boolean' },
                      points: { type: 'number' },
                      answer: {
                        type: 'object',
                        properties: {
                          name: { type: 'string' },
                        },
                      },
                    },
                  },
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

export default swaggerPathsUsersAnswered;
