import { Request, Response } from 'express';

import { AnswerModel } from '@database/models/AnswerModel';

class ListAnswers {
  public async index(request: Request, response: Response): Promise<Response> {
    const answers = await AnswerModel.findAll({
      attributes: ['id', 'name', 'points'],
      where: { question_id: request.params.id },
      order: [['created_at', 'desc']],
    });

    return response.json(answers);
  }
}

const questionListAnswerController = new ListAnswers();
export default questionListAnswerController;
