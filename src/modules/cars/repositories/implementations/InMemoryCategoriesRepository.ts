import { Category } from "../../entities/Category";
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

  public async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = new Category()

    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    })

    this.categories.push(category)
  }

  public async list(): Promise<Category[]> {
    return this.categories
  }

  public async findByName(name: string): Promise<Category> {
    return this.categories.find(category => category.name === name)
  }
}