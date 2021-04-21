import { Request, Response } from 'express';

import { AnsweredModel } from '@database/models/AnsweredModel';
import { AnswerModel } from '@database/models/AnswerModel';

class Answered {
  public async index(request: Request, response: Response): Promise<Response> {
    const rowsAnswered = await AnsweredModel.findAll({
      where: { user_id: request.user.id },
      attributes: { exclude: ['user_id', 'answer_id'] },
      include: [{ model: AnswerModel, attributes: ['name'] }],
      order: [['created_at', 'desc']],
    });

    const totalCorrect = rowsAnswered.reduce((previousValue, currentValue) => {
      if (currentValue.correct) {
        previousValue += 1;
      }

      return previousValue;
    }, 0);

    const totalCorrectAnsweredInDb = await AnswerModel.count({
      where: { correct: true },
    });

    const percentage = (totalCorrect / totalCorrectAnsweredInDb) * 100;

    return response.json({
      percentage,
      answered: rowsAnswered,
    });
  }
}

const userAnsweredController = new Answered();
export default userAnsweredController;
