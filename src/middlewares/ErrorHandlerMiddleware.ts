import { CelebrateError, isCelebrateError } from 'celebrate';
import { NextFunction, Request, Response } from 'express';

import Logger from '@src/helpers/Logger';

interface IError extends Error {
  code?: string;
  statusCode?: number;
}

const errorHandlerMiddleware = (error: IError, _request: Request, response: Response, _next: NextFunction) => {
  const isJoi = isCelebrateError(error);

  let statusCode = isJoi ? 400 : 500;
  const validations: any[] = [];

  if (error?.statusCode) {
    statusCode = error.statusCode;
  }

  if (error instanceof CelebrateError) {
    error.details.forEach(value => {
      error.message = value.message;
      validations.push(value.details);
    });
  }

  if (process.env.NODE_ENV === 'development') {
    Logger.error(error.message, error);
  }

  return response.status(statusCode).json({
    name: isJoi ? 'CelebrateError' : error.name,
    statusCode,
    sentry: (<any>response).sentry,
    message: error.message,
    stack: error.stack?.split('\n'),
    code: error?.code ?? 'default',
    validations,
  });
};

export default errorHandlerMiddleware;
