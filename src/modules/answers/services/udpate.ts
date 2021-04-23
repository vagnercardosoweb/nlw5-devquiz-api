import { Op } from 'sequelize';

import {
  AnswerModel,
  IAnswerAttributes,
  IAnswerCreationAttributes,
} from '@database/models/AnswerModel';

import AppError from '@errors/AppError';
import NotFoundError from '@errors/NotFoundError';

type IRequest = { id: string } & IAnswerCreationAttributes;

class Update {
  public async run({ id, ...request }: IRequest): Promise<AnswerModel> {
    const row = await AnswerModel.findByPk(id);

    if (!row) {
      throw new NotFoundError('Answer not found');
    }

    if (request.name) {
      const existName = await AnswerModel.findOne({
        where: {
          id: { [Op.ne]: row.id },
          name: { [Op.iLike]: request.name },
        },
      });

      if (existName) {
        throw new AppError('Name already exists registered.');
      }
    }

    Object.entries(request).forEach(([column, value]) => {
      if (value) {
        row.setDataValue(column as keyof IAnswerAttributes, value);
      }
    });

    await row.save();

    return row;
  }
}

const answerUpdateService = new Update();
export default answerUpdateService;
