import { NextFunction, Request, Response } from 'express';

import UnauthorizedError from '@src/errors/UnauthorizedError';

import Jwt from '@helpers/Jwt';

const { API_KEY } = process.env;

function checkIfTheRouteIsAllowedInTheRequest(request: Request): boolean {
  let allowedRoute = false;
  const allowedRoutes = ['/docs', '/favicon.ico', '/sw.js'];

  allowedRoutes.forEach(route => {
    if (request.path.startsWith(route)) {
      allowedRoute = true;
    }
  });

  return allowedRoute;
}

export const extractTokenInRequest = (request: Request): string => {
  let token: string;
  const { authorization } = request.headers;

  if (authorization) {
    const [bearer, authToken] = authorization.split(' ');

    if (bearer.trim() !== 'Bearer') {
      throw new UnauthorizedError('Invalid authorization token signature.');
    }

    token = authToken.trim();
  } else {
    token = request.query.apiToken as string;
  }

  if (!token) {
    throw new UnauthorizedError('Token missing in the request.');
  }

  return token;
};

const apiTokenMiddleware = async (
  request: Request,
  _response: Response,
  next: NextFunction,
) => {
  if (
    !('dev' in request.query) &&
    !checkIfTheRouteIsAllowedInTheRequest(request)
  ) {
    const token = extractTokenInRequest(request);

    if (token !== API_KEY) {
      try {
        request.decodedToken = await Jwt.decode<Request['decodedToken']>(token);
      } catch (e) {
        throw new UnauthorizedError(`Access denied: ${e.message}`);
      }
    }
  }

  return next();
};

export default apiTokenMiddleware;
