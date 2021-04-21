import { Router } from 'express';

import levelListController from '@modules/levels/controllers/list';

const routes = Router({ mergeParams: true });

routes.get('/', levelListController.index);

export default routes;
