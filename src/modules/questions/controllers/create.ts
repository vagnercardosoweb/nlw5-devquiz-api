import { celebrate, Joi, Segments } from 'celebrate';
import { Request, Response } from 'express';

import questionCreateService from '@modules/questions/services/create';

class Create {
  public async handle(request: Request, response: Response): Promise<Response> {
    const newQuestion = await questionCreateService.run(request.body);

    return response.status(201).json(newQuestion);
  }

  public validate() {
    return celebrate({
      [Segments.BODY]: {
        name: Joi.string().required().label('Name'),
        level_id: Joi.string().uuid().required().label('Level ID'),
        icon_name: Joi.string().label('Icon name'),
      },
    });
  }
}

const questionCreateController = new Create();
export default questionCreateController;
