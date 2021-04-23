import { Op } from 'sequelize';

import { ILevelCreationAttributes, LevelModel } from '@database/models/LevelModel';

import AppError from '@errors/AppError';

class Create {
  public async run({ name, order }: ILevelCreationAttributes): Promise<LevelModel> {
    const existName = await LevelModel.findOne({
      where: {
        name: {
          [Op.iLike]: name,
        },
      },
    });

    if (existName) {
      throw new AppError('Name already exists registered.');
    }

    return LevelModel.create({
      name,
      order,
    });
  }
}

const levelCreateService = new Create();
export default levelCreateService;
