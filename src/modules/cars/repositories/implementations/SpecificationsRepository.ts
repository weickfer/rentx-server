import { getRepository, Repository } from "typeorm";
import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";

export class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>

  constructor() {
    this.repository = getRepository(Specification)
  }


  public async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      name, description
    })

    await this.repository.save(specification)
  }

  public async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({
      where: { name }
    })

    return specification
  }

  public async list(): Promise<Specification[]> {
    const specifications = await this.repository.find()

    return specifications
  }


}