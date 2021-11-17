import { Router } from 'express'
import multer from 'multer'

import { uploadConfig } from '../config/upload'

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

import { CreateUserController } from '../modules/accounts/useCases/CreateUser'
import { UpdateUserAvatarController } from '../modules/accounts/useCases/UpdateUserAvatar'

export const usersRouter = Router()

const upload = multer(uploadConfig.upload('./tmp/images'))

const createUserController = new CreateUserController()
const updateUserAvatarController = new UpdateUserAvatarController()

usersRouter.post('/', createUserController.handle)

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('file'),
  updateUserAvatarController.handle
)
