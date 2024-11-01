import { singleton } from "tsyringe";

export interface IMemoryCache {
  add(key: string, value: string, ttl?: number): void;
  delete(key: string): string | undefined;
  get(key: string): string | undefined;
}

interface CacheValue {
  value: string;
  expiresAt?: number;
}

@singleton()
export class MemoryCache implements IMemoryCache {
  private cache: Map<string, CacheValue>;

  constructor() {
    this.cache = new Map<string, CacheValue>();
  }

  add(key: string, value: string, ttl = 0): void {
    const cacheValue: CacheValue = { value };
    if (ttl > 0) {
      const miliseconds = ttl * 1000;
      cacheValue.expiresAt = Date.now() + miliseconds;
    }
    this.cache.set(key, cacheValue);
  }

  get(key: string): string | undefined {
    const data = this.cache.get(key);
    if (data?.expiresAt && data.expiresAt < Date.now()) {
      this.cache.delete(key);
      return undefined;
    }
    return data?.value;
  }

  delete(key: string): string | undefined {
    const data = this.cache.get(key);
    this.cache.delete(key);
    return data?.value;
  }
}
