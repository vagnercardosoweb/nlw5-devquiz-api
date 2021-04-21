import { UserModel } from '@src/database/models/UserModel';
import NotFoundError from '@src/errors/NotFoundError';
import UnauthorizedError from '@src/errors/UnauthorizedError';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: UserModel;
  token: string;
}

class SignIn {
  public async run({ email, password }: IRequest): Promise<IResponse> {
    const user = await UserModel.findOne({ where: { email } });

    if (!user) {
      throw new NotFoundError('User not found.');
    }

    if (!(await user.verifyPassword(password))) {
      throw new UnauthorizedError('Username or password is invalid.');
    }

    const token = await user.generateJwtToken();
    user.setDataValue('password', undefined);

    return { user, token };
  }
}

const authenticationSignInService = new SignIn();
export default authenticationSignInService;
