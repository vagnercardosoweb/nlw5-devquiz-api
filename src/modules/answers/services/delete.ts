import { AnswerModel } from '@database/models/AnswerModel';

import NotFoundError from '@errors/NotFoundError';

class Delete {
  public async run(id: string): Promise<void> {
    const rowAnswer = await AnswerModel.findByPk(id);

    if (!rowAnswer) {
      throw new NotFoundError('Level not found.');
    }

    await rowAnswer.destroy();
  }
}

const answerDeleteService = new Delete();
export default answerDeleteService;
