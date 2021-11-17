import { injectable, inject } from 'tsyringe'
import fs from 'fs'
import csvParse from 'csv-parse'
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  assetPath: string
}

interface IImportCategory {
  name: string
  description: string
}

@injectable()
export class ImportCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository
  ) { }

  private loadCategories(assetPath: string): Promise<IImportCategory[]> {
    const stream = fs.createReadStream(assetPath)
    const categories: IImportCategory[] = []

    const parseFile = csvParse()

    stream.pipe(parseFile)

    return new Promise((resolve, reject) => {
      parseFile
        .on('data', async ([name, description]) => {
          categories.push({ name, description })
        })
        .on('end', async () => {
          await fs.promises.unlink(assetPath)

          resolve(categories)
        })
        .on('error', error => reject(error))
    })
  }

  public async execute({ assetPath }: IRequest): Promise<void> {
    const importedCategories = await this.loadCategories(assetPath)

    await Promise.all(importedCategories.map(async category => {
      const categoryAlreadyExists = await this
        .categoriesRepository
        .findByName(category.name)

      if (!categoryAlreadyExists) {
        this.categoriesRepository.create(category)
      }
    }))
  }
}