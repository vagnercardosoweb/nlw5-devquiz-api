import {
  IQuestionAttributes,
  IQuestionCreationAttributes,
  QuestionModel,
} from '@database/models/QuestionModel';

import NotFoundError from '@errors/NotFoundError';

type IRequest = { id: string } & IQuestionCreationAttributes;

class Update {
  public async run({ id, ...request }: IRequest): Promise<QuestionModel> {
    const row = await QuestionModel.findByPk(id);

    if (!row) {
      throw new NotFoundError('Question not found');
    }

    Object.entries(request).forEach(([column, value]) => {
      if (value) {
        row.setDataValue(column as keyof IQuestionAttributes, value);
      }
    });

    await row.save();

    return row;
  }
}

const questionUpdateService = new Update();
export default questionUpdateService;
