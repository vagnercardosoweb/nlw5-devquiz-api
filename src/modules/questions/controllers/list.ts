import { Request, Response } from 'express';
import { literal } from 'sequelize';

import { AnswerModel } from '@database/models/AnswerModel';
import { LevelModel } from '@database/models/LevelModel';
import { QuestionModel } from '@database/models/QuestionModel';

class List {
  public async index(_: Request, response: Response): Promise<Response> {
    const questions = await QuestionModel.findAll({
      attributes: [
        'id',
        'name',
        'icon_name',
        [
          literal(`(
            SELECT
              COUNT(1)
            FROM
              answered
                INNER JOIN answers ON answered.answer_id = answers.id
            WHERE answers.question_id = "QuestionModel"."id"
          )::INTEGER`),
          'answered',
        ],
      ],
      order: [['created_at', 'asc']],
      include: [
        { model: LevelModel, attributes: ['id', 'name'] },
        { model: AnswerModel, attributes: ['id', 'name', 'points'] },
      ],
    });

    return response.json(questions);
  }
}

const questionListController = new List();
export default questionListController;
