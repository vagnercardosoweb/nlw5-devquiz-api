import { Router } from 'express';

import authRoutes from '@src/modules/authentication/routes';
import commonRoutes from '@src/modules/common/routes';
import swaggerRoutes from '@src/modules/swagger';
import usersRoutes from '@src/modules/users/routes';

const appRoutes = Router({ mergeParams: true });

appRoutes.use('/auth', authRoutes);
appRoutes.use('/users', usersRoutes);
appRoutes.use('/docs', swaggerRoutes);
appRoutes.use(commonRoutes);

export default appRoutes;
