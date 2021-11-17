import { injectable, inject } from 'tsyringe'

import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

@injectable()
export class ListSpecificationsUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository
  ) { }

  public async execute() {
    return await this.specificationsRepository.list()
  }
}