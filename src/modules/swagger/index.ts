import { Router } from 'express';
import swagger from 'swagger-ui-express';

import noCacheMiddleware from '@src/middlewares/NoCacheMiddleware';

import swaggerComponents from './components';
import swaggerInfo from './info';
import swaggerPaths from './paths';
import swaggerSchemas from './schemas';
import swaggerServers from './servers';
import swaggerTags from './tags';

const swaggerRoutes = Router();

swaggerRoutes.use(
  noCacheMiddleware,
  swagger.serve,
  swagger.setup({
    openapi: '3.0.3',
    info: swaggerInfo,
    security: [{ bearerAuth: [] }],
    tags: swaggerTags,
    paths: swaggerPaths,
    components: swaggerComponents,
    schemas: swaggerSchemas,
    servers: swaggerServers,
    externalDocs: {},
  }),
);

export default swaggerRoutes;
