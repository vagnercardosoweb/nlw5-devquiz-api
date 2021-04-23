import { NextFunction, Request, Response } from 'express';

const corsMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const allowOrigin = '*';
  const allowMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'];
  const allowHeaders = request.headers['access-control-request-headers'];

  response.header('Access-Control-Allow-Origin', allowOrigin);
  response.header('Access-Control-Allow-Methods', allowMethods.join(','));
  response.header('Access-Control-Allow-Headers', allowHeaders);
  response.header('Access-Control-Allow-Credentials', 'true');

  if (request.method.toUpperCase() === 'OPTIONS') {
    return response.sendStatus(200);
  }

  return next();
};

export default corsMiddleware;
