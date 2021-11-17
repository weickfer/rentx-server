import { getRepository, Repository } from 'typeorm';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../entities/user';
import { IUsersRepository } from '../IUsersRepository';

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User)
  }

  public async create({
    name, email, driver_license, password
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      // username,
      email,
      driver_license,
      password
    })

    await this.repository.save(user)
  }

  public async save(user: User): Promise<void> {
    await this.repository.save(user)
  }

  public async findByEmail(email: string): Promise<User> {
    return await this.repository.findOne({
      where: { email }
    })
  }

  public async findById(id: string): Promise<User> {
    return await this.repository.findOne({
      where: { id }
    })
  }
}