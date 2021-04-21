import AppError from './AppError';

export default class UnauthorizedError extends AppError {
  constructor(message = 'Unauthorized') {
    super(message, 401);

    this.name = 'UnauthorizedError';
    this.code = 'unauthorized';
  }
}
