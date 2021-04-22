import { Router } from 'express';

import answerIsCorrectController from '@modules/answers/controllers/is-correct';

const routes = Router({ mergeParams: true });

routes.post('/:id/is-correct', answerIsCorrectController.handle);

export default routes;
