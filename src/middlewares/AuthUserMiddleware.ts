import { NextFunction, Request, Response } from 'express';

import { UserModel } from '@database/models/UserModel';

import UnauthorizedError from '@errors/UnauthorizedError';

const authUserMiddleware = async (request: Request, _: Response, next: NextFunction) => {
  if (!request.decodedToken?.sub) {
    throw new UnauthorizedError('You need to be logged in to use this functionality.');
  }

  const rowUser = await UserModel.findOne({
    where: { id: request.decodedToken.sub },
    attributes: { exclude: ['password', 'deleted_at'] },
  });

  if (!rowUser) {
    throw new UnauthorizedError('User not found in the system.');
  }

  request.user = rowUser;

  return next();
};

export default authUserMiddleware;
