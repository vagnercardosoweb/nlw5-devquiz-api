import { Request } from 'express';

import AppError from './AppError';

export default class MethodNotAllowedError extends AppError {
  constructor(request: Request) {
    const { path, method } = request;

    super(`Method not allowed in request${path ? `: [${method.toUpperCase()}] ${path}` : '.'}`, 405);

    this.name = 'MethodNotAllowedError';
    this.code = 'method_not_allowed';
  }
}
