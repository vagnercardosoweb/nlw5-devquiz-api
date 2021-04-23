const swaggerPathsLevelCreate = {
  tags: ['levels'],
  summary: 'Cria novo level',

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
            order: { type: 'number' },
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
              { $ref: '#/schemas/level' },
              {
                type: 'object',
                properties: {
                  order: {
                    type: 'number',
                    required: false,
                  },
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

export default swaggerPathsLevelCreate;
