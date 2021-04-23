import swaggerPathsLevelDelete from '@modules/swagger/paths/levels/delete';
import swaggerPathsLevelUpdate from '@modules/swagger/paths/levels/update';

const swaggerPathsLevelsById = {
  delete: swaggerPathsLevelDelete,
  put: swaggerPathsLevelUpdate,
};

export default swaggerPathsLevelsById;
