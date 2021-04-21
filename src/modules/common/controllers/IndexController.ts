import { Request, Response } from 'express';

class IndexController {
  public async index(_request: Request, response: Response): Promise<Response> {
    return response.sendStatus(200);
  }
}

const commonIndexController = new IndexController();
export default commonIndexController;
