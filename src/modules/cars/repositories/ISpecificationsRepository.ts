import { Specification } from "../models/Specification";

export type ICreateSpecificationDTO = {
  name: string
  description: string
}

export interface ISpecificationsRepository {
  create(data: ICreateSpecificationDTO): void
  findByName(name: string): Specification
  list(): Specification[]
}