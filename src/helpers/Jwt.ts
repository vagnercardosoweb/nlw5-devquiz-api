import jwt from 'jsonwebtoken';

import configApp from '@src/config/app';

class Jwt {
  public encode(payload: any, secretKey?: jwt.Secret, options?: jwt.SignOptions): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        resolve(
          jwt.sign(payload, Jwt.getSecretKey(secretKey), {
            expiresIn: '7d',
            ...options,
          }),
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  public decode<T extends any>(token: string, secretKey?: jwt.Secret, options?: jwt.VerifyOptions): Promise<T> {
    return new Promise((resolve, reject) => {
      try {
        resolve(jwt.verify(token, Jwt.getSecretKey(secretKey), options) as T);
      } catch (err) {
        reject(err);
      }
    });
  }

  private static getSecretKey(secretKey?: jwt.Secret): jwt.Secret {
    return secretKey ?? configApp.appKey;
  }
}

export default new Jwt();
