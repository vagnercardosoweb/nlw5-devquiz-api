const swaggerComponentsErrorsServerError = {
  description: 'Erro interno no servidor',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/common/error',
      },
    },
  },
};

export default swaggerComponentsErrorsServerError;
