import { Specification } from "../../models/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository
} from "../ISpecificationsRepository";

export class InMemorySpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[]

  private static INSTANCE: InMemorySpecificationsRepository

  public static getInstance(): InMemorySpecificationsRepository {
    if (!this.INSTANCE) {
      this.INSTANCE = new InMemorySpecificationsRepository()
    }

    return this.INSTANCE
  }

  constructor() {
    this.specifications = []
  }

  public create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification()

    Object.assign(specification, {
      name,
      description,
      created_at: new Date()
    })

    this.specifications.push(specification)
  }

  public findByName(name: string): Specification {
    return this.specifications.find(
      specification => specification.name === name
    )
  }

  public list(): Specification[] {
    return this.specifications
  }
}