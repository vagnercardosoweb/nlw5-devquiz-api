import { LevelModel } from '@database/models/LevelModel';
import { QuestionModel } from '@database/models/QuestionModel';

import AppError from '@errors/AppError';
import NotFoundError from '@errors/NotFoundError';

class Delete {
  public async run(id: string): Promise<void> {
    const rowLevel = await LevelModel.findByPk(id, {
      include: QuestionModel,
    });

    if (!rowLevel) {
      throw new NotFoundError('Level not found.');
    }

    if (rowLevel?.questions?.length) {
      throw new AppError('There are questions linked to that level.');
    }

    await rowLevel.destroy();
  }
}

const levelDeleteService = new Delete();
export default levelDeleteService;
