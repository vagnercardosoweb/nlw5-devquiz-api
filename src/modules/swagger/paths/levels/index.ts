import swaggerPathsLevelCreate from '@modules/swagger/paths/levels/create';
import swaggerPathsLevelFind from '@modules/swagger/paths/levels/find';

const swaggerPathsLevels = {
  get: swaggerPathsLevelFind,
  post: swaggerPathsLevelCreate,
};

export default swaggerPathsLevels;
