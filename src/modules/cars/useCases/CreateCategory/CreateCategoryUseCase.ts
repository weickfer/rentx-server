import { injectable, inject } from 'tsyringe'
import { AppException } from '../../../../shared/errors/AppException';

import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
  name: string
  description: string
}

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository
  ) { }

  public async execute({ name, description }: IRequest) {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name)

    if (categoryAlreadyExists) {
      throw new AppException({
        body: {
          error: 'Already exists category with this name!',
        },
        statusCode: 409,
      })
    }

    await this.categoriesRepository.create({ name, description })
  }
}