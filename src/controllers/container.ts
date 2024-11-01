import { container } from "tsyringe";
import { IStackController, StackController } from "./stack";
import { IMemoryCacheController, MemoryCacheController } from "./memoryCache";

container.registerSingleton<IStackController>("IStackController", StackController);
container.registerSingleton<IMemoryCacheController>("IMemoryCacheController", MemoryCacheController);
