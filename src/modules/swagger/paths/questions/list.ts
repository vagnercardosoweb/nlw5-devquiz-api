const swaggerPathsQuestionList = {
  tags: ['questions'],
  summary: 'Recupera todos',

  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              allOf: [
                { $ref: '#/schemas/question' },
                {
                  type: 'object',
                  properties: {
                    level: {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'string',
                          format: 'uuid',
                        },
                        name: {
                          type: 'string',
                        },
                      },
                    },
                    answer: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          id: {
                            type: 'string',
                            format: 'uuid',
                          },
                          name: {
                            type: 'string',
                          },
                          points: {
                            type: 'number',
                          },
                        },
                      },
                    },
                  },
                },
              ],
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
};

export default swaggerPathsQuestionList;
