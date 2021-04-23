import { celebrate, Joi, Segments } from 'celebrate';
import { Request, Response } from 'express';

import levelUpdateService from '@modules/levels/services/udpate';

class Update {
  public async handle(request: Request, response: Response): Promise<Response> {
    const updatedLevel = await levelUpdateService.run({
      id: request.params.id,
      ...request.body,
    });

    return response.status(200).json(updatedLevel);
  }

  public validate() {
    return celebrate({
      [Segments.BODY]: {
        name: Joi.string().label('Name'),
        order: Joi.number().label('Order'),
      },
    });
  }
}

const levelUpdateController = new Update();
export default levelUpdateController;
