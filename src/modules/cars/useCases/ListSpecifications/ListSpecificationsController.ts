import { Request, Response } from "express";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

export class ListSpecificationsController {
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) { }

  public handle(req: Request, res: Response) {
    const result = this.listSpecificationsUseCase.execute()

    return res.json(result)
  }
}