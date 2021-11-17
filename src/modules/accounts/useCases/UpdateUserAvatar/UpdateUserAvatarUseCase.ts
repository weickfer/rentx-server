import { inject, injectable } from "tsyringe";

import { deleteFile } from '../../../../utils/deleteFile'

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string
  avatarAsset: string
}

@injectable()
export class UpdateUserAvatarUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) { }

  public async execute({ user_id, avatarAsset }: IRequest) {
    const user = await this.usersRepository.findById(user_id)

    if (user.avatar) {
      await deleteFile(`./tmp/images/${user.avatar}`)
    }

    user.avatar = avatarAsset

    await this.usersRepository.save(user)
  }
}
