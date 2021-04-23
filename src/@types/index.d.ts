declare namespace Express {
  export interface Response {
    sentry?: any;
  }

  export interface Request {
    user: Omit<
      import('../database/models/UserModel').UserModel,
      'password' | 'deleted_at' | 'deletedAt'
    >;
    decodedToken?: {
      sub: string;
      iat: number;
      exp: number;
    };
    originalMethod?: string;
  }
}
