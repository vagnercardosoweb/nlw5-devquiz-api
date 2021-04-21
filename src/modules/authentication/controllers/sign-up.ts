import { celebrate, Joi, Segments } from 'celebrate';
import { Request, Response } from 'express';

import authenticationSignUpService from '@modules/authentication/services/sign-up';

class SignUp {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { user, token } = await authenticationSignUpService.run(request.body);

    return response.json({ user, token });
  }

  public validate() {
    return celebrate({
      [Segments.BODY]: {
        name: Joi.string().required().messages({
          'string.empty': 'Preencha o nome corretamente.',
        }),
        email: Joi.string().required().email().messages({
          'string.empty': 'Preencha seu e-mail corretamente.',
          'string.email': 'O e-mail fornecido não tem um formato válido.',
        }),
        password: Joi.string().required().messages({
          'string.empty': 'Preencha sua senha corretamente.',
        }),
        password_confirm: Joi.any().equal(Joi.ref('password')).messages({
          'any.only': 'As senhas devem ser iguais.',
        }),
      },
    });
  }
}

const authenticationSignUpController = new SignUp();
export default authenticationSignUpController;
