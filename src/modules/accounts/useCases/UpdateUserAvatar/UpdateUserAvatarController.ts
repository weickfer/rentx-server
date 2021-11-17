import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateUserAvatarUseCase } from './UpdateUserAvatarUseCase';

export class UpdateUserAvatarController {
  public async handle(req: Request, res: Response) {
    const { user, file } = req

    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase)

    await updateUserAvatarUseCase.execute({
      user_id: user.id,
      avatarAsset: file.filename
    })

    return res.status(204).send()
  }
}