import 'reflect-metadata'

import express, { NextFunction, Request, Response } from 'express';
import swagger from 'swagger-ui-express'

import swaggerFile from './swagger.json'

import { routes } from './routes';

import './database'

const app = express();

app.use(express.json())
app.use('/api-docs', swagger.serve, swagger.setup(swaggerFile))
app.use(routes)

app.use((error: Request, req: Request, res: Response, _: NextFunction) => {
  if (error instanceof Error) {
    return res.status(400).json({
      error: error.message
    })
  }
})

app.listen(3333, () => console.log('Server online!'));
