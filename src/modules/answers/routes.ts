import { Router } from 'express';

import answerIsCorrectController from '@modules/answers/controllers/is-correct';

import authUserMiddleware from '@middlewares/AuthUserMiddleware';

const routes = Router({ mergeParams: true });

routes.post('/:id/is-correct', authUserMiddleware, answerIsCorrectController.handle);

export default routes;
