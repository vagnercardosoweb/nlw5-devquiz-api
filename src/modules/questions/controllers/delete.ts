import { Request, Response } from 'express';

import questionDeleteService from '@modules/questions/services/delete';

class Delete {
  public async handle(request: Request, response: Response): Promise<Response> {
    await questionDeleteService.run(request.params.id);

    return response.sendStatus(200);
  }
}

const questionDeleteController = new Delete();
export default questionDeleteController;
