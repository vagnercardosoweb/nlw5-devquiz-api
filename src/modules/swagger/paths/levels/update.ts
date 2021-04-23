const swaggerPathsLevelUpdate = {
  tags: ['levels'],
  summary: 'Atualiza level por id',

  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'ID do level',
      required: true,
    },
  ],

  requestBody: {
    require: true,
    description: 'description',
    content: {
      'application/json': {
        schema: {
          $ref: '#/schemas/levels/create',
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
            allOf: [
              { $ref: '#/schemas/levels/find' },
              { $ref: '#/schemas/common/dates' },
              {
                type: 'object',
                properties: {
                  order: { type: 'number', required: false },
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

export default swaggerPathsLevelUpdate;
