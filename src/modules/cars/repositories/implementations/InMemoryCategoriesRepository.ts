import { Category } from "../../models/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";

export class InMemoryCategoriesRepository implements ICategoriesRepository {
  private categories: Category[]

  private static INSTANCE: InMemoryCategoriesRepository

  public static getInstance(): InMemoryCategoriesRepository {
    if (!this.INSTANCE) {
      this.INSTANCE = new InMemoryCategoriesRepository()
    }
    return this.INSTANCE
  }

  private constructor() {
    this.categories = []
  }

  public create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category()

    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    })

    this.categories.push(category)
  }

  public list(): Category[] {
    return this.categories
  }

  public findByName(name: string): Category {
    return this.categories.find(category => category.name === name)
  }
}