declare namespace Express {
  export interface Response {
    sentry?: any;
  }

  export interface Request {
    originalMethod?: string;
  }
}
