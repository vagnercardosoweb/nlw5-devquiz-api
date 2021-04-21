import swaggerPathsAuthenticationSignUp from '@src/modules/swagger/paths/authentication/sign-up';

import swaggerPathsAuthenticationSignIn from '@modules/swagger/paths/authentication/sign-in';
import swaggerPathsUsersAnswered from '@modules/swagger/paths/users/answered';
import swaggerPathsUsersMe from '@modules/swagger/paths/users/me';

const swaggerPaths = {
  '/auth/sign-in': swaggerPathsAuthenticationSignIn,
  '/auth/sign-up': swaggerPathsAuthenticationSignUp,

  '/users/me': swaggerPathsUsersMe,
  '/users/answered': swaggerPathsUsersAnswered,
};

export default swaggerPaths;
