import { InMemoryCategoriesRepository } from "../../repositories/implementations/InMemoryCategoriesRepository";
import { ImportCategoriesController } from "./ImportCategoriesController";
import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";

const categoriesRepository = InMemoryCategoriesRepository.getInstance()

const importCategoriesUseCase = new ImportCategoriesUseCase(categoriesRepository)

export const importCategoriesController = new ImportCategoriesController(
  importCategoriesUseCase
)
