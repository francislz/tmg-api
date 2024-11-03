import 'reflect-metadata';
import './containers';

import express, { Express } from "express";
import dotenv from "dotenv";
import { setupApp } from '@utils/app';

dotenv.config();

const app: Express = setupApp(express());
const port = process.env.PORT || 3000;


// Celebrate error handler

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
  console.log(`[server]: Docs are running at http://localhost:${port}/docs`);
});
