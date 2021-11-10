import { Category } from "../models/Category";

export type ICreateCategoryDTO = {
  name: string
  description: string
}

export interface ICategoriesRepository {
  create(data: ICreateCategoryDTO): void
  findByName(name: string): Category
  list(): Category[]
}