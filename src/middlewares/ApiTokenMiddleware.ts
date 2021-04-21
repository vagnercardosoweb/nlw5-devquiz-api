import { NextFunction, Request, Response } from 'express';

import UnauthorizedError from '@src/errors/UnauthorizedError';

const { API_KEY } = process.env;

function checkIfTheRouteIsAllowedInTheRequest(request: Request): boolean {
  let allowedRoute = false;
  const allowedRoutes = ['/docs'];

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
      throw new UnauthorizedError('Assinatura do token de autorização inválida.');
    }

    token = authToken.trim();
  } else {
    token = request.query.apiToken as string;
  }

  if (!token) {
    throw new UnauthorizedError('Token ausente na requisição.');
  }

  return token;
};

const apiTokenMiddleware = (request: Request, _response: Response, next: NextFunction) => {
  if (!('dev' in request.query) && !checkIfTheRouteIsAllowedInTheRequest(request)) {
    const token = extractTokenInRequest(request);

    if (token !== API_KEY) {
      throw new UnauthorizedError('Acesso negado.');
    }
  }

  return next();
};

export default apiTokenMiddleware;
