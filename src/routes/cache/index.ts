import { Router, Request, Response } from "express";
import { container } from "tsyringe";
import { CacheRoutesHandler } from "./handler";
import { CacheRoutesValidation } from "./validation";

export abstract class CacheRouter {
  private static apiVersion = "/v1";
  private static path = "/cache";

  static getRouter(): Router {
    const router = Router();
    const handlers = container.resolve(CacheRoutesHandler);

    router.post(
      `${this.apiVersion}${this.path}`,
      CacheRoutesValidation.addToCacheValidation,
      (request: Request, response: Response) => {
        handlers.add(request, response);
      }
    );

    router.get(
      `${this.apiVersion}${this.path}/:key`,
      CacheRoutesValidation.keyParamValidation,
      (request: Request, response: Response) => {
        handlers.get(request, response);
      }
    );

    router.delete(
      `${this.apiVersion}${this.path}/:key`,
      CacheRoutesValidation.keyParamValidation,
      (request: Request, response: Response) => {
        handlers.delete(request, response);
      }
    );

    return router;
  }
}
