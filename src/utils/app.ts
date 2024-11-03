import express, { Express } from "express";
import cors from 'cors';
import { errors } from 'celebrate';

import { CacheRouter } from '@routes/cache';
import { StackRouter } from '@routes/stack';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';

export function setupApp(app: Express): Express {
  app.use(express.json({ limit: "35mb" }));
  app.use(express.urlencoded({ extended: true }));
  app.use(cors({ origin: 'localhost' }));


  app.use("/", StackRouter.getRouter());
  app.use("/", CacheRouter.getRouter());
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  app.use(errors());

  return app;
}
