import { Router } from 'express';

import userAnsweredController from '@modules/users/controllers/answered';
import userMeController from '@modules/users/controllers/me';

import authUserMiddleware from '@middlewares/AuthUserMiddleware';

const routes = Router({ mergeParams: true });

routes.get('/me', authUserMiddleware, userMeController.index);
routes.get('/answered', authUserMiddleware, userAnsweredController.index);

export default routes;
