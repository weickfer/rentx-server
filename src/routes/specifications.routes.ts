import { Router } from "express";

import { ListSpecificationsController } from "../modules/cars/useCases/ListSpecifications";
import { CreateSpecificationController } from "../modules/cars/useCases/CreateSpecification";

export const specificationsRouter = Router()

const listSpecificationsController = new ListSpecificationsController()
const createSpecificationController = new CreateSpecificationController()

specificationsRouter.get('/', listSpecificationsController.handle)

specificationsRouter.post('/', createSpecificationController.handle)
