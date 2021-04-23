import { celebrate, Joi, Segments } from 'celebrate';
import { Request, Response } from 'express';

import answerUpdateService from '@modules/answers/services/udpate';

class Update {
  public async handle(request: Request, response: Response): Promise<Response> {
    const updatedAnswer = await answerUpdateService.run({
      id: request.params.id,
      ...request.body,
    });

    return response.status(200).json(updatedAnswer);
  }

  public validate() {
    return celebrate({
      [Segments.BODY]: {
        name: Joi.string().label('Name'),
        correct: Joi.boolean().label('Is Correct'),
        points: Joi.number().min(0).label('Points'),
        question_id: Joi.string().uuid().label('Question ID'),
      },
    });
  }
}

const answerUpdateController = new Update();
export default answerUpdateController;
