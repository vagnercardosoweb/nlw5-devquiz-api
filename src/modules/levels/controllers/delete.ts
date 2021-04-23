import { Request, Response } from 'express';

import levelDeleteService from '@modules/levels/services/delete';

class Delete {
  public async handle(request: Request, response: Response): Promise<Response> {
    await levelDeleteService.run(request.params.id);

    return response.sendStatus(200);
  }
}

const levelDeleteController = new Delete();
export default levelDeleteController;
