import 'reflect-metadata';
import { IMemoryCacheController, MemoryCacheController } from './index';
import { IMemoryCache, MemoryCache } from '@repositories/memoryCache';

describe('MemoryCacheController tests', () => {
  let memoryCacheController: IMemoryCacheController;
  let memoryCache: IMemoryCache;

  beforeEach(() => {
    memoryCache = new MemoryCache();
    memoryCacheController = new MemoryCacheController(memoryCache);
  });

  it('should add a value to the cache', async () => {
    await memoryCacheController.add("name", "John");
    expect(await memoryCacheController.get("name")).toBe("John");
  });

  it('should delete a value from the cache', async () => {
    await memoryCacheController.add("name", "John");
    const deleted = await memoryCacheController.delete("name");
    expect(deleted).toBe("John");
  });

  it('should throw an error when trying to delete a non-existing value', async () => {
    await expect(memoryCacheController.delete("name")).rejects.toThrow("Key not found");
  });

  it('should throw an error when getting a non-existing value', async () => {
    await expect(memoryCacheController.get("age")).rejects.toThrow("Key not found");
  });

  it('should return cache value when ttl is not set', async () => {
    const timestamp = Date.now();
    await memoryCacheController.add("name", "John");
    jest.spyOn(Date, 'now').mockReturnValue(timestamp + 31000);
    expect(await memoryCacheController.get("name")).toBe("John");
  });

  it('should return undefined when getting cache after ttl', async () => {
    const timestamp = Date.now();

    await memoryCacheController.add("name", "Larry", 30);
    
    jest.spyOn(Date, 'now').mockReturnValue(timestamp + 31000);

    await expect(memoryCacheController.get("name")).rejects.toThrow("Key not found");
  });
});
