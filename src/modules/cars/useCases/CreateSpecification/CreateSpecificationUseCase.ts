import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string
  description: string
}

export class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) { }

  public execute({ name, description }: IRequest) {
    const specificationAlreadyExists = this.specificationsRepository.findByName(name)

    if (specificationAlreadyExists) {
      throw new Error('Already exists specification with this name')
    }

    this.specificationsRepository.create({ name, description })
  }
}