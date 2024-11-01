import 'reflect-metadata';
import { IMemoryCache, MemoryCache } from ".";

describe('MemoryCache tests', () => {
  let memoryCache: IMemoryCache;

  beforeEach(() => {
    memoryCache = new MemoryCache();
  });

  it('should add a value to the cache', () => {
    memoryCache.add("name", "John");
    expect(memoryCache.get("name")).toBe("John");
  });

  it('should delete a value from the cache', () => {
    memoryCache.add("name", "John");
    memoryCache.delete("name");
    expect(memoryCache.get("name")).toBeUndefined();
  });

  it('should return undefined when trying to delete a non-existing value', () => {
    expect(memoryCache.delete("name")).toBeUndefined();
  });

  it('should return undefined when getting a non-existing value', () => {
    expect(memoryCache.get("age")).toBeUndefined();
  });

  it('should return cache value when ttl is not set', () => {
    const timestamp = Date.now();
    memoryCache.add("name", "John");
    jest.spyOn(Date, 'now').mockReturnValue(timestamp + 31000);
    expect(memoryCache.get("name")).toBe("John");
  });

  it('should return undefined when getting cache after ttl', () => {
    const timestamp = Date.now();

    memoryCache.add("name", "Larry", 30);
    
    jest.spyOn(Date, 'now').mockReturnValue(timestamp + 31000);

    expect(memoryCache.get("name")).toBeUndefined();
  }); 
});
