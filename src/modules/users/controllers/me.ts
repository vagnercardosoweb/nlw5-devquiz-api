import { Request, Response } from 'express';

class Me {
  public async index(request: Request, response: Response): Promise<Response> {
    return response.json(request.user);
  }
}

const userMeController = new Me();
export default userMeController;
