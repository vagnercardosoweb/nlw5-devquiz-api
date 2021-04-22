import { Router } from 'express';

import questionListController from '@modules/questions/controllers/list';

const routes = Router({ mergeParams: true });

routes.get('/', questionListController.index);

export default routes;
