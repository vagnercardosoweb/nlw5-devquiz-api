import swaggerComponentsErrorsBadRequest from '@src/modules/swagger/components/errors/badRequest';
import swaggerComponentsErrorsForbidden from '@src/modules/swagger/components/errors/forbidden';
import swaggerComponentsErrorsNotFound from '@src/modules/swagger/components/errors/notFound';
import swaggerComponentsErrorsServerError from '@src/modules/swagger/components/errors/serverError';
import swaggerComponentsErrorsUnauthorized from '@src/modules/swagger/components/errors/unauthorized';

const swaggerComponents = {
  errors: {
    'not-found': swaggerComponentsErrorsNotFound,
    'bad-request': swaggerComponentsErrorsBadRequest,
    'server-error': swaggerComponentsErrorsServerError,
    forbidden: swaggerComponentsErrorsForbidden,
    unauthorized: swaggerComponentsErrorsUnauthorized,
  },

  securitySchemes: {
    bearerAuth: {
      in: 'header',
      type: 'http',
      scheme: 'bearer',
      description: 'Token de autorização.',
    },
  },
};

export default swaggerComponents;
