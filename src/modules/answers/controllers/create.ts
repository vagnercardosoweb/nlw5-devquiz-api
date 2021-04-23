import { celebrate, Joi, Segments } from 'celebrate';
import { Request, Response } from 'express';

import answerCreateService from '@modules/answers/services/create';

class Create {
  public async handle(request: Request, response: Response): Promise<Response> {
    const rowAnswer = await answerCreateService.run(request.body);

    return response.status(201).json(rowAnswer);
  }

  public validate() {
    return celebrate({
      [Segments.BODY]: {
        name: Joi.string().required().label('Name'),
        correct: Joi.boolean().required().label('Is Correct'),
        points: Joi.number().min(0).required().label('Points'),
        question_id: Joi.string().uuid().label('Question ID'),
      },
    });
  }
}

const answerCreateController = new Create();
export default answerCreateController;
