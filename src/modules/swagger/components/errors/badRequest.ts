const swaggerComponentsErrorsBadRequest = {
  description: 'Requisição inválida.',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/common/error',
      },
    },
  },
};

export default swaggerComponentsErrorsBadRequest;
