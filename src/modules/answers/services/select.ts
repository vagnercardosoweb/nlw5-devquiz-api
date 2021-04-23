import {
  AnsweredModel,
  IAnsweredCreationAttributes,
} from '@database/models/AnsweredModel';

import AppError from '@errors/AppError';

class Select {
  public async run({
    user_id,
    answer_id,
    points,
    correct,
  }: Omit<
    IAnsweredCreationAttributes,
    'created_at' | 'id'
  >): Promise<AnsweredModel> {
    const existsInTheSameAnswer = await AnsweredModel.findOne({
      where: { user_id, answer_id },
    });

    if (existsInTheSameAnswer) {
      throw new AppError('You have already answered that same answer.');
    }

    return AnsweredModel.create({
      user_id,
      answer_id,
      points,
      correct,
      created_at: new Date(),
    });
  }
}

const answerSelectService = new Select();
export default answerSelectService;
