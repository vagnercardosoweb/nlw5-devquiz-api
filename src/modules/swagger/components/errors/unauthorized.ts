const swaggerComponentsErrorsUnauthorized = {
  description: 'Credenciais inválidas.',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/common/error',
      },
    },
  },
};

export default swaggerComponentsErrorsUnauthorized;
