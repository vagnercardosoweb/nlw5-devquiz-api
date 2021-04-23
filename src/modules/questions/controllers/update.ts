import { celebrate, Joi, Segments } from 'celebrate';
import { Request, Response } from 'express';

import questionUpdateService from '@modules/questions/services/udpate';

class Update {
  public async handle(request: Request, response: Response): Promise<Response> {
    const updatedQuestion = await questionUpdateService.run({
      id: request.params.id,
      ...request.body,
    });

    return response.status(200).json(updatedQuestion);
  }

  public validate() {
    return celebrate({
      [Segments.BODY]: {
        name: Joi.string().label('Name'),
        level_id: Joi.string().uuid().label('Level ID'),
        icon_name: Joi.string().label('Icon name'),
      },
    });
  }
}

const questionUpdateController = new Update();
export default questionUpdateController;
