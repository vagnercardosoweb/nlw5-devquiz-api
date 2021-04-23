import { AnswerModel } from '@database/models/AnswerModel';
import { QuestionModel } from '@database/models/QuestionModel';

import AppError from '@errors/AppError';
import NotFoundError from '@errors/NotFoundError';

class Delete {
  public async run(id: string): Promise<void> {
    const rowQuestion = await QuestionModel.findByPk(id, {
      include: AnswerModel,
    });

    if (!rowQuestion) {
      throw new NotFoundError('Level not found.');
    }

    if (rowQuestion?.answers?.length) {
      throw new AppError('This question has linked answers.');
    }

    await rowQuestion.destroy();
  }
}

const questionDeleteService = new Delete();
export default questionDeleteService;
