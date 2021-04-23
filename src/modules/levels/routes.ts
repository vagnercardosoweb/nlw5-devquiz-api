import { Router } from 'express';

import levelCreateController from '@modules/levels/controllers/create';
import levelListController from '@modules/levels/controllers/list';

const routes = Router({ mergeParams: true });

routes
  .route('/')
  .get(levelListController.index)
  .post(levelCreateController.validate(), levelCreateController.handle);

export default routes;
