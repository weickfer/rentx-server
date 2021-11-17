import { injectable, inject } from 'tsyringe';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken'

import { AppException } from '../../../../shared/errors/AppException';
import { IUsersRepository } from '../../repositories/IUsersRepository';

type IRequest = {
  email: string
  password: string
}

type IResponse = { user: { name: string; email: string; }; token: string; }

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) { }

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new AppException({
        body: {
          error: 'Email/Password incorrect.'
        },
        statusCode: 401,
      })
    }

    const passwordsMatch = await compare(password, user.password)

    if (!passwordsMatch) {
      throw new AppException({
        body: {
          error: 'Email/Password incorrect.'
        },
        statusCode: 401,
      })
    }

    const token = sign({}, 'eb86a3c82dee3912', {
      subject: user.id,
      expiresIn: '1d'
    })

    return {
      user: {
        name: user.name,
        email: user.email,
      },
      token
    }
  }
}