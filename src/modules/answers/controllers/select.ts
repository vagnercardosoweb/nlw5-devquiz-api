import { Request, Response } from 'express';

import answerSelectService from '@modules/answers/services/select';

import { AnswerModel } from '@database/models/AnswerModel';

import NotFoundError from '@errors/NotFoundError';

class Select {
  public async handle(request: Request, response: Response): Promise<Response> {
    const rowAnswer = await AnswerModel.findOne({
      where: { id: request.params.id },
    });

    if (!rowAnswer) {
      throw new NotFoundError('Answer not found.');
    }

    await answerSelectService.run({
      user_id: request.user.id,
      answer_id: rowAnswer.id,
      correct: rowAnswer.correct,
      points: rowAnswer.points,
    });

    return response.json({
      correct: !!rowAnswer?.id,
    });
  }
}

const answerSelectController = new Select();
export default answerSelectController;
