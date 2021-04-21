import bcrypt from 'bcryptjs';

export default class Password {
  static hash(value: string, salt: string | number = 12): Promise<string> {
    return bcrypt.hash(value, salt);
  }

  static verify(value: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(value, hashed);
  }
}
