import { Router } from 'express';

import authenticationSignInController from '@modules/authentication/controllers/sign-in';
import authenticationSignUpController from '@modules/authentication/controllers/sign-up';

const authRoutes = Router({ mergeParams: true });

authRoutes.post(
  '/sign-in',
  authenticationSignInController.validate(),
  authenticationSignInController.handle,
);
authRoutes.post(
  '/sign-up',
  authenticationSignUpController.validate(),
  authenticationSignUpController.handle,
);

export default authRoutes;
