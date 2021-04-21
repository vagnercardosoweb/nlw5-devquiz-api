import AppError from './AppError';

export default class InvalidParamError extends AppError {
  constructor(name: string) {
    super(`Invalid parameters on request: ${name}`);

    this.name = 'InvalidParamError';
    this.code = 'invalid_param';
  }
}
