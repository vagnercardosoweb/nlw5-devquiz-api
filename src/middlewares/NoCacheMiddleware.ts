import { NextFunction, Request, Response } from 'express';

const noCacheMiddleware = (
  _request: Request,
  response: Response,
  next: NextFunction,
) => {
  response.header('Expires', '0');
  response.header('Pragma', 'no-cache');
  response.header(
    'Cache-Control',
    'no-store, no-cache, must-revalidate, proxy-revalidate',
  );
  response.header('Surrogate-Control', 'no-store');

  return next();
};

export default noCacheMiddleware;
