import { Router } from 'express';

import levelCreateController from '@modules/levels/controllers/create';
import levelDeleteController from '@modules/levels/controllers/delete';
import levelListController from '@modules/levels/controllers/list';

const routes = Router({ mergeParams: true });

routes
  .route('/')
  .get(levelListController.index)
  .post(levelCreateController.validate(), levelCreateController.handle);

routes.route('/:id').delete(levelDeleteController.handle);

export default routes;
