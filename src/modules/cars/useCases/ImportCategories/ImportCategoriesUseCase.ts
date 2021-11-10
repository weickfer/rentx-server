import fs from 'fs'
import csvParse from 'csv-parse'
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  file: Express.Multer.File
}

interface IImportCategory {
  name: string
  description: string
}

export class ImportCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) { }

  private loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    const stream = fs.createReadStream(file.path)
    const categories: IImportCategory[] = []

    const parseFile = csvParse()

    stream.pipe(parseFile)

    return new Promise((resolve, reject) => {
      parseFile
        .on('data', async ([name, description]) => {
          categories.push({ name, description })
        })
        .on('end', async () => {
          await fs.promises.unlink(file.path)

          resolve(categories)
        })
        .on('error', error => reject(error))
    })
  }

  public async execute({ file }: IRequest): Promise<void> {
    const importedCategories = await this.loadCategories(file)

    importedCategories.map(category => {
      const categoryAlreadyExists = this
        .categoriesRepository
        .findByName(category.name)

      if (!categoryAlreadyExists) {
        this.categoriesRepository.create(category)
      }
    })
  }
}