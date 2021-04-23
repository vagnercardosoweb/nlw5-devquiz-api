import swaggerPathsQuestionDelete from '@modules/swagger/paths/questions/delete';
import swaggerPathsQuestionUpdate from '@modules/swagger/paths/questions/update';

const swaggerPathsQuestionsById = {
  put: swaggerPathsQuestionUpdate,
  delete: swaggerPathsQuestionDelete,
};

export default swaggerPathsQuestionsById;
