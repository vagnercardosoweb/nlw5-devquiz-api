import swaggerPathsAuthenticationSignUp from '@src/modules/swagger/paths/authentication/sign-up';

import swaggerPathsAnswers from '@modules/swagger/paths/answers';
import swaggerPathsAnswersById from '@modules/swagger/paths/answers/byid';
import swaggerPathsAnswerIsCorrect from '@modules/swagger/paths/answers/is-correct';
import swaggerPathsAnswerSelect from '@modules/swagger/paths/answers/select';
import swaggerPathsAuthenticationSignIn from '@modules/swagger/paths/authentication/sign-in';
import swaggerPathsLevels from '@modules/swagger/paths/levels';
import swaggerPathsLevelsById from '@modules/swagger/paths/levels/byid';
import swaggerPathsQuestions from '@modules/swagger/paths/questions';
import swaggerPathsQuestionsById from '@modules/swagger/paths/questions/byid';
import swaggerPathsQuestionListAnswer from '@modules/swagger/paths/questions/list-answers';
import swaggerPathsUsersAnswered from '@modules/swagger/paths/users/answered';
import swaggerPathsUsersMe from '@modules/swagger/paths/users/me';

const swaggerPaths = {
  '/auth/sign-in': swaggerPathsAuthenticationSignIn,
  '/auth/sign-up': swaggerPathsAuthenticationSignUp,

  '/users/me': swaggerPathsUsersMe,
  '/users/answered': swaggerPathsUsersAnswered,

  '/levels': swaggerPathsLevels,
  '/levels/{id}': swaggerPathsLevelsById,

  '/questions': swaggerPathsQuestions,
  '/questions/{id}': swaggerPathsQuestionsById,
  '/questions/{id}/answers': swaggerPathsQuestionListAnswer,

  '/answers': swaggerPathsAnswers,
  '/answers/{id}': swaggerPathsAnswersById,
  '/answers/{id}/is-correct': swaggerPathsAnswerIsCorrect,
  '/answers/{id}/select': swaggerPathsAnswerSelect,
};

export default swaggerPaths;
