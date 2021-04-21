import AppError from './AppError';

export default class MissingParamError extends AppError {
  constructor(name: string) {
    super(`Missing parameters on request: ${name}`);

    this.name = 'MissingParamError';
    this.code = 'missing_param';
  }
}
