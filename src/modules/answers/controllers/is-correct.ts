import { Request, Response } from 'express';

import { AnswerModel } from '@database/models/AnswerModel';

class IsCorrect {
  public async handle(request: Request, response: Response): Promise<Response> {
    const rowAnswer = await AnswerModel.findOne({
      where: { id: request.params.id, correct: true },
    });

    return response.json({
      correct: !!rowAnswer?.id,
    });
  }
}

const answerIsCorrectController = new IsCorrect();
export default answerIsCorrectController;
