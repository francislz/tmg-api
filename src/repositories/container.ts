import { container } from "tsyringe";
import { IMemoryStack, MemoryStack } from "./memoryStack";

container.registerSingleton<IMemoryStack>("IMemoryStack", MemoryStack);
