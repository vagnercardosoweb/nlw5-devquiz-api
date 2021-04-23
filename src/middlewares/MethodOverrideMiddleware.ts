import { NextFunction, Request, Response } from 'express';

import configCors from '@src/config/cors';

const methodOverrideMiddleware = (
  request: Request,
  _: Response,
  next: NextFunction,
) => {
  let newMethod;

  const allowedMethods = configCors.methods;
  const originalMethod = (<any>request)?.originalMethod || request.method;

  if (!allowedMethods.includes(originalMethod)) {
    return next();
  }

  if (request.body || request.query) {
    ['_method', '_METHOD'].forEach(method => {
      if (method in request.body) {
        newMethod = request.body[method];
        delete request.body[method];
      }

      if (method in request.query) {
        newMethod = request.query[method];
        delete request.query[method];
      }
    });
  }

  if (!newMethod) {
    const header = <any>request.headers['x-http-method-override'];

    if (!header) {
      return next();
    }

    const index = header.indexOf(',');
    newMethod = index !== -1 ? header.substr(0, index).trim() : header.trim();
  }

  if (newMethod) {
    request.method = newMethod.toUpperCase();
    (<any>request).originalMethod = originalMethod;
  }

  return next();
};

export default methodOverrideMiddleware;
