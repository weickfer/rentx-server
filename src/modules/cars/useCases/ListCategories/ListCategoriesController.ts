import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController {
  public async handle(req: Request, res: Response) {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase)

    const result = await listCategoriesUseCase.execute()

    return res.json(result)
  }
}