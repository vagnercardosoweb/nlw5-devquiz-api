import { Request, Response } from 'express';

import answerDeleteService from '@modules/answers/services/delete';

class Delete {
  public async handle(request: Request, response: Response): Promise<Response> {
    await answerDeleteService.run(request.params.id);

    return response.sendStatus(200);
  }
}

const answerDeleteController = new Delete();
export default answerDeleteController;
