import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
  name: string
  description: string
}

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) { }

  execute({ name, description }: IRequest) {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name)

    if (categoryAlreadyExists) {
      throw new Error('Already exists category with this name!')
    }

    this.categoriesRepository.create({ name, description })
  }
}