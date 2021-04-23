import { UserModel } from '@src/database/models/UserModel';

import AppError from '@errors/AppError';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

interface IResponse {
  user: UserModel;
  token: string;
}

class SignIn {
  public async run({ name, email, password }: IRequest): Promise<IResponse> {
    const rowExistUserByEmail = await UserModel.findOne({
      where: { email },
    });

    if (rowExistUserByEmail) {
      throw new AppError(
        'This email already exists in our system. Please fill out another one.',
      );
    }

    const newUser = await UserModel.create({
      name,
      email,
      password,
    });

    const token = await newUser.generateJwtToken();

    newUser.setDataValue('password', undefined);

    return { user: newUser, token };
  }
}

const authenticationSignInService = new SignIn();
export default authenticationSignInService;
