import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

export class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) { }

  public execute() {
    return this.categoriesRepository.list()
  }
}