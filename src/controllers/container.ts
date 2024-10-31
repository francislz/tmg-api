import { container } from "tsyringe";
import { IStackController, StackController } from "./stack";

container.registerSingleton<IStackController>("IStackController", StackController);
