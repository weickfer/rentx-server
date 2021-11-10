import { Router } from "express";

import { listSpecificationsController } from "../modules/cars/useCases/ListSpecifications";
import { createSpecificationController } from "../modules/cars/useCases/CreateSpecification";

export const specificationsRouter = Router()

specificationsRouter.get('/', (req, res) => {
  // return res.send('oi')
  console.log('Hot reloading enabled')
  return listSpecificationsController.handle(req, res)
})

specificationsRouter.post('/', (req, res) => {
  console.log('Reloaded.')
  return createSpecificationController.handle(req, res)
})
