import { Request, Response } from "express";
import { container } from 'tsyringe'

import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

export class ListSpecificationsController {
  public async handle(req: Request, res: Response) {
    const listSpecificationsUseCase = container.resolve(ListSpecificationsUseCase)

    const result = await listSpecificationsUseCase.execute()

    return res.json(result)
  }
}