import { Router } from "express";
import multer from 'multer'

import {
  createCategoryController
} from '../modules/cars/useCases/CreateCategory'
import {
  listCategoriesController
} from "../modules/cars/useCases/ListCategories";
import {
  importCategoriesController
} from "../modules/cars/useCases/ImportCategories";

export const categoriesRouter = Router()
const upload = multer({
  dest: './tmp'
})

categoriesRouter.get('/', (req, res) => {
  return listCategoriesController.handle(req, res)
})

categoriesRouter.post('/', (req, res) => {
  return createCategoryController.handle(req, res)
})

categoriesRouter.post('/import', upload.single('file'), (req, res) => {
  return importCategoriesController.handle(req, res)
})

