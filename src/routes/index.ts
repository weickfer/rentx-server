import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { authenticateRouter } from "./authenticate.routes";
import { categoriesRouter } from "./categories.routes";
import { specificationsRouter } from "./specifications.routes";
import { usersRouter } from "./users.routes";

export const routes = Router()

routes.get('/', ensureAuthenticated, (_, res) => res.send('OI'))

routes.use('/users', usersRouter)

routes.use('/categories', categoriesRouter)
routes.use('/specifications', specificationsRouter)

routes.use(authenticateRouter)
