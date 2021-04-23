import { Router } from 'express';

import questionCreateController from '@modules/questions/controllers/create';
import questionDeleteController from '@modules/questions/controllers/delete';
import questionListController from '@modules/questions/controllers/list';
import questionListAnswerController from '@modules/questions/controllers/list-answers';
import questionUpdateController from '@modules/questions/controllers/update';

const routes = Router({ mergeParams: true });

routes
  .route('/')
  .get(questionListController.index)
  .post(questionCreateController.validate(), questionCreateController.handle);

routes.get('/:id/answers', questionListAnswerController.index);

routes
  .route('/:id')
  .put(questionUpdateController.validate(), questionUpdateController.handle)
  .delete(questionDeleteController.handle);

export default routes;
