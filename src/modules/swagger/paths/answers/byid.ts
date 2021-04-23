import swaggerPathsAnswerDelete from '@modules/swagger/paths/answers/delete';
import swaggerPathsAnswerUpdate from '@modules/swagger/paths/answers/update';

const swaggerPathsAnswersById = {
  put: swaggerPathsAnswerUpdate,
  delete: swaggerPathsAnswerDelete,
};

export default swaggerPathsAnswersById;
