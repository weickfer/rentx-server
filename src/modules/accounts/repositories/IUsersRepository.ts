import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/user";

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>
  save(user: User): Promise<void>
  findByEmail(email: string): Promise<User>
  findById(id: string): Promise<User>
}