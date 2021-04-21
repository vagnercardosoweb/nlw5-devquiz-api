import { Router } from 'express';

import authRoutes from '@modules/authentication/routes';
import commonRoutes from '@modules/common/routes';
import levelRoutes from '@modules/levels/routes';
import swaggerRoutes from '@modules/swagger';
import usersRoutes from '@modules/users/routes';

const appRoutes = Router({ mergeParams: true });

appRoutes.use('/auth', authRoutes);
appRoutes.use('/users', usersRoutes);
appRoutes.use('/levels', levelRoutes);
appRoutes.use('/docs', swaggerRoutes);
appRoutes.use(commonRoutes);

export default appRoutes;
