import { injectable, inject } from 'tsyringe'

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

@injectable()
export class ListCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository
  ) { }

  public async execute() {
    return await this.categoriesRepository.list()
  }
}