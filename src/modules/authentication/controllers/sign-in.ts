import { celebrate, Joi, Segments } from 'celebrate';
import { Request, Response } from 'express';

import authenticationSignInService from '@modules/authentication/services/sign-in';

class SignIn {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { user, token } = await authenticationSignInService.run(request.body);

    return response.json({ user, token });
  }

  public validate() {
    return celebrate({
      [Segments.BODY]: {
        email: Joi.string().required().email().messages({
          'string.empty': 'Preencha seu e-mail corretamente.',
          'string.email': 'O e-mail fornecido não tem um formato válido.',
        }),
        password: Joi.string().required().messages({
          'string.empty': 'Preencha sua senha corretamente.',
        }),
      },
    });
  }
}

const authenticationSignInController = new SignIn();
export default authenticationSignInController;
