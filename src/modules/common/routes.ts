import { Router } from 'express';

import commonIndexController from '@src/modules/common/controllers/IndexController';

const commonRoutes = Router();

commonRoutes.get('/', commonIndexController.index);
commonRoutes.get('/favicon.ico', (_, response) => response.sendStatus(200));
commonRoutes.get('/sw.js', (_, response) => response.sendStatus(200));

export default commonRoutes;
