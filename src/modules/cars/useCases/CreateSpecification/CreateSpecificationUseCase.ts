import { injectable, inject } from 'tsyringe'
import { AppException } from '../../../../shared/errors/AppException';

import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string
  description: string
}

@injectable()
export class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository
  ) { }

  public async execute({ name, description }: IRequest) {
    const specificationAlreadyExists = await this.specificationsRepository.findByName(name)

    if (specificationAlreadyExists) {
      throw new AppException({
        body: {
          error: 'Already exists specification with this name',
        },
        statusCode: 409,
      })
    }

    await this.specificationsRepository.create({ name, description })
  }
}