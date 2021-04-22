import { Router } from 'express';

import questionListController from '@modules/questions/controllers/list';
import questionListAnswerController from '@modules/questions/controllers/list-answers';

const routes = Router({ mergeParams: true });

routes.get('/', questionListController.index);
routes.get('/:id/answers', questionListAnswerController.index);

export default routes;
