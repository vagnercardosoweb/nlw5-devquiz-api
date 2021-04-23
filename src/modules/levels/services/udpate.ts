import { Op } from 'sequelize';

import {
  ILevelAttributes,
  ILevelCreationAttributes,
  LevelModel,
} from '@database/models/LevelModel';

import AppError from '@errors/AppError';
import NotFoundError from '@errors/NotFoundError';

type IRequest = { id: string } & ILevelCreationAttributes;

class Update {
  public async run({ id, ...request }: IRequest): Promise<LevelModel> {
    const rowLevel = await LevelModel.findByPk(id);

    if (!rowLevel) {
      throw new NotFoundError('Level not found');
    }

    if (request.name) {
      const existName = await LevelModel.findOne({
        where: {
          id: { [Op.ne]: rowLevel.id },
          name: { [Op.iLike]: request.name },
        },
      });

      if (existName) {
        throw new AppError('Name already exists registered.');
      }
    }

    Object.entries(request).forEach(([column, value]) => {
      if (value) {
        rowLevel.setDataValue(column as keyof ILevelAttributes, value);
      }
    });

    await rowLevel.save();

    return rowLevel;
  }
}

const levelUpdateService = new Update();
export default levelUpdateService;
