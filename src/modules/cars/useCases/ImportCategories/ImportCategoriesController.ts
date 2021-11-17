import { Request, Response } from "express";
import { container } from 'tsyringe'

import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";

export class ImportCategoriesController {
  public async handle(req: Request, res: Response) {
    const { file } = req

    const importCategoriesUseCase = container.resolve(ImportCategoriesUseCase)

    await importCategoriesUseCase.execute({ assetPath: file.path })

    return res.status(201).send()
  }
}