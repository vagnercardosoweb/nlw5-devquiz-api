import { LevelModel } from '@database/models/LevelModel';
import {
  IQuestionCreationAttributes,
  QuestionModel,
} from '@database/models/QuestionModel';

import NotFoundError from '@errors/NotFoundError';

interface IRequest {
  name: IQuestionCreationAttributes['name'];
  level_id: IQuestionCreationAttributes['level_id'];
  icon_name: IQuestionCreationAttributes['icon_name'];
}

class Create {
  public async run({
    name,
    level_id,
    icon_name,
  }: IRequest): Promise<QuestionModel> {
    const rowLevel = await LevelModel.findByPk(level_id);

    if (!rowLevel) {
      throw new NotFoundError('Level not found.');
    }

    return QuestionModel.create({
      name,
      level_id,
      icon_name,
    });
  }
}

const questionCreateService = new Create();
export default questionCreateService;
