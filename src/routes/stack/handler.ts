import { StackController } from "@controllers/stack";
import { Request, Response } from "express";
import { injectable } from "tsyringe";
import { EmptyStackError } from "@exceptions/stack";

export interface IStackRoutesHandler {
  addToStack(request: Request, response: Response): Promise<Response>;
  popStack(request: Request, response: Response): Promise<Response>;
}

@injectable()
export class StackRoutesHandler implements IStackRoutesHandler {
  constructor(private readonly stackController: StackController) {}

  async addToStack(request: Request, response: Response): Promise<Response> {
    try {
      const { value } = request.body;
      await this.stackController.push(value);
      return response.status(201).json({ message: "Value added to stack" });
    } catch (error) {
      return response.status(500).json({ message: 'Unknown error', error });
    }
  }

  async popStack(request: Request, response: Response): Promise<Response> {
    try {
      const data = await this.stackController.pop();
      return response.status(200).json({ data });
    } catch (error) {
      if (error instanceof EmptyStackError) {
        return response.status(400).json({ message: error.message });
      }
      return response.status(500).json({ message: 'Unknown error', error });
    }
  }
}
