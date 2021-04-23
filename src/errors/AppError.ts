export default class AppError extends Error {
  constructor(
    public message: string,
    public statusCode = 400,
    public code = 'default',
  ) {
    super(message);

    this.code = code;
    this.name = 'AppError';
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}
