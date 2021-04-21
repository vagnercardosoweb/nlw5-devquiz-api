const configCors = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  headers: [
    'Accept',
    'Origin',
    'Content-Type',
    'Authorization',
    'Cache-Control',
    'X-Requested-With',
    'X-HTTP-Method-Override',
    'X-Refresh-Token',
    'X-Aws-IdToken',
  ],
};

export default configCors;
