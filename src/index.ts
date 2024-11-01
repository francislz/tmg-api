import 'reflect-metadata';
import './containers';

import express, { Express } from "express";
import dotenv from "dotenv";
import { StackRouter } from '@routes/stack';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import { errors } from 'celebrate';
import { CacheRouter } from '@routes/cache';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json({ limit: "35mb" }));
app.use(express.urlencoded({ extended: true }));


app.use("/", StackRouter.getRouter());
app.use("/", CacheRouter.getRouter());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Celebrate error handler
app.use(errors());

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
  console.log(`[server]: Docs are running at http://localhost:${port}/docs`);
});
