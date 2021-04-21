import { Router } from 'express';

import authenticationSignInController from '@modules/authentication/controllers/sign-in';

const authRoutes = Router({ mergeParams: true });

authRoutes.post('/sign-in', authenticationSignInController.validate, authenticationSignInController.handle);

export default authRoutes;
