import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) { }

  public handle(req: Request, res: Response) {
    const result = this.listCategoriesUseCase.execute()

    return res.json(result)
  }
}