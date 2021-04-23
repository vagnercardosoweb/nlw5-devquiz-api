import swaggerPathsAuthenticationSignUp from '@src/modules/swagger/paths/authentication/sign-up';

import swaggerPathsAnswers from '@modules/swagger/paths/answers';
import swaggerPathsAnswerDelete from '@modules/swagger/paths/answers/delete';
import swaggerPathsAnswerIsCorrect from '@modules/swagger/paths/answers/is-correct';
import swaggerPathsAnswerSelect from '@modules/swagger/paths/answers/select';
import swaggerPathsAuthenticationSignIn from '@modules/swagger/paths/authentication/sign-in';
import swaggerPathsLevels from '@modules/swagger/paths/levels';
import swaggerPathsLevelDelete from '@modules/swagger/paths/levels/delete';
import swaggerPathsQuestions from '@modules/swagger/paths/questions';
import swaggerPathsQuestionDelete from '@modules/swagger/paths/questions/delete';
import swaggerPathsQuestionListAnswer from '@modules/swagger/paths/questions/list-answers';
import swaggerPathsUsersAnswered from '@modules/swagger/paths/users/answered';
import swaggerPathsUsersMe from '@modules/swagger/paths/users/me';

const swaggerPaths = {
  '/auth/sign-in': swaggerPathsAuthenticationSignIn,
  '/auth/sign-up': swaggerPathsAuthenticationSignUp,

  '/users/me': swaggerPathsUsersMe,
  '/users/answered': swaggerPathsUsersAnswered,

  '/levels': swaggerPathsLevels,
  '/levels/{id}': swaggerPathsLevelDelete,

  '/questions': swaggerPathsQuestions,
  '/questions/{id}': swaggerPathsQuestionDelete,
  '/questions/{id}/answers': swaggerPathsQuestionListAnswer,

  '/answers': swaggerPathsAnswers,
  '/answers/{id}': swaggerPathsAnswerDelete,
  '/answers/{id}/is-correct': swaggerPathsAnswerIsCorrect,
  '/answers/{id}/select': swaggerPathsAnswerSelect,
};

export default swaggerPaths;
