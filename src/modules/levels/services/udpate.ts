import { Op } from 'sequelize';

import {
  ILevelCreationAttributes,
  LevelModel,
} from '@database/models/LevelModel';

import AppError from '@errors/AppError';
import NotFoundError from '@errors/NotFoundError';

type IRequest = { id: string } & ILevelCreationAttributes;

class Update {
  public async run({ id, name, order }: IRequest): Promise<LevelModel> {
    const rowLevel = await LevelModel.findByPk(id);

    if (!rowLevel) {
      throw new NotFoundError('Level not found');
    }

    const existName = await LevelModel.findOne({
      where: {
        id: { [Op.ne]: rowLevel.id },
        name: { [Op.iLike]: name },
      },
    });

    if (existName) {
      throw new AppError('Name already exists registered.');
    }

    rowLevel.name = name;
    rowLevel.order = order ?? rowLevel.order;

    await rowLevel.save();

    return rowLevel;
  }
}

const levelUpdateService = new Update();
export default levelUpdateService;
