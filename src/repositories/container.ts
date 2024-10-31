import { container } from "tsyringe";
import { IMemoryStack } from "./memoryStack/memory-stack.interface";
import { MemoryStack } from "./memoryStack";

container.registerSingleton<IMemoryStack>("IMemoryStack", MemoryStack);
