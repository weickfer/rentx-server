import 'reflect-metadata'

import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors'

import swagger from 'swagger-ui-express'

import swaggerFile from './swagger.json'

import { routes } from './routes';

import './database'
import './shared/container'
import { AppException } from './shared/errors/AppException';

const app = express();

app.use(express.json())
app.use('/api-docs', swagger.serve, swagger.setup(swaggerFile))
app.use(routes)

app.use((error: Error, req: Request, res: Response, _: NextFunction) => {
  if (error instanceof AppException) {
    return res.status(error.statusCode).json(error.body)
  }

  return res.status(500).json({
    message: `Internal server error - ${error.message}`
  })
})

app.listen(3333, () => console.log('Server online!'));
