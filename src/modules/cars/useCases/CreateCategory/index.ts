import {
  InMemoryCategoriesRepository
} from '../../repositories/implementations/InMemoryCategoriesRepository'

import { CreateCategoryUseCase } from './CreateCategoryUseCase'
import { CreateCategoryController } from './CreateCategoryController'

const categoriesRepository = InMemoryCategoriesRepository.getInstance()

const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)

export const createCategoryController = new CreateCategoryController(createCategoryUseCase)
