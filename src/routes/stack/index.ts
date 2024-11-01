import { Router, Request, Response } from "express";
import { container } from "tsyringe";
import { StackRoutesHandler } from "./handler";
import { StackRoutesValidations } from "./validation";

export abstract class StackRouter {
  private static apiVersion = "/v1";
  private static path = "/stack";

  static getRouter(): Router {
    const router = Router();
    const stackHandlers = container.resolve(StackRoutesHandler);

    router.post(
      `${this.apiVersion}${this.path}`,
      StackRoutesValidations.addToStackValidation,
      (request: Request, response: Response) => {
        stackHandlers.addToStack(request, response);
      }
    );

    router.get(
      `${this.apiVersion}${this.path}`,
      (request: Request, response: Response) => {
        stackHandlers.popStack(request, response);
      }
    );

    return router;
  }
}
