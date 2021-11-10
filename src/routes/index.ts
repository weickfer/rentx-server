import { Router } from "express";
import { categoriesRouter } from "./categories.routes";
import { specificationsRouter } from "./specifications.routes";

export const routes = Router()

routes.use('/categories', categoriesRouter)
routes.use('/specifications', specificationsRouter)