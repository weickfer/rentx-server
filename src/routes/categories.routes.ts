import { Router } from "express";
import multer from 'multer'

import { uploadConfig } from '../config/upload'

import {
  CreateCategoryController
} from '../modules/cars/useCases/CreateCategory'
import {
  ListCategoriesController
} from "../modules/cars/useCases/ListCategories";
import {
  ImportCategoriesController
} from "../modules/cars/useCases/ImportCategories";

export const categoriesRouter = Router()

const upload = multer(uploadConfig.upload('./tmp/csv'))

const createCategoryController = new CreateCategoryController()
const listCategoriesController = new ListCategoriesController()
const importCategoriesController = new ImportCategoriesController()

categoriesRouter.get('/', listCategoriesController.handle)

categoriesRouter.post('/', createCategoryController.handle)

categoriesRouter.post(
  '/import',
  upload.single('file'),
  importCategoriesController.handle
)
