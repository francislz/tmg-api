import { container } from "tsyringe";
import { IMemoryStack, MemoryStack } from "./memoryStack";
import { IMemoryCache, MemoryCache } from "./memoryCache";

container.registerSingleton<IMemoryStack>("IMemoryStack", MemoryStack);
container.registerSingleton<IMemoryCache>("IMemoryCache", MemoryCache);
