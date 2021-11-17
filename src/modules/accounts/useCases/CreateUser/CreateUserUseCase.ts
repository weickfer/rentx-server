import { inject, injectable } from "tsyringe";
import { hash } from 'bcrypt'

import { AppException } from "../../../../shared/errors/AppException";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string
  email: string
  driver_license: string
  password: string
}

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) { }

  public async execute({
    name,
    email,
    driver_license,
    password,
  }: IRequest) {
    const userAlreadyExists = await this.usersRepository.findByEmail(email)

    if (userAlreadyExists) {
      throw new AppException({
        body: {
          error: 'Already exists user with this email.',
        },
        statusCode: 409,
      })
    }

    const hashedPassword = await hash(password, 8)

    await this.usersRepository.create({
      name,
      driver_license,
      email,
      password: hashedPassword,
    })
  }
}