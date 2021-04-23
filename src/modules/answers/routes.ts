import { Router } from 'express';

import answerIsCorrectController from '@modules/answers/controllers/is-correct';
import answerSelectController from '@modules/answers/controllers/select';

import authUserMiddleware from '@middlewares/AuthUserMiddleware';

const routes = Router({ mergeParams: true });

routes.post(
  '/:id/is-correct',
  authUserMiddleware,
  answerIsCorrectController.handle,
);

routes.post('/:id/select', authUserMiddleware, answerSelectController.handle);

export default routes;
