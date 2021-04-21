const swaggerComponentsErrorsForbidden = {
  description: 'Acesso negado.',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/common/error',
      },
    },
  },
};

export default swaggerComponentsErrorsForbidden;
