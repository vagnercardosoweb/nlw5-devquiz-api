import swaggerPathsQuestionCreate from '@modules/swagger/paths/questions/create';
import swaggerPathsQuestionsFind from '@modules/swagger/paths/questions/list';

const swaggerPathsQuestions = {
  get: swaggerPathsQuestionsFind,
  post: swaggerPathsQuestionCreate,
};

export default swaggerPathsQuestions;
