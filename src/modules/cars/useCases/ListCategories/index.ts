import {
  InMemoryCategoriesRepository
} from '../../repositories/implementations/InMemoryCategoriesRepository'

import { ListCategoriesUseCase } from './ListCategoriesUseCase'
import { ListCategoriesController } from './ListCategoriesController'

const categoriesRepository = InMemoryCategoriesRepository.getInstance()

const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository)

export const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase
)
