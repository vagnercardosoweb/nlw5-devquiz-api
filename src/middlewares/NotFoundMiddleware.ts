import { NextFunction, Request, Response } from 'express';

import MethodNotAllowedError from '@src/errors/MethodNotAllowedError';
import PageNotFoundError from '@src/errors/PageNotFoundError';

const notFoundMiddleware = (
  request: Request,
  _response: Response,
  next: NextFunction,
) => {
  if (
    request?.originalMethod &&
    request.originalMethod.toUpperCase() !== request.method.toUpperCase()
  ) {
    return next(new MethodNotAllowedError(request));
  }

  return next(new PageNotFoundError(request));
};

export default notFoundMiddleware;
