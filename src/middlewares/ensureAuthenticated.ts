import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";
import { AppException } from "../shared/errors/AppException";

type IPayload = {
  sub: string
}

export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authorization = req.headers.authorization

  if (!authorization) {
    throw new AppException({
      body: {
        error: 'Token missing!'
      },
      statusCode: 401
    })
  }

  const [, token] = authorization.split(' ')

  try {
    const decoded = verify(token, 'eb86a3c82dee3912') as IPayload

    const usersRepository = new UsersRepository()

    const user = await usersRepository.findById(decoded.sub)

    if (!user) {
      throw new AppException({
        body: {
          error: 'User not exists!',
        },
        statusCode: 404
      })
    }

    req.user = {
      id: user.id
    }

    return next()
  } catch (error) {
    throw new AppException({
      body: {
        error: 'Invalid token!'
      },
      statusCode: 401
    })
  }
}
