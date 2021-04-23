import { Op } from 'sequelize';

import {
  AnswerModel,
  IAnswerCreationAttributes,
} from '@database/models/AnswerModel';
import { QuestionModel } from '@database/models/QuestionModel';

import AppError from '@errors/AppError';
import NotFoundError from '@errors/NotFoundError';

interface IRequest {
  name: IAnswerCreationAttributes['name'];
  question_id: IAnswerCreationAttributes['question_id'];
  correct: IAnswerCreationAttributes['correct'];
  points: IAnswerCreationAttributes['points'];
}

class Create {
  public async run({
    name,
    correct,
    points,
    question_id,
  }: IRequest): Promise<AnswerModel> {
    const existName = await AnswerModel.findOne({
      where: {
        name: {
          [Op.iLike]: name,
        },
      },
    });

    if (existName) {
      throw new AppError('Name already exists registered.');
    }

    const rowQuestion = await QuestionModel.findByPk(question_id);

    if (!rowQuestion) {
      throw new NotFoundError('Question not found.');
    }

    return AnswerModel.create({
      name,
      correct,
      points,
      question_id,
    });
  }
}

const answerCreateService = new Create();
export default answerCreateService;
