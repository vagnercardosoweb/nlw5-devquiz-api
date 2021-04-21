import { Request, Response } from 'express';

import { LevelModel } from '@database/models/LevelModel';

class List {
  public async index(_: Request, response: Response): Promise<Response> {
    const levels = await LevelModel.findAll({
      attributes: ['id', 'name'],
      order: [['order', 'asc']],
    });

    return response.json(levels);
  }
}

const levelListController = new List();
export default levelListController;
