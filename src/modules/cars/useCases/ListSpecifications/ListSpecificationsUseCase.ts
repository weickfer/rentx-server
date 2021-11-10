import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

export class ListSpecificationsUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) { }

  public execute() {
    return this.specificationsRepository.list()
  }
}