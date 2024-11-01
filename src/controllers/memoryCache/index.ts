import { MemoryCache } from "@repositories/memoryCache";
import { injectable } from "tsyringe";
import { KeyNotFoundError } from "@exceptions/cache";

export interface IMemoryCacheController {
  add(key: string, value: string, ttl?: number): Promise<void>;
  delete(key: string): Promise<string>;
  get(key: string): Promise<string>;
}

@injectable()
export class MemoryCacheController implements IMemoryCacheController {
  constructor(private readonly memoryCache: MemoryCache) {}

  async add(key: string, value: string, ttl = 0): Promise<void> {
    this.memoryCache.add(key, value, ttl);
  }

  async delete(key: string): Promise<string> {
    const data = this.memoryCache.delete(key);
    if (!data) {
      throw new KeyNotFoundError();
    }
    return data;
  }

  async get(key: string): Promise<string> {
    const data = this.memoryCache.get(key);
    if (!data) {
      throw new KeyNotFoundError();
    }
    return data;
  }
}
