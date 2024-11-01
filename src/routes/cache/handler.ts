import { injectable } from "tsyringe";
import { Request, Response } from "express";
import { MemoryCacheController } from "@controllers/memoryCache";

export interface ICacheRoutesHandler {
  add(request: Request, response: Response): Promise<Response>;
  delete(request: Request, response: Response): Promise<Response>;
  get(request: Request, response: Response): Promise<Response>;
}

@injectable()
export class CacheRoutesHandler implements ICacheRoutesHandler {
  constructor(private cacheController: MemoryCacheController){}

  async add(request: Request, response: Response): Promise<Response> {
    try {
      const { key, value, ttl } = request.body;
      await this.cacheController.add(key, value, ttl);
      return response.status(201).json({ message: 'Value added to cache' });
    } catch (error) {
      return response.status(500).json({ message: 'Unknown error', error });
    }
  }

  async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { key } = request.params;
      const data = await this.cacheController.delete(key);
      return response.status(200).json({ data });
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: error.message });
      }
      return response.status(500).json({ message: 'Unknown error', error });
    }
  }

  async get(request: Request, response: Response): Promise<Response> {
    try {
      const { key } = request.params;
      const data = await this.cacheController.get(key);
      return response.status(200).json({ data });
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: error.message });
      }
      return response.status(500).json({ message: 'Unknown error', error });
    }
  }

}

