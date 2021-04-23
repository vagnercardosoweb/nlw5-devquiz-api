import { celebrate, Joi, Segments } from 'celebrate';
import { Request, Response } from 'express';

import levelCreateService from '@modules/levels/services/create';

class Create {
  public async handle(request: Request, response: Response): Promise<Response> {
    const newLevel = await levelCreateService.run(request.body);

    return response.status(201).json(newLevel);
  }

  public validate() {
    return celebrate({
      [Segments.BODY]: {
        name: Joi.string().required(),
        order: Joi.number().default(null).required(),
      },
    });
  }
}

const levelCreateController = new Create();
export default levelCreateController;
