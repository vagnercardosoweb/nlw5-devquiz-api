import { Router } from 'express';

import questionCreateController from '@modules/questions/controllers/create';
import questionDeleteController from '@modules/questions/controllers/delete';
import questionListController from '@modules/questions/controllers/list';
import questionListAnswerController from '@modules/questions/controllers/list-answers';

const routes = Router({ mergeParams: true });

routes
  .route('/')
  .get(questionListController.index)
  .post(questionCreateController.validate(), questionCreateController.handle);

routes.get('/:id/answers', questionListAnswerController.index);

routes.delete('/:id', questionDeleteController.handle);

export default routes;
