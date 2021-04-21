import { Router } from 'express';

import userMeController from '@modules/users/controllers/me';

import authUserMiddleware from '@middlewares/AuthUserMiddleware';

const routes = Router({ mergeParams: true });

routes.get('/me', authUserMiddleware, userMeController.index);

export default routes;
